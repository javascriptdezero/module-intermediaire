/* Les objets 4 — Les objets imbriqués */

/* Déclaration d'un objet dans une propriété */
let personne = {
  prenom: "Tom",
  nom: "Redocemia",
  adresse: {
    numero: 42,
    nom: "rue du bloc d'instructions",
    codePostal: 31337,
    ville: "Code source",
  },
}
console.log(personne);

/* Lecture d'une propriété imbriquée */
// console.log(`Code postal: ${personne.adresse.codePostal}`);

/* Ajout dynamique d'une propriété à un objet imbriqué */
// personne.adresse.interphone = 7;
// personne.adresse["batiment"] = "Bâtiment H";
// console.log(personne);

/* Suppression dynamique d'une propriété d'un objet imbriqué */
// delete personne.adresse.interphone;
// console.log(personne);

/* Ajout dynamique d'un objet imbriqué à une propriété */
// personne.conjointe = {
//   prenom: "Lea",
//   nom: "Redocemia",
// };
// console.log(personne);

/* Ajout dynamique d'un objet dans un objet... */
// personne.conjointe.adresse = {
//   numero: 21,
//   nom: "allée des accolades",
//   codePostal: 31337,
//   ville: "Code source",
// };
// console.log(personne);

/* Notion de niveaux d'imbrication */

/* Exemple d'objet complexe */
// Un tweet au format JSON retourné par l'API de Twitter
// API : Application Programming Interface
// JSON : JavaScript Object Notation
// https://jsoneditoronline.org/