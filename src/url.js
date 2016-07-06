/**
 * 将query字符串转换为object
 * @param  {String} [query=当前url的query] 给定的query字符串
 * @return {Object}
 */
export const query_params = (query = window.location.search.substring(1)) => {
	if (!query) return false;
    let obj = {};
	query.split('&').forEach(function(params) {
		let 
			p = params.split('='),
			key = p[0],
			vlu = decodeURIComponent(p[1]);
		obj[key] = vlu;
	});
    return obj;
};


/**
 * 将hash部分转化为object
 */
export class URLHash {
    /**
     * @constructor
     * @param  {String} [href=当前URL的hash]
     * @param  {String} [hashChar='#']
     * @param  {String} [separator="&"]
     * @return {Object}
     */
    constructor(href=window.location.href, hashChar='#', separator="&") {
        let
            h = href,
            s = separator,
            uArr = _split2(h, hashChar),
            href_part = uArr[0],
            hash_part = uArr[1];
        this.map = {};
        this.sign = s;
        if (hash_part) {
            let arr = hash_part.split(s);
            for (let i = 0; i < arr.length; i++) {
                let s2 = arr[i];
                let o = _split2(s2, '=');
                this.map[o[0]] = o[1];
            }
        }
        this.size = function() {
            return this.keys().length;
        };
        this.keys = function() {
            let k = [];
            for (let m in this.map)
                if (m != '_hashfoo_') k.push(m);
            return k;
        };
        this.values = function() {
            let v = [];
            for (let m in this.map)
                if (m != '_hashfoo_') v.push(this.map[m]);
            return v;
        };
        this.put('_hashfoo_', Math.random());
    } //end of constructor

    get(key) {
        return this.map[key] || null;
    }
    put(key, value) {
        this.map[key] = value;
    }
    putAll(m) {
        if (typeof(m) == 'object')
            for (let item in m) this.map[item] = m[item];
    }
    remove(key) {
        if (this.map[key]) {
            let newMap = {};
            for (let item in this.map)
                if (item != key) newMap[item] = this.map[item];
            this.map = newMap;
        }
    }
    toString() {
        let m2 = {};
        for (let m in this.map)
            if (m != '_hashfoo_') m2[m] = this.map[m];
        return _map2query(m2, "&");
    }
    clone() {
        return new hu('foo#' + this.toString(), this.sign);
    }
};


function _map2query(q, separator) {
    let
        u = encodeURIComponent,
        k,
        r = [],
        d = separator ? separator : '&';
    for (k in q) r.push(u(k) + '=' + u(q[k]));
    return r.join(d);
}
function _split2(s, separator) {
    let i = s.indexOf(separator);
    return i == -1 ? [s, ''] : [s.substring(0, i), s.substring(i + 1)];
}