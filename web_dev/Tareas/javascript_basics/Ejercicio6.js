// Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

let leet = (phrase) => {
  const leetDict = {
    a: "4",
    b: "8",
    c: "<",
    e: "3",
    g: "9",
    h: "#",
    i: "1",
    l: "|",
    o: "0",
    s: "$",
    t: "7",
    z: "2",
  };

  return phrase
    .split("")
    .map((c) => {
      if (c.toLowerCase() in leetDict) {
        return leetDict[c.toLowerCase()];
      }
      return c;
    })
    .join("");
};

let phrase1 = "starting from scratch and go on to advanced concepts";
let phrase2 = "add elements, manipulate their size and position";
let phrase3 = "Interfaces and interact with The visitor";

console.log(leet(phrase1));
console.log(leet(phrase2));
console.log(leet(phrase3));
