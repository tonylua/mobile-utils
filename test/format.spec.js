import _ from '../node_modules/underscore/underscore';
import {expect} from 'chai';
import mUtils from '../lib/mobile-utils.js';

describe('test format module...', ()=>{

	let {
			reverse_str,
		    step_str,
		    knot_num,
		    num_pad_left,
		    limit_decimal,
		    trim,
		} = mUtils.format;

	describe('test reverse_str', ()=>{
		it('should reverse the string', ()=>{
			expect( reverse_str('abc de') ).to.equal('ed cba');
		});
	});

	describe('test step_str', ()=>{
		it('should get correct formated string', ()=>{
			let str = 'aaaabbbbcccc';
			expect( step_str(str) ).to.equal('aaaa bbbb cccc');
			expect( step_str(str, 4, true) ).to.equal('aaaa bbbb cccc');
			expect( step_str(str, 3) ).to.equal('aaa abb bbc ccc');
			expect( step_str(str, 5) ).to.equal('aaaab bbbcc cc');
			expect( step_str(str, 5, true) ).to.equal('aa aabbb bcccc');
			expect( step_str(str, 5, true, 'A') ).to.equal('aaAaabbbAbcccc');
		});
	});

	describe('test knot_num', ()=>{
		it('should get correct formated string', ()=>{
			expect( knot_num(1112) ).to.equal('1,112');
			expect( knot_num(1112.33621) ).to.equal('1,112.33621');
			expect( knot_num(1112.33621, 2) ).to.equal('1,112.34');
			expect( knot_num(112.33621, 2) ).to.equal('112.34');
		});
	});

	describe('test num_pad_left', ()=>{
		it('should add zero of which the number less then 10', ()=>{
			expect( num_pad_left(102) ).to.equal('102');
			expect( num_pad_left(2) ).to.equal('02');
			expect( num_pad_left(2, 5) ).to.equal('00002');
		});
	});

	describe('test limit_decimal', ()=>{
		it('should limit the decimal part of a number', ()=>{
			expect( limit_decimal(102) ).to.equal('102.00');
			expect( limit_decimal(102.339) ).to.equal('102.34');
			expect( limit_decimal(102.) ).to.equal('102.00');
			expect( limit_decimal('102.') ).to.equal('102.00');
		});
	});

	describe('test trim', ()=>{
		it('should trim a string', ()=>{
			expect( trim('   abc ') ).to.equal('abc');
		});
	});

});