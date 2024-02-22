// Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.

let strSort = (arr) => {
  // localcompare compara en cada swap los elementos sin tomar en cuenta mayúsculas ni acentos, porque el sort funciona con los valores ASCII
  return arr.sort((x, y) => x.localeCompare(y));
};

console.log(strSort(["manzana", "banana", "Cereza", "durazno", "Kiwi"]));
console.log(
  strSort([
    "lunes",
    "martes",
    "Miércoles",
    "jueves",
    "viernes",
    "Sábado",
    "domingo",
  ])
);
console.log(
  strSort(["Nueva York", "parís", "Tokio", "buenos Aires", "Londres"])
);
