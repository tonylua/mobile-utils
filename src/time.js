import {format_num} from './format';

const
	_timezone = (new Date).getTimezoneOffset(),
	_tz = parseInt(_timezone / 60),
	_testDateIOSTrans = (Env.ios || /invalid/.test((new Date((new Date).toISOString())).toString().toLowerCase())),
    _aSecond = 1000,
    _aMinute = 60 * _aSecond,
    _aHour = 60 * _aMinute,
    _aDay = 24 * _aHour;

export const date_from_IOS = (isoStr, needTrans) => { /*IOS等系统无法直接转换isostring*/
    try {
        if (_testDateIOSTrans || needTrans) {
            let
				s = isoStr.replace('T', ' ').replace('Z', '').replace(/\-/g, '/').replace(/\..*$/, ''),
            	d = new Date(s);
            d.setHours(d.getHours() - _tz);
            return d;
        }
    } catch (ex) {}
    return new Date(isoStr);
};

export const date_from_YMD = (ymdStr, hmsStr = -_tz + ':00:00') => {
    let d = date_from_IOS(ymdStr + 'T' + hmsStr + '.000Z', true);
    d.setHours(d.getHours() + _tz);
    return d;
};

export const date_to_YMD = (date, div='-') => 
    [date.getFullYear(), date.getMonth()+1, date.getDate()].map(num => format_num(num)).join(div);

export const time = (setting={
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

/*取得当天*/
export const today = (zeroTime=true) => time({zeroTime});

/*取得明天*/
export const tomorrow = (zeroTime=true) => time({zeroTime, offset: _aDay});

/*取得昨天*/
export const yesterday = (zeroTime=true) => time({zeroTime, offset: -_aDay});

//取得一个某年某月1号0时的干净日期
export const get_clean_date(p_month=0, p_year=(new Date).getFullYear()) {
    let d = time({clean: true, zeroTime: true});
    d.setFullYear(p_year);
    d.setMonth(p_month);
    return d;
};

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

/*取得开始-结束的日期范围*/
export const date_range = (rangeNums, from = getToday()) => {
    let 
        days = parseInt(rangeNums) * _aDay,
        endDay = time({from, offset: days});
    return {
        start: from, 
        end: endDay, 
        start_str: formatDate(today), 
        end_str: formatDate(endDay)
    };
};

/*是否闰年*/
export const is_leap_year = (year=null) => { 
    let 
        currY = (new Date).getFullYear()
        y = year || currY;
    y = parseInt(y);
    if (isNaN(y)) y = currY;
    return (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) ? 1 : 0;
};