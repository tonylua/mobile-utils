//字符串反转
export const reverse_str = str => str.split('').reverse().join('');

//格式化手机号等
export const step_str = (n, step=4, needReverse=true) => {
	let
		rst = n.replace(/\s/g, ''),
		target = needReverse ? reverse_str(rst) : rst,
		re = new RegExp('(.{'+ step +'})', 'g');
	rst = target.replace(re, "$1 ");
	return needReverse ? reverse_str(rst) : rst;
};

//添加千分位的数字分结号
//TODO 支持小数
//TODO 采用step_str
export const knot_num = num => reverse_str(reverse_str(num.toString()).replace(/(\d{3})/g, '$1,')).replace(/^\,/, '');

//格式化价格
export const format_price = (p,fix=2)=>{
	let v = parseFloat(p);
	return isNaN(v) ? '' : v.toFixed(fix);
};

//去首位空格
export const trim = str => return str.replace(/(^\s+|\s+$)/g, '');
