/* Les tableaux - Introduction */

/* Qu'est-ce qu'un tableau et à quoi ça sert ? */

/* Déclaration de tableaux (Arrays en anglais) */
let tableauVide = [];

// 4 éléments/items, zero-based index
let tableauNombres = [12, 24, 32, 48];
// index               0   1   2   3

/* Déclaration sur une ligne ou plusieurs lignes */
let tableauPrenoms = ["marc", "marie", "paul"];

// Déclaration identique, trailing comma (virgule finale)
let tableauPrenomsPlusieursLignes = [
  "marc",
  "marie",
  "paul" // <- Virgule de fin possible
];
console.log(tableauPrenomsPlusieursLignes);

/* Des types de données différents pour les éléments */
let mix = [42, "bonjour", true, undefined, null, { x: 12, y: 14 }, ["a", "b"]];
// console.log(mix);

/* Rappel : un élément peut être toute expression JavaScript */
let numero = 4539;

function direSalut(prenom) {
  return `Salut ${prenom} !` ;
};

let valeurs = [42 - 12, "bon" + "jour", numero, direSalut("Jérémy")];
// console.log(valeurs);
