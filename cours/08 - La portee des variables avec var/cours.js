/* La portée des variables avec var */

console.log(nombre);
var nombre = 42;
console.log(nombre);

/* La portée au niveau des blocs d'instructions avec var */
// {
//   var nombre = 42;
//   console.log(`Dans le bloc, nombre => ${nombre}`);
// }
// console.log(`En dehors du bloc, nombre => ${nombre}`);

/* La portée au niveau des fonctions (function-scoping) */
// function afficher() {
//   var nombre = 42;
//   console.log(`Dans la fonction, nombre => ${nombre}`);
// }
// console.log(`En dehors de la fonction, nombre => ${nombre}`);
// afficher();

/* Les structures de contrôle dans les fonctions */
// Conditions
// function afficher() {
//   if (true) {
//     var nombre = 42;
//     console.log(`Dans le if, nombre => ${nombre}`);
//   }
//   console.log(`En dehors du if, nombre => ${nombre}`);
// }
// console.log(`En dehors de la fonction, nombre => ${nombre}`);
// afficher();

// Boucle do...while
// function afficher() {
//   do {
//     var nombre = 42;
//     console.log(`Dans le do...while, nombre => ${nombre}`);
//   } while (false);
//   console.log(`En dehors du do...while, nombre => ${nombre}`);
// }
// console.log(`En dehors de la fonction, nombre => ${nombre}`);
// afficher();

// Boucle while
// function afficher() {
//   var compteur = 0;
//   while (compteur++ < 1) {
//     var nombre = 42;
//     console.log(`Dans le while, nombre => ${nombre}`);
//   }
//   console.log(`En dehors du while, nombre => ${nombre}`);
// }
// console.log(`En dehors de la fonction, nombre => ${nombre}`);
// afficher();

// Boucle for
// function afficher() {
//   for (var i = 0; i < 1; i++) {
//     var nombre = 42;
//     console.log(`Dans la boucle for, nombre => ${nombre}`);
//     console.log(`Dans la boucle for, i => ${i}`);
//   }
//   console.log(`En dehors de la boucle for, nombre => ${nombre}`);
//   console.log(`En dehors de la boucle for, i => ${i}`);
// }
// console.log(`En dehors de la fonction, nombre => ${nombre}`);
// console.log(`En dehors de la fonction, i => ${i}`);
// afficher();

// Cas particulier du for() sur une seule ligne et sans {}
// function afficher() {
//   for (var nombre = 42; nombre < 43; nombre++) console.log(`Dans la boucle for sans {}, nombre => ${nombre}`);
//   console.log(`En dehors de la boucle for sans {}, nombre => ${nombre}`);
// }
// console.log(`En dehors de la fonction, nombre => ${nombre}`);
// afficher();

/* Problème 1 : on peut redéclarer *dans la même portée* ! */
// Même portée : fichier
// var nombre = 42;
// console.log(nombre);
// var nombre = 1337;
// console.log(nombre);

// Problème 2 : écrasement de paramètres sans provoquer d'erreur
// function saluer(bonjour) {
//   var bonjour = "Bonjour";
//   console.log(bonjour);
// }
// saluer("Coucou");

/* Problème 3 : portée très grande par défaut */
// var zero = 0;
// {
//   var premier = 1;
//   console.log(`Dans le bloc jaune, zero => ${zero}`);
//   console.log(`Dans le bloc jaune, premier => ${premier}`);
//   {
//     var deuxieme = 2;
//     console.log(`Dans le bloc violet, zero => ${zero}`);
//     console.log(`Dans le bloc violet, premier => ${premier}`);
//     console.log(`Dans le bloc violet, deuxieme => ${deuxieme}`);
//   }
//   console.log(`Après le bloc violet, zero => ${zero}`);
//   console.log(`Après le bloc violet, premier => ${premier}`);
//   console.log(`Après le bloc violet, deuxieme => ${deuxieme}`);
// }
// console.log(`Après le bloc jaune, zero => ${zero}`);
// console.log(`Après le bloc jaune, premier => ${premier}`);
// console.log(`Après le bloc jaune, deuxieme => ${deuxieme}`);

/* Plus de problèmes avec switch */
// var operation = "augmentation";
// var valeur = 30;
// var progression = 42; // Progression initiale : 42 %
// switch (operation) {
//   case "augmentation":
//     var nouvelleValeur = progression + valeur;
//     progression = nouvelleValeur > 100 ? 100 : nouvelleValeur;
//     break;
//   case "diminution":
//     var nouvelleValeur = progression - valeur;
//     progression = nouvelleValeur < 0 ? 0 : nouvelleValeur;
//     break;
//   default:
//     break;
// }
// console.log(progression);
