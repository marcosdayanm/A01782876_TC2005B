// Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.

let strFreq = (arr) => {
  let reps = {};
  let moda = [];

  arr.forEach((e) => {
    if (reps[e]) reps[e]++;
    else reps[e] = 1;
  });

  let format = Object.entries(reps);

  format = format.sort((a, b) => b[1] - a[1]);
  moda.push(format[0][0]);

  for (let i = 1; i < format.length; i++) {
    if (format[i][1] == format[0][1]) moda.push(format[i][0]);
    else break;
  }

  return moda.length == 1 ? moda[0] : moda;
};

console.log(strFreq(["Max", "Bella", "Luna", "Max", "Lucy", "Charlie"]));
console.log(
  strFreq(["rojo", "azul", "verde", "azul", "amarillo", "rojo", "violeta"])
);
console.log(
  strFreq([
    "pizza",
    "pizza",
    "pizza",
    "sushi",
    "tacos",
    "pizza",
    "hamburguesa",
    "sushi",
    "ensalada",
  ])
);
