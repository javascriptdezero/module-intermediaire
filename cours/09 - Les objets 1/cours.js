/* Les objets (partie 1) */

/* Qu'est-ce qu'un objet ? */
let administrateur = { prenom: "Jérémy", age: 34 };
let utilisateur = {
  prenom: "Tom",
  age: 23
};

console.log(administrateur);
console.log(utilisateur);

/* À quoi servent les objets ? */
// // Avant : 2 variables
// let debutRdvHeures = 15;
// let debutRdvMinutes = 40;

// // Après : 1 seule variable
// let debutRdv = {
//   heures: 15,
//   minutes: 40,
// };

/* Lecture d'une propriété */
// let administrateur = {
//   prenom: "Jérémy",
//   age: 34,
//   "adresse postale": "42 rue du Code Source",
// };

// // Notation pointée
// console.log(administrateur.prenom);
// // Notation avec les crochets
// console.log(administrateur["prenom"]);

// // Pourquoi 2 notations ?
// let propriete = "age";
// console.log(administrateur[propriete]);
// console.log(administrateur["adresse" + " postale"]);

/* Écriture dans une propriété */
// let administrateur = {
//   prenom: "Jérémy",
//   age: 34,
// };

// console.log(administrateur);

// administrateur["prenom"] = "Hugo";
// administrateur.age = 42;

// console.log(administrateur);
