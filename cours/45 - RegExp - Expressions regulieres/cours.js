/* RegExp : Expressions régulières */

/* Un peu de vocabulaire */
// Expressions régulières === Expressions rationnelles
// Abréviation : "RegEx" ou "RegExp"
// Modèle / motif => Pattern 🇬🇧
// Drapeaux / marqueurs => Flag(s) 🇬🇧
// Correspondance(s) => Match / Matches 🇬🇧

/* À quoi ça sert ? */
// 1. À tester la présence d'un motif dans une chaîne de caractères
// Est-ce que l'utilisateur a bien entré :
// - une adresse email valide ?
// - un code postal valide ?
// - un numéro de téléphone valide ?
// - un mot de passe suffisamment sécurisé ?
// - ...
// 2. À extraire dynamiquement des données d'une chaîne de caractères

/* Outil en ligne */
// https://regexr.com/

/*
Sur la première ligne, un code postal : 38120
Adresse : 28 rue du code, 13773 LeetVille
Le numéro de téléphone : 0123456789 (fixe)
Voici une phrase possédant plusieurs mots qui commencent par la lettre "p" !
Les expression régulières sont puissantes mais parfois difficile à déchiffrer.
Voici une autre phrase qui se termine par un point d'exclamation !
Un dernier numéro de téléphone : 0612527418 (portable)
Et puis la dernière ligne ici.
*/

/* Comment utiliser une RegExp en JavaScript ? */
let jsRegExpLitteral = /JavaScript/gi;
let jsRegExp = new RegExp("JavaScript", "gi");

/* Tester un formatage */
let regExpCodePostal = /^\d{5}$/;
let codePostaux = ["123", "   12345", "12345", "12345  ", "12a345", "45297"];

// 🚨 Attention aux échappements !
// regExpCodePostal = new RegExp("^\d{5}$");

// for (let i = 0; i < codePostaux.length; i++) {
//   let codePostal = codePostaux[i];
//   if (regExpCodePostal.test(codePostal)) {
//     console.log(`✅ '${codePostal}'`);
//   } else {
//     console.log(`❌ '${codePostal}'`);
//   }
// }

/* Les groupes de capture */
// Extraction de données
// let texte = "Téléphone : 0123456789 (fixe)";
// let regExpTel = /Téléphone : (\d{10})/;
// let telephone = regExpTel.exec(texte);
// console.log(telephone);
// console.log(`N° de tél. extrait : ${telephone[1]}`);

/* Remplacement de données */
// console.log(texte.replace(regExpTel, `Téléphone : <a href="tel:$1">$1</a>`));

/* Les erreurs fréquentes */
// Attention au moteur de RegEx utilisé !

/* Les méthodes simples à connaître */

/* Pas d'exercices ! */

/* Prochaine leçon */