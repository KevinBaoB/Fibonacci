const fibonacci = (num) => {
  if (num === 0 || num === 1) return num;

  let first = 0;
  let second = 1;
  sum = first + second;
  for (let i = 2; i < num; i++) {
    first = second;
    second = sum;
    sum = first + second;
  }
  return sum;
};

module.exports = { fibonacci };
