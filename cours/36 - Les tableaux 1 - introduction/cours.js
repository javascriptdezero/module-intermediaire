/* Les tableaux - Introduction */

/* Qu'est-ce qu'un tableau et à quoi ça sert ? */

/* Déclaration de tableaux (Arrays en anglais) */
let vide = [];

// 4 éléments/items, zero-based index
let nombres = [12, 24, 32, 48];
// index        0   1   2   3

/* Déclaration sur une ligne ou plusieurs lignes */
let prenoms = ["marc", "marie", "paul"];

// Déclaration identique, trailing comma (virgule finale)
let prenomsMultiLignes = [
  "marc",
  "marie",
  "paul" // <- Virgule de fin possible
];
console.log(prenomsMultiLignes);

/* Des éléments aux types de données différents */
let mix = [42, "bonjour", true, undefined, null, { x: 12, y: 14 }, ["a", "b"]];
// console.log(mix);

/* Rappel : un élément peut être toute expression JavaScript */
let numero = 4539;

function saluer(prenom) {
  return `Salut ${prenom} !` ;
};

let expressions = [42 - 12, "bon" + "jour", numero, saluer("Jérémy")];
// console.log(expressions);
