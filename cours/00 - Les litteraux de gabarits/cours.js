/* Les littéraux de gabarits (template strings | literals) */

// Des noms différents pour désigner la même chose...
/*
littéraux de gabarits
modèles de libellés
gabarits de libellés
gabarits de chaînes de caractères
template strings
template literals
*/

// On les a déjà vu !
// console.log(`C'est un "littéral de gabarit" !`);

/* Multi-ligne */
// console.log("Première ligne
// Deuxième ligne");

// console.log(`Première ligne
// Deuxième ligne`);

/* Interpolation d'expressions */
// let nombreEmails = 42;
// let prenom = "Jérémy";

// console.log("Bienvenue " + prenom + " !\nVous avez " + nombreEmails + " emails non lus");

// console.log(`Bienvenue ${prenom} !
// Vous avez ${nombreEmails} emails non lus`);

/* Interpolation d'expressions complexes 1 */
// let nombreEmails = 40;
// let nombreSMS = 2;

// console.log(`Bienvenue Jérémy !
// Vous avez ${nombreEmails + nombreSMS} messages non lus`);

/* Interpolation d'expressions complexes 2 */
// let nombreHeures = 3;

// console.log(`Il y a ${nombreHeures * 60} minutes dans ${nombreHeures} heures`);

/* Utilisation de fonctions */
// function saluer(heure) {
//   if (heure >= 6 && heure <= 18) {
//     return "Bonjour";
//   }
//   return "Bonsoir";
// }

// console.log(`${saluer(10)} Jérémy !`);

/* Quelle utilité ? */
// let item1 = "premier item";
// let item2 = "deuxième item";
// let listeHTML = `<div>
//   <ul>
//     <li>${item1}</li>
//     <li>${item2}</li>
//   </ul>
// </div>`;

// console.log(listeHTML);

/* Toujours utiliser les backticks ? */