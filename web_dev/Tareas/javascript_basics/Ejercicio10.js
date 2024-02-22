// Escribe una función que revise si una cadena de texto es un palíndromo o no.

let palindrome = (word) => {
  let stack = [];
  [...word].reverse().forEach((l) => {
    if (l == " ") return;
    stack.push(l);
  });

  word = word.replace(/ /g, "").toLowerCase();

  if (stack.join("").toLowerCase() == word) {
    return true;
  }
  return false;
};

console.log(palindrome("osO"));
console.log(palindrome("Anita lava la tina"));
console.log(palindrome("La ruta natural"));
console.log(palindrome("This is not a palindrome"));
