let mcd = (a, b) => {
  // algoritmo de Euclides
  while (b != 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

console.log(mcd(10, 12));
console.log(mcd(20, 25));
console.log(mcd(100, 10));
