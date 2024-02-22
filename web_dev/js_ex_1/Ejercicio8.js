// Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]

let quitaDuplicados = (arr) => {
  let set = new Set(arr);
  return Array.from(set);
};

console.log(quitaDuplicados([1, 1, 2, 3, 3, 3, 4, 5]));
console.log(quitaDuplicados([1, 2, 3, 4, 5]));
console.log(quitaDuplicados([10, 10, 11.8, 6, 7.5, 7.5, 8.9]));
