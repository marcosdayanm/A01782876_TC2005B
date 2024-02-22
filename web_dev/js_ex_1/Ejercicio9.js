// Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.

let shString = (arr) => {
  let shorter = null;

  arr.forEach((e) => {
    let count = 0;
    [...e].forEach((l) => {
      count++;
    });

    if (count < shorter || shorter == null) {
      shorter = count;
    }
  });

  return shorter;
};

console.log(shString(["manzana", "banana", "cereza", "durazno", "kiwi"])); // 4
console.log(
  shString([
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
    "domingo",
  ]) // 5
);
console.log(
  shString(["Nueva York", "París", "Tokio", "Buenos Aires", "Londres"])
); // 5
