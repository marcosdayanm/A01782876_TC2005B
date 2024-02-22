// Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.

let pwr2 = (n) => {
  return Number.isInteger(Math.log2(n));
};

console.log(pwr2(2)); // true
console.log(pwr2(10));
console.log(pwr2(32)); // true
console.log(pwr2(48));
console.log(pwr2(128)); // true
