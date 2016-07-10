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

export
/**
 * @namespace utils
 * @memberOf mUtils
 * @type {Object}
 */
{
    check_appcache,
    page_to_top,
    write_CSS
}