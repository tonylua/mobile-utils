export default const read = (key, ...args) {
	if (args.length) {
		let flagArr = key.match(/\{\d+\}/g); //{1},{0},{2}...
		if (flagArr) {
			//剔除数组重复项用
			let realNeedLeng = flagArr.filter( (ele, idx)=>flagArr.indexOf(ele)==idx ).length;
			if (args.length != realNeedLeng){
				throw new Error(`[i18n] Error: ${key} need ${realNeedLeng} parameters, but ${args.length} received`);
				return null;
			}
			for (let ii = 0; ii < realNeedLeng; ii++)
				key = key.replace( new RegExp("\\{" + ii + "\\}", "g"), args[ii] );
		}
	}
	return key;
}