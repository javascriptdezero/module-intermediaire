/* 
 * Ci-dessous vous trouverez une solution possible des exercices 
 * précédents sur le bouton incrémentation, décrémentation et reset.
 * 
 * Complétez ce code pour ajouter les fonctionnalités suivantes :
 * 
 * 1. Zone de clic (incrémentation) : lorsqu'on clique avec le 
 * bouton gauche de la souris sur la zone de clic, le compteur doit 
 * être incrémenté d'1 unité.
 * 2. Zone de clic (décrémentation) : lorsqu'on clique avec le 
 * bouton droit de la souris sur la zone de clic, le compteur doit 
 * être décrémenté d'1 unité.
 * 
 * NOTE : Si vous souhaitez utiliser le code que vous avez produit 
 * pour répondre aux exercices précédents, vous pouvez bien sûr le 
 * faire !
 * Remplacez simplement le code ci-dessous par le vôtre puis 
 * complétez-le pour ajouter les fonctionnalités demandées.
 * 
 * Prenez votre temps et bon courage 😁
 */

const boutonPlus = document.querySelector('#bouton-plus');
const boutonMoins = document.querySelector('#bouton-moins');
const boutonReset = document.querySelector('#bouton-reset');
const compteur = document.querySelector('#compteur');

let compteurDeClics = 0;

/* Fonctionnalité d'incrémentation */
boutonPlus.addEventListener('click', function() {
  // Ajoute 1 unité à compteurDeClics
  compteurDeClics++;
  compteur.textContent = compteurDeClics;
});

/* Fonctionnalité de décrémentation */
boutonMoins.addEventListener('click', function() {
  // Soustrait 1 unité à compteurDeClics
  compteurDeClics--;
  compteur.textContent = compteurDeClics;
});

/* Bouton reset (remise à zéro) */
boutonReset.addEventListener('click', function() {
  compteurDeClics = 0;
  compteur.textContent = compteurDeClics;
});
