import Evn from env;

const
	_timezone = (new Date).getTimezoneOffset(),
	_tz = parseInt(_timezone / 60),
	_testDateIOSTrans = (Env.ios || /invalid/.test((new Date((new Date).toISOString())).toString().toLowerCase()));

export function time(offset = 0) {
	let d = new Date;
	d.setTime(d.getTime() + offset);
	return d;
}

export function dateFromIOSStr(isoStr, needTrans) { /*IOS等系统无法直接转换isostring*/
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
}

export function dateFromYMDStr(ymdStr, hmsStr = -_tz + ':00:00') {
    let d = dateFromIOSStr(ymdStr + 'T' + hmsStr + '.000Z', true);
    d.setHours(d.getHours() + _tz);
    return d;
}
