let wRepeat = (word) => {
  let chars = {};

  for (let i = 0; i < word.length; i++) {
    if (word[i] in chars) {
      chars[word[i]]++;
    } else {
      chars[word[i]] = 1;
    }
  }
  //   console.log(chars);

  for (let i = 0; i < word.length; i++) {
    if (chars[word[i]] === 1) {
      return word[i];
    }
  }

  return "Todas las letras se repiten";
};

console.log(wRepeat("abacddbec"));
console.log(wRepeat("abcdefu"));
console.log(wRepeat("wwxxyyzz"));
