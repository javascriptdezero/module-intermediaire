/* La portée des variables (scope) */

/* const et let ont exactement la même portée */
// console.log(nombre);
// let nombre = 42;
// console.log(nombre);

/* La portée au niveau des blocs d'instructions { } (block-scoping) */
// {
//   let nombre = 42;
//   console.log(`Dans le bloc, nombre => ${nombre}`);
// }
// console.log(`En dehors du bloc, nombre => ${nombre}`);

// Variable globale VS locale
// let partout = "Globale, accessible de partout à partir de la déclaration";
// {
//   let bloc = "Locale, accessible à l'intérieur de mon bloc à partir de la déclaration";
//   console.log(bloc);
//   console.log(partout);
// }
// console.log(bloc);
// console.log(partout);

/* Les blocs d'instructions des structures de contrôle */
// Conditions
// if (true) {
//   let nombre = 42;
//   console.log(`Dans le if, nombre => ${nombre}`);
// }
// console.log(`En dehors du if, nombre => ${nombre}`);

// Boucle do...while
// do {
//   let nombre = 42;
//   console.log(`Dans le do...while, nombre => ${nombre}`);
// } while (false);
// console.log(`En dehors du do...while, nombre => ${nombre}`);

// Boucle while
// let compteur = 0;
// while (compteur++ < 1) {
//   let nombre = 42;
//   console.log(`Dans le while, nombre => ${nombre}`);
// }
// console.log(`En dehors du while, nombre => ${nombre}`);

// Boucle for
// for (let i = 0; i < 1; i++) {
//   let nombre = 42;
//   console.log(`Dans la boucle for, nombre => ${nombre}`);
//   console.log(`Dans la boucle for, i => ${i}`);
// }
// console.log(`En dehors de la boucle for, nombre => ${nombre}`);
// console.log(`En dehors de la boucle for, i => ${i}`);

// Cas particulier du for() sur une seule ligne et sans {}
// for (let nombre = 42; nombre < 43; nombre++) console.log(`Dans la boucle for sans {}, nombre => ${nombre}`);
// console.log(`En dehors de la boucle for sans {}, nombre => ${nombre}`);

/* Interdiction de redéclarer *dans la même portée* ! */
// Même portée : fichier
// let nombre = 42;
// let nombre = 1337;

// Portées différentes => masquage (nommage identique === mauvaise pratique)
// let nombre = 42;
// {
//   let nombre = 1337;
//   console.log(nombre);
// }
// console.log(nombre);

// Cas particulier des fonctions, les paramètres sont dans la portée de celle-ci
// function saluer(bonjour) {
//   let bonjour = "Bonjour";
//   console.log(bonjour);
// }
// saluer("Coucou");

/* Blocs d'instructions imbriqués */
// let zero = 0;
// { 
//   let premier = 1;
//   console.log(zero);
//   console.log(premier);
//   {
//     let deuxieme = 2;
//     console.log(zero);
//     console.log(premier);
//     console.log(deuxieme);
//   }
//   console.log(zero);
//   console.log(premier);
//   console.log(deuxieme);
// }

/* Problème avec switch (et solution) */
// let operation = "augmentation";
// let valeur = 30;
// let progression = 42; // Progression initiale : 42 %
// switch (operation) {
//   case "augmentation":
//     let nouvelleValeur = progression + valeur;
//     progression = nouvelleValeur > 100 ? 100 : nouvelleValeur;
//     break;
//   case "diminution":
//     let nouvelleValeur = progression - valeur;
//     progression = nouvelleValeur < 0 ? 0 : nouvelleValeur;
//     break;
//   default:
//     break;
// }
// console.log(progression);

/* Bonnes pratiques */