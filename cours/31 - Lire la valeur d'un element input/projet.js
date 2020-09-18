/* Lire la valeur d'un élément input */

// D'abord un petit tour dans la doc...
const boutonMoins = document.querySelector('#bouton-moins');
const compteur = document.querySelector('#compteur');
const inputValeurDec = document.querySelector('#valeur-dec');

/* Lire la valeur d'un élément HTML input */
boutonMoins.addEventListener('click', function() {
  // Affecter au compteur la valeur de l'input valeur-dec
  compteur.textContent = "?";
});

/* Une erreur très fréquente */
// const valeurDec = inputValeurDec.value;

// boutonMoins.addEventListener('click', function() {
//   // Affecter au compteur la valeur de l'input valeur-dec
//   compteur.textContent = valeurDec;
// });

/* Prochain exercice */
