/* La conversion de types */

// On l'a déjà vu avec des conversions implicites
// console.log(42);
// console.log("La réponse est " + 42);

/* Règles de conversion */
// On convertit vers 3 types : les nombres, les chaînes, les booléens

// La conversion explicite vers un nombre
// console.log("30" + "12");
// console.log(Number("30") + Number("12"));

// let chaine1 = "30";
// let chaine2 = "12";
// console.log(chaine1 + chaine2);
// console.log(Number(chaine1) + Number(chaine2));

// La conversion explicite vers une chaîne de caractères
// console.log(30 + 12);
// console.log(String(30) + String(12));
// console.log(String(30) + 12);

// La conversion explicite vers un booléen
// console.log(Boolean(0));
// console.log(Boolean(1));

/* Table de conversions */
// ------------------------------------------------------------------- 8 minutes

// Conversion de chaînes et booléens vers un nombre
// console.log(Number(''));            // 0
// console.log(Number('bonjour'));     // NaN
// console.log(Number('  42 '));       // 42
// console.log(Number('\n 42 \t\n'));  // 42
// console.log(Number('3.14159'));     // 3.14159
// console.log(Number('-3.14159'));    // -3.14159
// console.log(Number(true));          // 1
// console.log(Number(false));         // 0
// console.log(Number(null));          // 0
// console.log(Number(undefined));     // NaN

// Conversion de nombres et booléens vers une chaîne de caractères
// console.log(String(42));            // "42"
// console.log(String(-42));           // "-42"
// console.log(String(3.14159));       // "3.14159"
// console.log(String(-3.14159));      // "-3.14159"
// console.log(String(NaN));           // "NaN"
// console.log(String(true));          // "true"
// console.log(String(false));         // "false"
// console.log(String(null));          // "null"
// console.log(String(undefined));     // "undefined"

// Conversion de chaînes et nombres vers un booléen
// console.log(Boolean(''));           // false
// console.log(Boolean(0));            // false
// console.log(Boolean(-0));           // false
// console.log(Boolean(NaN));          // false
// console.log(Boolean(null));         // false
// console.log(Boolean(undefined));    // false
// console.log(Boolean(false));        // false
// console.log(Boolean(42));           // true
// console.log(Boolean(-42));          // true
// console.log(Boolean(3.14159));      // true
// console.log(Boolean(-3.14159));     // true
// console.log(Boolean('bonjour'));    // true
// console.log(Boolean('  42 '));      // true

/* À quoi ça sert ? Quelques exemples classiques */

// Exemple 0 : conversion en une chaîne de caractères
// let nombre = 4;
// nombre = nombre + "";
// console.log(nombre + 2);

// Exemple 1 : conversion en un booléen
// let nombre = 42;
// console.log(!!nombre);

// Exemple 2
// let quantite = 2;
// if (quantite > 0) {
//   console.log(`Votre panier contient ${quantite} items`);
// } else {
//   console.log("Votre panier est vide");
// }

// Exemple 3
// let compteur = 3;
// while (compteur > 0) {
//   console.log(`Compte à rebours... ${compteur}`);
//   compteur--;
// }
// console.log("Codez !");

// Exemple 4 : valeur par défaut de paramètres (ES5)
// function saluer(prenom, salutation) {
//   salutation = salutation || "Salut";
//   console.log(`${salutation} ${prenom} !`);
// }

// saluer("Jérémy");
// saluer("Jérémy", "Bonjour");

// Exemple 5 : une erreur classique
// let nombre = 7;
// if (nombre = 42) {
//   console.log("Le nombre vaut 42");
// } else {
//   console.log("Le nombre ne vaut pas 42");
// }

// Exemple 6 : test de retour de fonction
// function calculJoursAvantFinDuMois(dateDuJour) {
//   if (typeof dateDuJour === "number") {
//     return 30 - dateDuJour;
//   }
//   return null;
// }

// let aujourdhui = 23;
// if (nombreJoursAvantFin = calculJoursAvantFinDuMois(aujourdhui)) {
//   console.log(`Fin du mois dans ${nombreJoursAvantFin} jours`);
// } else {
//   console.log("Veuillez entrer une valeur numérique");
// }

/* BONUS : L'opérateur unaire '+' : conversion vers un nombre */
// console.log(+'');            // 0         // console.log(Number(''));            // 0
// console.log(+'bonjour');     // NaN       // console.log(Number('bonjour'));     // NaN
// console.log(+'  42 ');       // 42        // console.log(Number('  42 '));       // 42
// console.log(+'\n 42 \t\n');  // 42        // console.log(Number('\n 42 \t\n'));  // 42
// console.log(+'3.14159');     // 3.14159   // console.log(Number('3.14159'));     // 3.14159  
// console.log(+'-3.14159');    // -3.14159  // console.log(Number('-3.14159'));    // -3.14159    
// console.log(+true);          // 1         // console.log(Number(true));          // 1
// console.log(+false);         // 0         // console.log(Number(false));         // 0
// console.log(+null);          // 0         // console.log(Number(null));          // 0
// console.log(+undefined);     // NaN       // console.log(Number(undefined));     // NaN

/* Tout apprendre par coeur ? */
