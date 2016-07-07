import {trim} from './format';

/**
 * 判断元素是否有指定className
 * @param  {Element} ele
 * @param  {String} clsName
 * @return {Boolean}
 * @memberOf mUtils.dom
 */
const has_class = (ele, clsName) => (new RegExp('(^|\\s)+(' + clsName + ')(\\s|$)+', 'g')).test(ele.className);

/**
 * 删除className
 * @param  {Element} ele
 * @param  {String} clsName
 * @return {void}
 * @memberOf mUtils.dom
 */
function remove_class(ele, clsName) {
    if (typeof ele === 'string') {
        try {
            ele = document.querySelector(ele);
        } catch (ex) {}
    }
    let re = new RegExp('(^|\\s)+(' + clsName + ')(\\s|$)+', 'g');
    try {
        ele.className = ele.className.replace(re, "$1$3");
    } catch (ex) {}
    re = null;
};

/**
 * 添加className
 * @param  {Element} ele
 * @param  {String} clsName
 * @return {void}
 * @memberOf mUtils.dom
 */
function add_class(ele, clsName) {
    if (typeof ele === 'string') {
        try {
            ele = document.querySelector(ele);
        } catch (ex) {}
    }
    remove_class(ele, clsName);
    ele.className = trim(ele.className + ' ' + clsName);
};

/**
 * 获取计算样式
 * @param  {Element} [ele=null] - 目标元素
 * @param  {String} [styleName=null] - 样式名
 * @return {String}
 * @memberOf mUtils.dom
 */
const real_style = (ele=null, styleName=null) => {
    if (!ele || !styleName) return;
    let rtn = '';
    try {
        rtn = (typeof(window.getComputedStyle) == 'undefined') 
        	? ele.currentStyle[styleName] 
        	: window.getComputedStyle(ele, null)[styleName];
    } catch (ex) {
        rtn = ele.style[styleName];
    }
    return rtn.replace(/px$/, '');
};

/**
 * 在指定元素内的最末插入html
 * @param  {Element} dom
 * @param  {String} html
 * @return {void}
 * @memberOf mUtils.dom
 */
const append_HTML = (dom, html) => dom.insertAdjacentHTML('beforeEnd', html);

/**
 * 在指定元素内的开始插入html
 * @param  {Element} dom
 * @param  {String} html
 * @return {void}
 * @memberOf mUtils.dom
 */
const prepend_HTML = (dom, html) => dom.insertAdjacentHTML('afterBegin', html);

/**
 * 根据特征值找到一段html中其所在的tag范围
 * @param  {String} p_featureStr - 特征值
 * @param  {String} p_html - 作为查找范围的html
 * @return {Object} {start, end}
 * @memberOf mUtils.dom
 */
const tag_range_from_HTML = (p_featureStr, p_html) => {
    let
    	t = p_html + '',
        p = p_featureStr,
        eStart = t.indexOf(p),
        eEnd = null,
        temp = null,
        tagMth = null,
        tagName = null,
        closeTag = null,
        m = null;
    if (eStart == -1) {
        return null;
    }
    temp = t.substr(0, eStart + p.length);
    eStart = temp.lastIndexOf('<');
    temp = t.substr(eStart);
    tagMth = temp.match(/^\<([a-zA-Z1-6]+)[\s\>]/);
    tagName = tagMth[1];
    if (new RegExp('^\\<' + tagName + '[^\\>]*\\/\\>').test(temp)) { /* 直接关闭 <tag /> */
        closeTag = '/>';
        eEnd = eStart + temp.indexOf(closeTag) + closeTag.length;
    } else {
        closeTag = '</' + tagName + '>';
        eEnd = eStart + temp.indexOf(closeTag) + closeTag.length;
        temp = t.substring(eStart + tagName.length + temp.indexOf('>'), eEnd);
        m = temp.match(new RegExp('\\<' + tagName + '[^\/\>]*[^\\/]?\\>', 'g'));
        if (m != null) { /*是否嵌套了相同元素*/
            var lng = m.length;
            while (lng--) {
                eEnd += t.substr(eEnd).indexOf(closeTag) + closeTag.length;
            }
        }
    }
    return {
        start: eStart,
        end: eEnd
    };
};


export 
/**
 * @namespace dom
 * @memberOf mUtils
 * @type {Object}
 */
{
    has_class,
    add_class,
    remove_class,
    real_style,
    append_HTML,
    prepend_HTML,
    tag_range_from_HTML,
};