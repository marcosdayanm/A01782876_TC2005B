let factors = (num) => {
  let arr = [1];
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(factors(10));
console.log(factors(20));
console.log(factors(38));
