exports.outputHelloWorld = function () {
  return "Hello, world!";
};

exports.calculate = function (amount) {
  if(amount <= 10) {
    return amount * 0.1;
  } else if (amount <= 20) {
    return (10 * 0.1) + ((amount-10) * 0.07);
  } else if (amount <= 30) {
    return (10 * 0.1) + (10 * 0.07) + ((amount - 20) * 0.05);
  } else if (amount > 30) {
    return (10 * 0.1) + (10 * 0.07) + (10 * 0.05) + ((amount-30) * 0.03);
  }
}


