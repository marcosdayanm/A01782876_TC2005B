let cap = (phrase) => {
  let size = phrase.length;
  let chars = phrase.split("");
  chars[0] = chars[0].toUpperCase();
  for (let i = 0; i < size; i++) {
    if (chars[i] === " ") {
      chars[i + 1] = chars[i + 1].toUpperCase();
    }
  }
  phrase = chars.join("");
  return phrase;
};

let phrase1 = "starting from scratch and go on to advanced concepts";
let phrase2 = "add elements, manipulate their size and position";
let phrase3 = "Interfaces and interact with The visitor";

console.log(cap(phrase1));
console.log(cap(phrase2));
console.log(cap(phrase3));
