/* Les types primitifs */

/* 6 types primitifs */

// Nombres (Number)
// Chaînes de caractères (String)
// Booléens (Boolean)
// undefined
// null
// (Symbol - ES6)

// BigInt (ES11)

/* Le type null : une absence de valeur */

// let legumePrefere;

// if (legumePrefere === undefined) {
//    console.log("Indiquez votre légume préféré dans votre profil");
// } else {
//   if (legumePrefere === null) {
//     console.log("Manger des légumes est bon pour la santé...");
//   } else {
//     console.log(`Légume préféré : ${legumePrefere}`);
//   }
// }

/* L'opérateur typeof */

// console.log(typeof 42);
// console.log(typeof (42 + 1337));
// console.log(typeof "chaîne de caractères");
// console.log(typeof true);
// console.log(typeof (true && false));
// console.log(typeof undefined);
// console.log(typeof null); // "object" et pas "null" !

// let variable;
// console.log(typeof variable);
// variable = 42;
// console.log(typeof variable);
// variable = "bonjour";
// console.log(typeof variable);

// BONUS
// console.log(typeof Symbol());
// console.log(typeof Object());
// console.log(typeof 42n);

// NOTE: typeof n'est pas une fonction !
// typeof(null);

/* À quoi ça sert ? */

// function finPeriodeEssai(dateDebut) {
//   return dateDebut + 7;
// }

// let dateDebut = 5;
// console.log(`Fin de l'essai : ${finPeriodeEssai(dateDebut)} Juin`);
