var code = require('../main.js');


describe("Hello World", function() {
  it("says 'hello, world!' when ran", function() {
    expect(code.outputHelloWorld()).toEqual("Hello, world!");
  });
});


describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calculate(1)).toEqual(0.1);
    expect(code.calculate(10)).toEqual(1);
  });

  it('should tax 7% on the second $10', function() {
    expect(code.calculate(15)).toEqual(1.35);
  });

  it('should tax 5% on the third $10', function () {
    expect(code.calculate(30)).toEqual(2.2);
  })

  it('tax 3% on amount over $30', function () {
    expect(code.calculate(35)).toEqual(2.35);
  })

});


describe('Leap Year', function(){

  it('every year whose number is perfectly divisable by four is a leap year', function() {
    expect(code.leapYear(2004)).toEqual(true);
    expect(code.leapYear(2008)).toEqual(true);
  });

  it('years which are both divisible by 100 and not divisable by 400 are not leap years', function() {
    expect(code.leapYear(1700)).toEqual(false);
    expect(code.leapYear(1900)).toEqual(false);

  });

  it('1600 and 200 are leap years', function () {
    expect(code.leapYear(1600)).toEqual(true);
    expect(code.leapYear(2000)).toEqual(true);
  })

});
