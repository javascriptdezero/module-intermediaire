/* Les fonctions de première classe */

/* Rappel : déclaration et appel de fonction */
function bonjour() {
  console.log("bonjour");
} // <-- Pas de point-virgule, c'est une déclaration

bonjour();

/* Fonctions de 1ère classe : les fonctions sont des valeurs ! */
// let saluer = function bonjour() {
//   console.log("bonjour");
// }; // <-- Point-virgule car c'est une instruction d'affectation (fonction bonjour est une expression)

// bonjour();
// saluer();

/* Fonctions anonymes */
// let nom = function() {
//   console.log("Je n'ai pas de nom");
// }

// nom();

/* Les fonctions sont des objets */
let objet = {
  texte: "Je suis un objet",
};
console.log(typeof objet);
let fonction = function() {
  console.log("Je suis une fonction");
};
console.log(typeof fonction);

