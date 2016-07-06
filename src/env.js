const
	_ua = navigator.userAgent,
    _m = null,
    _formatV = function(vstr, vdiv) {
        var f = vstr.split(vdiv);
        f = f.shift() + '.' + f.join('');
        return f * 1;
    },
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
        touchSupport: ('createTouch' in document),
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
    return env;
}

_m = _ua.match(/Windows\sPhone\sOS\s([\.0-9]+)/);
if (_m != null) {
    env.windows = true;
    env.version = _formatV(_m[1], '.');
    return env;
}

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
        return env;
    }
}

export default env;
