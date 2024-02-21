let revNewArr = (arr) => {
  let size = arr.length;
  let newArr = [];

  for (let i = size - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

let revArr = (arr) => {
  let size = arr.length;
  let limit = size / 2;

  for (let i = 0; i < limit; i++) {
    [arr[i], arr[size - i - 1]] = [arr[size - i - 1], arr[i]];
  }
  return arr;
};

const array = [34, 72, 13, 44, 25, 30, 10, 65, 99, 5];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array3 = [-2, 4, 8, 9, 0, -5, -2];

console.log(revNewArr(array));
console.log(revArr(array));

console.log(revNewArr(array2));
console.log(revArr(array2));

console.log(revNewArr(array3));
console.log(revArr(array3));
