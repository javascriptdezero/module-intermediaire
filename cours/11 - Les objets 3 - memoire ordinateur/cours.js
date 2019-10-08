/* Les objets 3 — Que se passe-t-il dans la mémoire de l'ordinateur ? */

/* Rappel : affectation d'un type primitif */
let nombre = 42;
let reponse = nombre;
reponse = 1337;
console.log(nombre);

/* Affectation d'un objet */
// let original = {
//   texte: "Objet original",
// };
// let reponse = original;
// reponse.texte = "Nouveau texte";
// console.log(original);

/* Que se passe-t-il dans la mémoire ? */

/* Une constante... qui peut être modifiée ?! */
// const original = {
//   texte: "Objet original",
// }
// original.texte = "Nouveau texte";
// console.log(original);

/* Impact sur les fonctions : effets de bord (side effects) */
// function modifierObjet(objet) {
//   objet.texte = "Nouveau texte";
// }

// const original = {
//   texte: "Objet original",
// };

// modifierObjet(original);

// console.log(original);
