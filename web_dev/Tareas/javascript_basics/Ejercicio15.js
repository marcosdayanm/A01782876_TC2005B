// Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.

let descNums = (list) => {
  return list.sort((a, b) => b - a);
};

console.log(descNums([34, 72, 13, 44, 25, 30, 10, 65, 99, 5]));
console.log(descNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(descNums([-2, 4, 8, 9, 0, -5, -2]));
