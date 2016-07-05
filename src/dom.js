import {trim} from './format';

export const hasClass = (obj, clsName) => (new RegExp('(^|\\s)+(' + clsName + ')(\\s|$)+', 'g')).test(obj.className);

export const removeClass = (obj, clsName) => {
    if (typeof obj === 'string') {
        try {
            obj = document.querySelector(obj);
        } catch (ex) {}
    }
    let re = new RegExp('(^|\\s)+(' + clsName + ')(\\s|$)+', 'g');
    try {
        obj.className = obj.className.replace(re, "$1$3");
    } catch (ex) {}
    re = null;
};

export const addClass = (obj, clsName) => {
    if (typeof obj === 'string') {
        try {
            obj = document.querySelector(obj);
        } catch (ex) {}
    }
    removeClass(obj, clsName);
    obj.className = trim(obj.className + ' ' + clsName);
};

export const getRealStyle = (object=null, styleName=null) => {
    if (!object || !styleName) return;
    let rtn = '';
    try {
        rtn = (typeof(window.getComputedStyle) == 'undefined') 
        	? object.currentStyle[styleName] 
        	: window.getComputedStyle(object, null)[styleName];
    } catch (ex) {
        rtn = object.style[styleName];
    }
    return rtn.replace(/px$/, '');
};

export const appendHTML = (dom, html) => dom.insertAdjacentHTML('beforeEnd', html);

export const prependHTML = (dom, html) => dom.insertAdjacentHTML('afterBegin', html);

/*根据特征值找到一段html中其所在的tag范围*/
export const getTagRangeFromHTMLStr = (p_featureStr, p_html) => {
    let
    	t = p_html + '',
        p = p_featureStr,
        eStart = t.indexOf(p),
        eEnd = null,
        temp = null,
        tagName = null,
        closeTag = null,
        m = null;
    if (eStart == -1) {
        return null;
    }
    temp = t.substr(0, eStart + p.length);
    eStart = temp.lastIndexOf('<');
    temp = t.substr(eStart);
    tagName = temp.match(/^\<([a-zA-Z]+)[\s\>]/)[1];
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