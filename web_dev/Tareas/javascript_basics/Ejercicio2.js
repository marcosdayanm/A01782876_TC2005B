// Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.

let bubbleSort = (arr) => {
  let changes = 0;
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    changes = 0;
    for (let j = i; j < size; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        changes++;
      }
    }
    if (changes < 1) {
      return arr;
    }
  }

  return arr;
};

const array = [34, 72, 13, 44, 25, 30, 10, 65, 99, 5];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array3 = [-2, 4, 8, 9, 0, -5, -2];

console.log(bubbleSort(array));
console.log(bubbleSort(array2));
console.log(bubbleSort(array3));
