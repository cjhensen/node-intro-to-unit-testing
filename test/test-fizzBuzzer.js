const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  const testInput = [
    {number: 30, expectedAnswer: 'fizz-buzz'},
    {number: 10, expectedAnswer: 'buzz'},
    {number: 36, expectedAnswer: 'fizz'},
    {number: 'thirty', expectedAnswer: 'thirty'}
  ];

  it('should return "fizz-buzz" if number is divisible by both 3 and 5', function() {
    const answer = fizzBuzzer(testInput[0].number);
    answer.should.equal(testInput[0].expectedAnswer);
  });
  it('should return "fizz" if the number is divisble by only 3', function() {
    const answer = fizzBuzzer(testInput[1].number);
    answer.should.equal(testInput[1].expectedAnswer);
  });
  it('should return "buzz" if the number is divisible by only 5', function() {
    const answer = fizzBuzzer(testInput[2].number);
    answer.should.equal(testInput[2].expectedAnswer);
  });
  it('should produce an error of the input is not a number', function() {
    (function(){
      fizzBuzzer(testInput[3].number).should.throw(Error);
    });
  });
});