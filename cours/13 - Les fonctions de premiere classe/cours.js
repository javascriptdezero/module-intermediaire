/* Les fonctions de première classe */

/* Rappel : déclaration et appel de fonction */
function bonjour() {
  console.log("bonjour");
} // <-- Pas de point-virgule, c'est une déclaration

bonjour();

/* Les fonctions sont... des objets ! */
// function bonjour() {
//   console.log("bonjour");
// }

// console.log(bonjour);
// bonjour.texte = "Propriété texte de la fonction";
// bonjour.nombre = 42;
// console.log(bonjour);

/* Le type d'un objet et d'une fonction */
// let phrase = { texte: "Un simple objet" };
// function bonjour() { console.log("bonjour"); }

// console.log(`Type de phrase: ${typeof phrase}`);
// console.log(`Type de bonjour: ${typeof bonjour}`);

/* Affectation à une variable */
// let saluer = function bonjour() {
//   console.log("bonjour");
// }; // <-- Point-virgule car c'est une instruction d'affectation (fonction bonjour est une expression)

// bonjour();
// saluer();

/* Fonctions anonymes */
// let saluer = function () {
//   console.log("bonjour");
// };

// saluer();

/* Une fonction en tant qu'argument d'un appel de fonction */
// function magie(chapeau, faireLeTour) {
//   console.log("Le spectacle commence... on fait un tour de magie !");
//   return faireLeTour(chapeau);
// }

// function cartes(chapeau) { chapeau.cartes = "🃏"; return chapeau; }
// function lapin(chapeau) { chapeau.lapin = "🐇"; return chapeau; }

// let chapeau = {};
// console.log("🎩 →", magie(chapeau, cartes));
// console.log("🎩 →", magie(chapeau, lapin));
