export function check_appcache() {
	let
		_appCache = window.applicationCache,
    	support = !!_appCache;
    if (!support) return;
    _appCache.addEventListener("updateready", e => {
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

export const page_to_top = (top = -1) => {
    document.getElementsByTagName('body')[0].scrollTop = top;
    window.scrollTo(0, top);
};

export const write_CSS = css => {
    var s = document.createElement('style');
    s.innerHTML = css;
    try {
        s.appendChild(document.createTextNode(css));
    } catch (ex) {
    	s.styleSheet.cssText = css;
    }
    document.getElementsByTagName('head')[0].appendChild(s);
};