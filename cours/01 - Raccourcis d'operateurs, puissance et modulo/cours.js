/* Les raccourcis d'opérateurs */

/* Raccourcis des opérateurs simples (+,-,*,/) */
/*
// Format général du raccourci :
variable = variable <OP> valeur;
variable <OP>= valeur;
*/

let nombre = 10;

nombre = nombre + 2;
nombre += 2;
console.log(nombre);

nombre = nombre - 2;
nombre -= 2;
console.log(nombre);

nombre = nombre * 2;
nombre *= 2;
console.log(nombre);

nombre = nombre / 2;
nombre /= 2;
console.log(nombre);

console.log("fin");

/* Opérateur de concaténation += */
// let salutation = "Bonjour ";

// salutation = salutation + "Jérémy";
// salutation += ", comment vas-tu ?";
// console.log(salutation);

// console.log("fin");

/* Les opérateurs d'incrémentation ++ et décrémentation -- */
// let incrementation = 42;

// ++incrementation; // pré-incrémentation
// incrementation++; // post-incrémentation

// console.log(incrementation);

// let decrementation = 42;

// --decrementation; // pré-décrémentation
// decrementation--; // post-décrémentation

// console.log(decrementation);

// console.log("fin");

/* Différences entre pré et post (inc|dec)rementation */
// let nombre = 40;

// let preIncrementation = ++nombre;  // pré-incrémentation
// let postIncrementation = nombre++; // post-incrémentation

// console.log(`preIncrementation : ${preIncrementation}`);
// console.log(`postIncrementation : ${postIncrementation}`)
// console.log(`nombre : ${nombre}`);

// nombre = 40;

// let preDecrementation = --nombre;  // pré-décrémentation
// let postDecrementation = nombre--; // post-décrémentation

// console.log(`preDecrementation : ${preDecrementation}`);
// console.log(`postDecrementation : ${postDecrementation}`)
// console.log(`nombre : ${nombre}`);
// console.log("fin");

/* Quelle utilité ? */
// let compteARebours = 3;

// do {
//   console.log(`Fin dans... ${compteARebours}`);
// } while (compteARebours-- !== 0);

// console.log("fin");

/* Opérateur puissance ** */
// let nombre = 2;

// console.log(nombre * nombre * nombre);
// console.log(nombre ** 3);

// console.log("fin");

/* Opérateur modulo */
// 17 = 5 * 3 + 2;
// let reste = 17 % 5;
// console.log(`Le reste de la division 17 / 5 vaut ${reste}`);

// // Exemple d'une durée de film
// let nombreMinutesTotalFilm = 142;

// // 142 = 60 * 2 + 22
// nombreMinutes = nombreMinutesTotalFilm % 60;
// console.log(`Ce film dure 2h et ${nombreMinutes} minutes`);

// console.log("fin");

// Raccourcis puissance et modulo
// let nombre = 5;

// nombre **= 3;

// console.log(nombre);

// // 125 = 8 * 15 + 5
// nombre %= 8;

// console.log(nombre);

// console.log("fin");