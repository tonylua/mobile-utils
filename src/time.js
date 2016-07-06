import {format_num} from './format';
import env from './env';

const
	_timezone = (new Date).getTimezoneOffset(),
	_tz = parseInt(_timezone / 60),
	_testDateIOSTrans = (env.ios || /invalid/.test((new Date((new Date).toISOString())).toString().toLowerCase())),
    _aSecond = 1000,
    _aMinute = 60 * _aSecond,
    _aHour = 60 * _aMinute,
    _aDay = 24 * _aHour;

/**
 * 将字符串转化为yyyymmdd格式
 * @param  {Date} date - 目标时间
 * @param  {String} [div='-'] - 分隔符
 * @return {String}
 */
export const date_to_YMD = (date, div='-') => 
    [date.getFullYear(), date.getMonth()+1, date.getDate()].map(num => format_num(num)).join(div);

/**
 * 取得某个时间
 * @param  {Object} [setting] - {偏移值 offset, 基准时间 from, 是否置为0点 zeroTime, 是否置为1月1日 clean}
 * @return {Date}
 */
export const getTime = (setting={
    offset: 0, 
    zeroTime: false, 
    clean: false, 
    from: new Date
}) => {
    let 
        {
            offset, 
            zeroTime, 
            clean, 
            from
        } = setting,
        d = new Date(from);
    if (clean) {
        d.setDate(1); /*注意顺序 否则2月可能在遇到30号时出错*/
        d.setMonth(0);
    }
    if (zeroTime) {
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        d.setMilliseconds(0);
    }
    if (offset) {
        d.setTime(d.getTime() + offset);
    }
    return d;
};

/**
 * 取得当天
 * @param  {Boolean} [zeroTime=true] - 是否置为0点
 * @return {Date}
 */
export const today = (zeroTime=true) => getTime({zeroTime});

/**
 * 取得明天
 * @param  {Boolean} [zeroTime=true] - 是否置为0点
 * @return {Date}
 */
export const tomorrow = (zeroTime=true) => getTime({zeroTime, offset: _aDay});

/**
 * 取得昨天
 * @param  {Boolean} [zeroTime=true] - 是否置为0点
 * @return {Date}
 */
export const yesterday = (zeroTime=true) => getTime({zeroTime, offset: -_aDay});

/**
 * 取得一个某年某月1号0时的干净日期
 * @param  {Number} [p_month=0]
 * @param  {Number} [p_year=今年]
 * @return {Date}
 */
export const get_clean_date = (p_month=0, p_year=(new Date).getFullYear()) => {
    let d = getTime({clean: true, zeroTime: true});
    d.setFullYear(p_year);
    d.setMonth(p_month);
    return d;
};

/**
 * 取得某月中的日期
 * @param  {Number} p_year
 * @param  {Number} [p_month=0]
 * @return {Array} 星期-日期 的二维数组
 */
export const dates_of_month = (p_year, p_month=0) => {
    let
        matrix = [
            []
        ],
        putDay = function(d, isLastRow = false) {
            matrix[matrix.length - 1].push(d == null ? null : d.toISOString());
            if (!isLastRow && matrix[matrix.length - 1].length == 7) {
                matrix[matrix.length] = [];
            }
        },
        day = get_clean_date(p_month, p_year);
    for (var i = 0, lng = day.getDay(); i < lng; i++) {
        putDay(null);
    }
    while (day.getMonth() == p_month) {
        putDay(day);
        day.setDate(day.getDate() + 1);
    }
    if (!matrix[matrix.length - 1].length) {
        matrix.pop();
    }
    while (matrix[matrix.length - 1].length < 7) {
        putDay(null, true);
    }
    return matrix;
};

/**
 * 取得开始-结束的日期范围
 * @param  {Number} rangeNums - 开始到结束的天数
 * @param  {Date} [from=今天] - 基准日期
 * @return {Object}
 */
export const date_range = (rangeNums, from = getToday()) => {
    let 
        days = parseInt(rangeNums) * _aDay,
        endDay = getTime({from, offset: days});
    return {
        start: from, 
        end: endDay, 
        start_str: formatDate(today), 
        end_str: formatDate(endDay)
    };
};

/**
 * 是否闰年
 * @param  {Number} [year=null] 年份
 * @return {Boolean}
 */
export const is_leap_year = (year=null) => { 
    let 
        currY = (new Date).getFullYear()
        y = year || currY;
    y = parseInt(y);
    if (isNaN(y)) y = currY;
    return (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) ? 1 : 0;
};