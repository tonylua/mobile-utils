import _ from 'underscore';

/**
 * 检查并监听applicationCache的更新情况
 * @return {void}
 * @memberOf mUtils.utils
 */
function check_appcache() {
	let
		_appCache = window.applicationCache,
        support = !!_appCache;
    if (!support) return;
    _appCache.addEventListener("updateready", () => {
        if (_appCache.status == _appCache.UPDATEREADY) {
            try {
                _appCache.swapCache();
            } catch (ex1) {}
            let
                {origin, pathname, hash} = location,
                rnd = Math.random();
            location.href = `${origin}${pathname}?rnd=${rnd}${hash}`;
        }
    }, false);
}

/**
 * 将页面移动至指定位置
 * @param  {Number} [top]
 * @return {void}
 * @memberOf mUtils.utils
 */
function page_to_top(top = -1) {
    document.getElementsByTagName('body')[0].scrollTop = top;
    window.scrollTo(0, top);
}

/**
 * 在页面中动态写入css
 * @param  {String} css - css字符串
 * @return {void}
 * @memberOf mUtils.utils
 */
function write_CSS(css) {
    var s = document.createElement('style');
    s.innerHTML = css;
    try {
        s.appendChild(document.createTextNode(css));
    } catch (ex) {
        s.styleSheet.cssText = css;
    }
    document.getElementsByTagName('head')[0].appendChild(s);
}

/**
 * 锁定屏幕，限制其响应划动事件
 * @memberOf mUtils.utils
 */
class ScrollLocker {
    /**
     * 构造方法
     * @constructor
     * @param  {Object} settings - 构造参数对象，可以设置ignores忽略对象列表等
     * @return {void}
     */
    constructor(settings) {
        this._cfg = _.assign({
            ignores: []
        }, settings);
        this._scr = this._onscroll.bind(this);
    }
    /**
     * @private
     */
    _isIn(targetObj, obj) {
        let
            tobj = targetObj
            ,cobj = obj
        ;
        if (tobj === cobj)
            return true;
        while (cobj.parentNode) {
            if (tobj === cobj)
                return true;
            cobj = cobj.parentNode;
        }
        return false;
    }
    /**
     * @private
     */
    _onscroll(e) {
        let
            currObj = e.target
            ,ig = this._cfg.ignores
        ;
        for (let i=0, lng=ig.length; i<lng; i++) {
            let igrObj = ig[i];
            if ( !this._isIn(igrObj, currObj) ){
                e.preventDefault();
                break;
            }
        }
    }
    /**
     * 执行锁定
     */
    lock() {
        window.addEventListener('touchmove', this._scr, false);
    }
    /**
     * 解除锁定
     */
    unlock() {
        window.removeEventListener('touchmove', this._scr, false);
    }
}

export
/**
 * @namespace utils
 * @memberOf mUtils
 * @type {Object}
 */
{
    check_appcache,
    page_to_top,
    write_CSS,
    ScrollLocker
}