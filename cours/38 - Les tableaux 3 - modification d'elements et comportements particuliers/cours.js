/* Les tableaux - Modification d'éléments et comportements particuliers */

/* Modifier un élément */
let tableau = ["zero", "un", "deux"];
tableau[1] = 1;
console.log(tableau);

/* Une taille dynamique */
// console.log(`Longueur initiale : ${tableau.length}`);
// tableau[10] = "dix";
// console.log(tableau);
// console.log(`Longueur finale : ${tableau.length}`);

// Affectation par référence (puisque c'est un objet !)
let original = [1, 2, 3];
let copie = original;
copie[1] = "deux";
// console.log(`Original : ${original}`);

// Passage par référence (puisque c'est un objet !)
let liste = [0, 0, 0];
function ajouter1(tableau, index) {
  tableau[index]++;
}

// console.log(`Avant : ${liste}`);
// ajouter1(liste, 1);
// console.log(`Après : ${liste}`);
