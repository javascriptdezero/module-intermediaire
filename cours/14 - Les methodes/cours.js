/* Les méthodes : des fonctions dans des objets */

/* Définition d'une méthode (VS une fonction) */
const compte = {
  twitter: "@JeremyMouzin",
  nom: "Jérémy Mouzin",
  afficher: function() {
    console.log("Le compte twitter @JeremyMouzin appartient à Jérémy Mouzin.");
  },
};

// Notation pointée
compte.afficher();
// Notation avec les crochets
// compte["afficher"]();

/* Lire les propriétés d'un objet depuis une méthode */

// const compte = {
//   twitter: "@JeremyMouzin",
//   nom: "Jérémy Mouzin",
//   afficher: function() {
//     console.log(`Le compte twitter ${twitter} appartient à ${nom}.`);
//   },
// };

// compte.afficher();
// compte.nom = "Tom Redocemia";
// compte.afficher();

/* Modifier les propriétés d'un objet depuis une méthode */

// const compte = {
//   twitter: "@JeremyMouzin",
//   nom: "Jérémy Mouzin",
//   modifierNom: function(nouveauNom) {
//     this.nom = nouveauNom;
//   },
//   afficher: function() {
//     console.log(`Le compte twitter ${this.twitter} appartient à ${this.nom}.`);
//   }
// };

// compte.afficher();
// compte.modifierNom("Tom Redocemia");
// compte.afficher();

/* Vous avez déjà utilisé une méthode ! */

// console.log("log est une méthode de l'objet console !");
// console.log(typeof console);

// Doc MDN sur la console : https://developer.mozilla.org/fr/docs/Web/API/Console
