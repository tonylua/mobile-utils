import chai from 'chai';
import Lib from '../lib/library.js';

chai.expect();
const {expect} = chai;

const {read} = Lib.lang;

describe('when call the function without args', ()=>{
	it('should return same string', ()=>{
		const tmpl = 'what a wonderful world!';
		expect( read(tmpl) ).to.be.equal(tmpl);
	});
});

describe('when call the function with args', ()=>{
	it('should return correct string', ()=>{
		const 
			tmpl = 'what a {0} {1}! {0}!',
			word1 = 'wonderful',
			word2 = 'world';
			exp = `what a ${word1} ${word2}! ${word1}!`;
		expect( read(tmpl, word1, word2) ).to.be.equal(exp);
	});
});

// describe('Given an instance of my library', function () {
//   before(function () {
//     lib = new Library();
//   });
//   describe('when I need the name', function () {
//     it('should return the name', () => {
//       expect(lib.name).to.be.equal('Library');
//     });
//   });
// });