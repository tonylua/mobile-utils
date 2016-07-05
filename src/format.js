//字符串反转
export const reverse_str = str => str.split('').reverse().join('');

//格式化手机号等
export const step_str = (n, step=4, needReverse=true, div=" ") => {
	let
		nStr = n.toString(),
		rst = nStr.replace(/\s/g, ''),
		target = needReverse ? reverse_str(rst) : rst,
		re = new RegExp('(.{'+ step +'})', 'g');
	rst = target.replace(re, `$1${div}`);
	return needReverse ? reverse_str(rst) : rst;
};

//添加千分位的数字分结号
export const knot_num = num => {
	let
		numParts = num.toString().split('.'),
		integralPart = numParts[0],
		decimalPart = numParts.length > 1 ? numParts[1] : null,
		formatedIntegral = step_str(integralPart, 3, true, ',');
	if (!decimalPart) return formatedIntegral;
	return `${formatedIntegral}.${decimalPart}`;
};

//格式化价格
export const format_price = (p,fix=2)=>{
	let v = parseFloat(p);
	return isNaN(v) ? '' : v.toFixed(fix);
};

//去首尾空格
export const trim = str => return str.replace(/(^\s+|\s+$)/g, '');
