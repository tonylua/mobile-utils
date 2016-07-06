(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mobile-utils", [], factory);
	else if(typeof exports === 'object')
		exports["mobile-utils"] = factory();
	else
		root["mobile-utils"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.compatible = undefined;
	
	var _env = __webpack_require__(1);
	
	var _env2 = _interopRequireDefault(_env);
	
	var _lang = __webpack_require__(2);
	
	var _lang2 = _interopRequireDefault(_lang);
	
	var _dom = __webpack_require__(3);
	
	var _event = __webpack_require__(5);
	
	var _format = __webpack_require__(4);
	
	var _time = __webpack_require__(6);
	
	var _url = __webpack_require__(7);
	
	var _utils = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * the entry point
	 * @type {Object}
	 */
	
	var mobile_utils = {
	    env: _env2.default,
	    lang: {
	        read: _lang2.default
	    },
	    dom: {
	        has_class: _dom.has_class,
	        add_class: _dom.add_class,
	        remove_class: _dom.remove_class,
	        real_style: _dom.real_style,
	        append_HTML: _dom.append_HTML,
	        prepend_HTML: _dom.prepend_HTML,
	        tag_range_from_HTML: _dom.tag_range_from_HTML
	    },
	    event: {
	        on_tweened: _event.on_tweened,
	        on_page_loaded: _event.on_page_loaded,
	        on_page_rotated: _event.on_page_rotated,
	        listen_select_change: _event.listen_select_change,
	        fake_click: _event.fake_click,
	        is_event_on_target: _event.is_event_on_target
	    },
	    format: {
	        reverse_str: _format.reverse_str,
	        step_str: _format.step_str,
	        knot_num: _format.knot_num,
	        num_pad_left: _format.num_pad_left,
	        limit_decimal: _format.limit_decimal,
	        trim: _format.trim
	    },
	    time: {
	        date_to_YMD: _time.date_to_YMD,
	        getTime: _time.getTime,
	        today: _time.today,
	        tomorrow: _time.tomorrow,
	        yesterday: _time.yesterday,
	        get_clean_date: _time.get_clean_date,
	        dates_of_month: _time.dates_of_month,
	        date_range: _time.date_range,
	        is_leap_year: _time.is_leap_year
	    },
	    url: {
	        query_params: _url.query_params,
	        URLHash: _url.URLHash
	    },
	    utils: {
	        check_appcache: _utils.check_appcache,
	        page_to_top: _utils.page_to_top,
	        write_CSS: _utils.write_CSS
	    }
	};
	exports.default = mobile_utils;
	
	//for old version only
	
	var compatible = exports.compatible = {
	    i18n: {
	        getKey: _lang2.default
	    },
	    dom: {
	        hasClass: _dom.has_class,
	        addClass: _dom.add_class,
	        removeClass: _dom.remove_class,
	        getRealStyle: _dom.real_style,
	        appendHTML: _dom.append_HTML,
	        prependHTML: _dom.prepend_HTML
	    },
	    event: {
	        onPageLoaded: _event.on_page_loaded,
	        onPageRotated: _event.on_page_rotated,
	        onTweened: _event.on_tweened,
	        fakeClick: _event.fake_click,
	        listenSelectChange: _event.listen_select_change
	    },
	    utils: {
	        checkOffline: _utils.check_appcache,
	        pageToTop: _utils.page_to_top,
	        trim: _format.trim,
	        ensureNumberStringLength: _format.num_pad_left,
	        getDatesOfMonth: _time.dates_of_month,
	        writeCSS: _utils.write_CSS,
	        getTagRangeFromHTMLStr: _dom.tag_range_from_HTML
	    },
	    env: _env2.default,
	    urlHash: _url.URLHash
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var _ua = navigator.userAgent,
	    _m = null,
	    _formatV = function _formatV(vstr, vdiv) {
	    var f = vstr.split(vdiv);
	    f = f.shift() + '.' + f.join('');
	    return f * 1;
	},
	    _break = false,
	    env = {
	    ua: _ua,
	    version: null,
	    ios: false,
	    android: false,
	    windows: false,
	    blackberry: false,
	    weixin: false,
	    wVersion: null,
	    qq: false,
	    qVersion: null,
	    touchSupport: 'createTouch' in document,
	    hashSupport: !!('onhashchange' in window)
	};
	
	_m = _ua.match(/MicroMessenger\/([\.0-9]+)/);
	if (_m != null) {
	    env.weixin = true;
	    env.wVersion = _formatV(_m[1], '.');
	}
	
	_m = _ua.match(/QQ\/([\d\.]+)$/);
	if (_m != null) {
	    env.qq = true;
	    env.qVersion = _formatV(_m[1], '.');
	}
	
	_m = _ua.match(/i(Pod|Pad|Phone)\;?.*\sOS\s([\_0-9]+)/);
	if (_m != null) {
	    env.ios = true;
	    env.version = _formatV(_m[2], '_');
	    _break = true;
	}
	
	if (!_break) {
	    _m = _ua.match(/Windows\sPhone\sOS\s([\.0-9]+)/);
	    if (_m != null) {
	        env.windows = true;
	        env.version = _formatV(_m[1], '.');
	        _break = true;
	    }
	}
	
	if (!_break) {
	    var bb = {
	        a: _ua.match(/\(BB1\d+\;\s.*\sVersion\/([\.0-9]+)\s/),
	        b: _ua.match(/\(BlackBerry\;\s.*\sVersion\/([\.0-9]+)\s/),
	        c: _ua.match(/^BlackBerry\d+\/([\.0-9]+)\s/),
	        d: _ua.match(/\(PlayBook\;\s.*\sVersion\/([\.0-9]+)\s/)
	    };
	    for (var k in bb) {
	        if (bb[k] != null) {
	            _m = bb[k];
	            env.blackberry = true;
	            env.version = _formatV(_m[1], '.');
	            _break = true;
	        }
	    }
	}
	
	/**
	 * 获取移动设备型号版本等环境信息
	 * @type {Object}
	 * @default {
	        ua,
	        version,
	        ios,
	        android,
	        windows,
	        blackberry,
	        weixin,
	        wVersion,
	        qq,
	        qVersion,
	        touchSupport,
	        hashSupport
	    }
	 */
	exports.default = env;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * 获取基于模板的文本值
	 * @param  {String} tmpl - 文本模板，格式为 'hello{0},world{1}'
	 * @param  {...String} args - 用于替换的若干参数
	 * @return {String}
	 */
	var read = exports.read = function read(tmpl) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}
	
		var rtn = tmpl.substr(0);
		if (args.length) {
			(function () {
				var flagArr = tmpl.match(/\{\d+\}/g); //{1},{0},{2}...
				if (flagArr) {
					//剔除数组重复项用
					var realNeedLeng = flagArr.filter(function (ele, idx) {
						return flagArr.indexOf(ele) == idx;
					}).length;
					if (args.length != realNeedLeng) {
						throw new Error("[i18n] Error: " + tmpl + " need " + realNeedLeng + " parameters, but " + args.length + " received");
					}
					for (var ii = 0; ii < realNeedLeng; ii++) {
						rtn = rtn.replace(new RegExp("\\{" + ii + "\\}", "g"), args[ii]);
					}
				}
			})();
		}
		return rtn;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tag_range_from_HTML = exports.prepend_HTML = exports.append_HTML = exports.real_style = exports.add_class = exports.remove_class = exports.has_class = undefined;
	
	var _format = __webpack_require__(4);
	
	/**
	 * 判断元素是否有指定className
	 * @param  {Element} ele
	 * @param  {String} clsName
	 * @return {Boolean}
	 */
	var has_class = exports.has_class = function has_class(ele, clsName) {
	    return new RegExp('(^|\\s)+(' + clsName + ')(\\s|$)+', 'g').test(ele.className);
	};
	
	/**
	 * 删除className
	 * @param  {Element} ele
	 * @param  {String} clsName
	 * @return {void}
	 */
	var remove_class = exports.remove_class = function remove_class(ele, clsName) {
	    if (typeof ele === 'string') {
	        try {
	            ele = document.querySelector(ele);
	        } catch (ex) {}
	    }
	    var re = new RegExp('(^|\\s)+(' + clsName + ')(\\s|$)+', 'g');
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
	 */
	var add_class = exports.add_class = function add_class(ele, clsName) {
	    if (typeof ele === 'string') {
	        try {
	            ele = document.querySelector(ele);
	        } catch (ex) {}
	    }
	    remove_class(ele, clsName);
	    ele.className = (0, _format.trim)(ele.className + ' ' + clsName);
	};
	
	/**
	 * 获取计算样式
	 * @param  {Element} [ele=null] - 目标元素
	 * @param  {String} [styleName=null] - 样式名
	 * @return {String}
	 */
	var real_style = exports.real_style = function real_style() {
	    var ele = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var styleName = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	    if (!ele || !styleName) return;
	    var rtn = '';
	    try {
	        rtn = typeof window.getComputedStyle == 'undefined' ? ele.currentStyle[styleName] : window.getComputedStyle(ele, null)[styleName];
	    } catch (ex) {
	        rtn = ele.style[styleName];
	    }
	    return rtn.replace(/px$/, '');
	};
	
	/**
	 * 在制定元素内的最末插入html
	 * @param  {Element} dom
	 * @param  {String} html
	 * @return {void}
	 */
	var append_HTML = exports.append_HTML = function append_HTML(dom, html) {
	    return dom.insertAdjacentHTML('beforeEnd', html);
	};
	
	/**
	 * 在制定元素内的开始插入html
	 * @param  {Element} dom
	 * @param  {String} html
	 * @return {void}
	 */
	var prepend_HTML = exports.prepend_HTML = function prepend_HTML(dom, html) {
	    return dom.insertAdjacentHTML('afterBegin', html);
	};
	
	/**
	 * 根据特征值找到一段html中其所在的tag范围
	 * @param  {String} p_featureStr - 特征值
	 * @param  {String} p_html - 作为查找范围的html
	 * @return {Object} {start, end}
	 */
	var tag_range_from_HTML = exports.tag_range_from_HTML = function tag_range_from_HTML(p_featureStr, p_html) {
	    var t = p_html + '',
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
	    if (new RegExp('^\\<' + tagName + '[^\\>]*\\/\\>').test(temp)) {
	        /* 直接关闭 <tag /> */
	        closeTag = '/>';
	        eEnd = eStart + temp.indexOf(closeTag) + closeTag.length;
	    } else {
	        closeTag = '</' + tagName + '>';
	        eEnd = eStart + temp.indexOf(closeTag) + closeTag.length;
	        temp = t.substring(eStart + tagName.length + temp.indexOf('>'), eEnd);
	        m = temp.match(new RegExp('\\<' + tagName + '[^\/\>]*[^\\/]?\\>', 'g'));
	        if (m != null) {
	            /*是否嵌套了相同元素*/
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 字符串反转
	 * @param  {String} str
	 * @return {String}
	 */
	var reverse_str = exports.reverse_str = function reverse_str(str) {
	  return str.split('').reverse().join('');
	};
	
	/**
	 * 格式化手机号等，按位插入分隔符
	 * @param  {Number|String} target - 目标数字或字符串
	 * @param  {Number} [step=4] - 插入分隔符的相隔位数
	 * @param  {Boolean} [needReverse=true] - 是否要从右向左进行插入
	 * @param  {String} [div=" "] - 分隔符
	 * @return {String}
	 */
	var step_str = exports.step_str = function step_str(target) {
	  var step = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];
	  var needReverse = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	  var div = arguments.length <= 3 || arguments[3] === undefined ? " " : arguments[3];
	
	  var nStr = target.toString(),
	      rst = nStr.replace(/\s/g, ''),
	      rTarget = needReverse ? reverse_str(rst) : rst,
	      re = new RegExp('(.{' + step + '})', 'g');
	  rst = rTarget.replace(re, '$1' + div);
	  return needReverse ? reverse_str(rst) : rst;
	};
	
	/**
	 * 添加千分位的数字分结号
	 * @param  {Number} num
	 * @return {String}
	 */
	var knot_num = exports.knot_num = function knot_num(num) {
	  var numParts = num.toString().split('.'),
	      integralPart = numParts[0],
	      decimalPart = numParts.length > 1 ? numParts[1] : null,
	      formatedIntegral = step_str(integralPart, 3, true, ',');
	  if (!decimalPart) return formatedIntegral;
	  return formatedIntegral + '.' + decimalPart;
	};
	
	/**
	 * 限制小数位
	 * @param  {Number} num
	 * @param  {Number} [fix=2]
	 * @return {String}
	 */
	var limit_decimal = exports.limit_decimal = function limit_decimal(num) {
	  var fix = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
	
	  var v = parseFloat(num);
	  if (isNaN(v)) {
	    throw new Error('[limit_decimal] ' + num + ' is not a number');
	  }
	  return v.toFixed(fix);
	};
	
	/**
	 * 补全数字左侧的0
	 * @param  {Number} num - 目标数字
	 * @param  {Number} [leng=2] - 最终位数
	 * @return {String}
	 */
	var num_pad_left = exports.num_pad_left = function num_pad_left(num) {
	  var leng = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
	
	  var lng = leng,
	      zeroStr = '',
	      n = num.toString();
	  while (lng--) {
	    zeroStr += '0';
	  }
	  if (n.length < leng) return zeroStr.substr(0, leng - n.length) + n;
	  return n;
	};
	
	/**
	 * 去首尾空格
	 * @param  {String} str
	 * @return {String}
	 */
	var trim = exports.trim = function trim(str) {
	  return str.replace(/(^\s+|\s+$)/g, '');
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.is_event_on_target = exports.listen_select_change = exports.fake_click = exports.on_page_rotated = exports.on_page_loaded = exports.on_tweened = undefined;
	
	var _env = __webpack_require__(1);
	
	var _env2 = _interopRequireDefault(_env);
	
	var _dom = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 监听CSS3 transition动画结束
	 * @param  {Element} dom
	 * @param  {Function} callback
	 * @return {void}
	 */
	var on_tweened = exports.on_tweened = function on_tweened(dom, callback) {
	    return dom.addEventListener('webkitTransitionEnd', function fn(e) {
	        e.currentTarget.removeEventListener('webkitTransitionEnd', fn);
	        callback.call(null);
	    });
	};
	
	/**
	 * 监听页面加载
	 * @description 如果监听时已加载则直接执行回调
	 * @param  {Function} callback
	 * @return {void}
	 */
	var on_page_loaded = exports.on_page_loaded = function on_page_loaded(callback) {
	    if (/interactive|complete/.test(document.readyState)) {
	        callback.call(null); /*已加载过，直接执行*/
	        return;
	    }
	    window.addEventListener('DOMContentLoaded', function fn(e) {
	        e.currentTarget.removeEventListener('DOMContentLoaded', fn);
	        callback.call(null);
	    });
	};
	
	/**
	 * 监听设备方向改变
	 * @param  {Function} callback
	 * @return {void}
	 */
	var on_page_rotated = exports.on_page_rotated = function on_page_rotated(callback) {
	    return window.addEventListener('orientationchange', callback);
	};
	
	/**
	 * 模拟点击事件
	 * @param  {Function} callback - 回调函数
	 * @param  {String} [domId='fakeClick'] - 模拟载体元素的id
	 * @return {void}
	 */
	var fake_click = exports.fake_click = function fake_click(callback) {
	    var domId = arguments.length <= 1 || arguments[1] === undefined ? 'fakeClick' : arguments[1];
	
	    (0, _dom.append_HTML)(document.getElementsByTagName('body')[0], '<a href="javascript:void(0)" id="' + domId + '" style="opacity:.01"></a>');
	    var $a = document.getElementById(domId),
	        evt = void 0;
	    $a.addEventListener("click", function (e) {
	        e.preventDefault();
	        callback();
	    });
	    if (document.createEvent) {
	        evt = document.createEvent("MouseEvents");
	        if (evt.initMouseEvent) {
	            evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	            $a.dispatchEvent(evt);
	        }
	    }
	    $a.parentNode.removeChild($a);
	};
	
	/**
	 * 兼容性的监听select更改事件
	 * @param  {Element} sel - 目标select元素
	 * @param  {Function} callback - 回调函数
	 * @return {void}
	 */
	var listen_select_change = exports.listen_select_change = function listen_select_change(sel, callback) {
	    sel.dataset['lisOldselidx'] = sel.selectedIndex;
	    var _cbk = function _cbk(e) {
	        if (parseInt(sel.dataset['lisOldselidx']) != sel.selectedIndex) {
	            sel.dataset['lisOldselidx'] = sel.selectedIndex;
	            callback(e);
	        }
	    };
	    sel.addEventListener('change', _cbk);
	    sel.addEventListener('focus', _cbk);
	    sel.addEventListener('blur', _cbk);
	    if (_env2.default.ios && _env2.default.version >= 7) {
	        sel.addEventListener('click', _cbk);
	    }
	};
	
	/**
	 * 判断时间是否发生在制定元素范围内
	 * @return {Boolean}
	 */
	var is_event_on_target = exports.is_event_on_target = function is_event_on_target(targetCtx) {
	    return function (e) {
	        var tgt = e.target;
	        if ($(tgt).is(targetCtx)) return true;
	        while (tgt.parentElement !== null) {
	            tgt = tgt.parentElement;
	            if (is_event_on_target(targetCtx)({ target: tgt })) return true;
	        }
	        return false;
	    };
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.is_leap_year = exports.date_range = exports.dates_of_month = exports.get_clean_date = exports.yesterday = exports.tomorrow = exports.today = exports.getTime = exports.date_to_YMD = undefined;
	
	var _format = __webpack_require__(4);
	
	var _env = __webpack_require__(1);
	
	var _env2 = _interopRequireDefault(_env);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _timezone = new Date().getTimezoneOffset(),
	    _tz = parseInt(_timezone / 60),
	    _testDateIOSTrans = _env2.default.ios || /invalid/.test(new Date(new Date().toISOString()).toString().toLowerCase()),
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
	var date_to_YMD = exports.date_to_YMD = function date_to_YMD(date) {
	    var div = arguments.length <= 1 || arguments[1] === undefined ? '-' : arguments[1];
	    return [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(function (num) {
	        return (0, _format.format_num)(num);
	    }).join(div);
	};
	
	/**
	 * 取得某个时间
	 * @param  {Object} [setting] - {偏移值 offset, 基准时间 from, 是否置为0点 zeroTime, 是否置为1月1日 clean}
	 * @return {Date}
	 */
	var getTime = exports.getTime = function getTime() {
	    var setting = arguments.length <= 0 || arguments[0] === undefined ? {
	        offset: 0,
	        zeroTime: false,
	        clean: false,
	        from: new Date()
	    } : arguments[0];
	    var offset = setting.offset;
	    var zeroTime = setting.zeroTime;
	    var clean = setting.clean;
	
	    var from = setting.from;
	    var d = new Date(from);
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
	var today = exports.today = function today() {
	    var zeroTime = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	    return getTime({ zeroTime: zeroTime });
	};
	
	/**
	 * 取得明天
	 * @param  {Boolean} [zeroTime=true] - 是否置为0点
	 * @return {Date}
	 */
	var tomorrow = exports.tomorrow = function tomorrow() {
	    var zeroTime = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	    return getTime({ zeroTime: zeroTime, offset: _aDay });
	};
	
	/**
	 * 取得昨天
	 * @param  {Boolean} [zeroTime=true] - 是否置为0点
	 * @return {Date}
	 */
	var yesterday = exports.yesterday = function yesterday() {
	    var zeroTime = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	    return getTime({ zeroTime: zeroTime, offset: -_aDay });
	};
	
	/**
	 * 取得一个某年某月1号0时的干净日期
	 * @param  {Number} [p_month=0]
	 * @param  {Number} [p_year=今年]
	 * @return {Date}
	 */
	var get_clean_date = exports.get_clean_date = function get_clean_date() {
	    var p_month = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var p_year = arguments.length <= 1 || arguments[1] === undefined ? new Date().getFullYear() : arguments[1];
	
	    var d = getTime({ clean: true, zeroTime: true });
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
	var dates_of_month = exports.dates_of_month = function dates_of_month(p_year) {
	    var p_month = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	
	    var matrix = [[]],
	        putDay = function putDay(d) {
	        var isLastRow = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
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
	var date_range = exports.date_range = function date_range(rangeNums) {
	    var from = arguments.length <= 1 || arguments[1] === undefined ? getToday() : arguments[1];
	
	    var days = parseInt(rangeNums) * _aDay,
	        endDay = getTime({ from: from, offset: days });
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
	var is_leap_year = exports.is_leap_year = function is_leap_year() {
	    var year = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	
	    var currY = new Date().getFullYear();
	    y = year || currY;
	    y = parseInt(y);
	    if (isNaN(y)) y = currY;
	    return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 1 : 0;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * 将query字符串转换为object
	 * @param  {String} [query=当前url的query] 给定的query字符串
	 * @return {Object}
	 */
	var query_params = exports.query_params = function query_params() {
	    var query = arguments.length <= 0 || arguments[0] === undefined ? window.location.search.substring(1) : arguments[0];
	
	    if (!query) return false;
	    var obj = {};
	    query.split('&').forEach(function (params) {
	        var p = params.split('='),
	            key = p[0],
	            vlu = decodeURIComponent(p[1]);
	        obj[key] = vlu;
	    });
	    return obj;
	};
	
	/**
	 * 将hash部分转化为object
	 */
	
	var URLHash = exports.URLHash = function () {
	    /**
	     * @constructor
	     * @param  {String} [href=当前URL的hash]
	     * @param  {String} [hashChar='#']
	     * @param  {String} [separator="&"]
	     * @return {Object}
	     */
	
	    function URLHash() {
	        var href = arguments.length <= 0 || arguments[0] === undefined ? window.location.href : arguments[0];
	        var hashChar = arguments.length <= 1 || arguments[1] === undefined ? '#' : arguments[1];
	        var separator = arguments.length <= 2 || arguments[2] === undefined ? "&" : arguments[2];
	
	        _classCallCheck(this, URLHash);
	
	        var h = href,
	            s = separator,
	            uArr = _split2(h, hashChar),
	            href_part = uArr[0],
	            hash_part = uArr[1];
	        this.map = {};
	        this.sign = s;
	        if (hash_part) {
	            var arr = hash_part.split(s);
	            for (var i = 0; i < arr.length; i++) {
	                var s2 = arr[i];
	                var o = _split2(s2, '=');
	                this.map[o[0]] = o[1];
	            }
	        }
	        this.size = function () {
	            return this.keys().length;
	        };
	        this.keys = function () {
	            var k = [];
	            for (var m in this.map) {
	                if (m != '_hashfoo_') k.push(m);
	            }return k;
	        };
	        this.values = function () {
	            var v = [];
	            for (var m in this.map) {
	                if (m != '_hashfoo_') v.push(this.map[m]);
	            }return v;
	        };
	        this.put('_hashfoo_', Math.random());
	    } //end of constructor
	
	    _createClass(URLHash, [{
	        key: 'get',
	        value: function get(key) {
	            return this.map[key] || null;
	        }
	    }, {
	        key: 'put',
	        value: function put(key, value) {
	            this.map[key] = value;
	        }
	    }, {
	        key: 'putAll',
	        value: function putAll(m) {
	            if ((typeof m === 'undefined' ? 'undefined' : _typeof(m)) == 'object') for (var item in m) {
	                this.map[item] = m[item];
	            }
	        }
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            if (this.map[key]) {
	                var newMap = {};
	                for (var item in this.map) {
	                    if (item != key) newMap[item] = this.map[item];
	                }this.map = newMap;
	            }
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var m2 = {};
	            for (var m in this.map) {
	                if (m != '_hashfoo_') m2[m] = this.map[m];
	            }return _map2query(m2, "&");
	        }
	    }, {
	        key: 'clone',
	        value: function clone() {
	            return new hu('foo#' + this.toString(), this.sign);
	        }
	    }]);
	
	    return URLHash;
	}();
	
	;
	
	function _map2query(q, separator) {
	    var u = encodeURIComponent,
	        k = void 0,
	        r = [],
	        d = separator ? separator : '&';
	    for (k in q) {
	        r.push(u(k) + '=' + u(q[k]));
	    }return r.join(d);
	}
	function _split2(s, separator) {
	    var i = s.indexOf(separator);
	    return i == -1 ? [s, ''] : [s.substring(0, i), s.substring(i + 1)];
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.check_appcache = check_appcache;
	/**
	 * 检查并监听applicationCache的更新情况
	 * @return {void}
	 */
	function check_appcache() {
	    var _appCache = window.applicationCache,
	        support = !!_appCache;
	    if (!support) return;
	    _appCache.addEventListener("updateready", function (e) {
	        if (_appCache.status == _appCache.UPDATEREADY) {
	            try {
	                _appCache.swapCache();
	            } catch (ex1) {}
	            var _location = location;
	            var origin = _location.origin;
	            var pathname = _location.pathname;
	
	            var hash = _location.hash;
	            var rnd = Math.random();
	            location.href = '' + origin + pathname + '?rnd=' + rnd + hash;
	        }
	    }, false);
	}
	
	/**
	 * 将页面移动至指定位置
	 * @param  {Number} [top]
	 * @return {void}
	 */
	var page_to_top = exports.page_to_top = function page_to_top() {
	    var top = arguments.length <= 0 || arguments[0] === undefined ? -1 : arguments[0];
	
	    document.getElementsByTagName('body')[0].scrollTop = top;
	    window.scrollTo(0, top);
	};
	
	/**
	 * 在页面中动态写入css
	 * @param  {String} css字符串
	 * @return {void}
	 */
	var write_CSS = exports.write_CSS = function write_CSS(css) {
	    var s = document.createElement('style');
	    s.innerHTML = css;
	    try {
	        s.appendChild(document.createTextNode(css));
	    } catch (ex) {
	        s.styleSheet.cssText = css;
	    }
	    document.getElementsByTagName('head')[0].appendChild(s);
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=mobile-utils.js.map