// Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].

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
