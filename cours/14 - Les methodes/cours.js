/* Les méthodes : des fonctions dans des objets */

/* Définition d'une méthode (VS une fonction) */
const identifiant = {
  twitter: "@JeremyMouzin",
  nom: "Jérémy Mouzin",
  afficher: function() {
    console.log("L'identifiant twitter @JeremyMouzin appartient à Jérémy Mouzin.");
  },
};

// Notation pointée
identifiant.afficher();
// Notation avec les crochets
// identifiant["afficher"]();

/* Lire les propriétés d'un objet depuis une méthode */

// const identifiant = {
//   twitter: "@JeremyMouzin",
//   nom: "Jérémy Mouzin",
//   afficher: function() {
//     console.log(`L'identifiant twitter ${twitter} appartient à ${nom}.`);
//   },
// };

// identifiant.afficher();
// identifiant.nom = "Tom Redocemia";
// identifiant.afficher();

/* Modifier les propriétés d'un objet depuis une méthode */

// const identifiant = {
//   twitter: "@JeremyMouzin",
//   nom: "Jérémy Mouzin",
//   modifierNom: function(nouveauNom) {
//     this.nom = nouveauNom;
//   },
//   afficher: function() {
//     console.log(`L'identifiant twitter ${twitter} appartient à ${nom}.`);
//   }
// };

// identifiant.afficher();
// identifiant.modifierNom("Tom Redocemia");
// identifiant.afficher();

/* Vous avez déjà utilisé une méthode ! */

// console.log("log est une méthode de l'objet console !");
// console.log(typeof console);

// Doc MDN sur la console : https://developer.mozilla.org/fr/docs/Web/API/Console
