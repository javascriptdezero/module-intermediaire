/* Les objets 2 — Différences entre classes et prototypes */

/* Objet vide */
let personne = {};
console.log(personne);

/* Lecture d'une propriété inexistante */
// console.log(personne.prenom);
// console.log(personne["age"]);

/* Ajout dynamique d'une propriété */
// personne.prenom = "Jérémy";
// personne["age"] = 34;
// personne.profession = "développeur";
// console.log(personne);

/* Suppression dynamique d'une propriété */
// delete personne.prenom;
// delete personne["age"];
// console.log(personne);

/* Différences classe VS prototype */

/* Subtilité avec console.log() */
// console.log("Avec + : " + personne);
// console.log("Avec , : ", personne);