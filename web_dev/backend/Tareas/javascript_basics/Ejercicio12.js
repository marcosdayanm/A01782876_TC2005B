// Escribe una función que tome una lista de números y devuelva la mediana y la moda.

let medModa = (arr) => {
  arr = arr.sort((a, b) => a - b);

  let med =
    (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2) - 1]) / 2;

  let moda = [];
  let reps = {};

  arr.forEach((e) => {
    if (reps[e]) reps[e]++;
    else reps[e] = 1;
  });

  let format = Object.entries(reps);

  format = format.sort((a, b) => b[1] - a[1]);
  moda.push(parseFloat(format[0][0]));

  for (let i = 1; i < format.length; i++) {
    if (format[i][1] == format[0][1]) moda.push(parseFloat(format[i][0]));
    else break;
  }

  return [med, moda.length == 1 ? moda[0] : moda];
};

// El primer argumento del return es la media, y el segundo es una lista de todas las modas o en el caso de que solo haya una. solo de una
console.log(medModa([1, 1, 1, 2, 3, 3, 3, 4]));
console.log(medModa([1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 10, 20, 30]));
console.log(medModa([999.8, 999.9, 1000, 10000, 999.8, 999.9, 99.8, 999.9]));
console.log(medModa([1, 1, 2, 2, 3, 3, 4, 4]));
