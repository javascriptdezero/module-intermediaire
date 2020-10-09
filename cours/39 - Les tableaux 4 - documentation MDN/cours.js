/* Les tableaux - Documentation du MDN */

// Utilisation de Chrome pour la console

/* Syntaxe : l'opérateur new */
let un = [1, 1, 1];
let deux = new Array(2, 2, 2);
// console.log(un);
// console.log(deux);

/* Méthodes statiques = boîte à outils */
let listeLiens = document.querySelectorAll("li");
// console.log(listeLiens);
let tableauLiens = Array.from(listeLiens);
// console.log(tableauLiens);
// console.log(Array.isArray(un));
// console.log(Array.of("a","b","c"));

/* Les méthodes simples à connaître */

/* Votre job en tant que développeur :

- Ne *PAS* mémoriser les détails des fonctions, la doc est là pour ça
- Mémoriser les possibilités offertes par le langage pour ne pas "réinventer la roue" !
- Vous n'êtes pas obligé de comprendre chaque phrase de la doc (shallow copy etc.)

*/

/* Le piège classique : valeur retournée VS modif. en place */

// Exemple : concat() renvoie un *nouveau* tableau
let nombres = [1, 2, 3];
// let plusDeNombres = nombres.concat(4, 5, 6);
// console.log("nombres :", nombres);
// console.log("plusDeNombres :", plusDeNombres);

// Exemple : push() modifie "en place" le tableau
nombres.push(42);
// console.log("nombres après push :", nombres);

/* Exercices */

/* Prochaine leçon */