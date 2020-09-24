/* 
 * Ci-dessous vous trouverez une solution possible de l'exercice 
 * précédent sur le bouton incrémentation.
 * 
 * Complétez ce code pour ajouter les fonctionnalités suivantes :
 * 
 * 1. Bouton de décrémentation : lorsqu'on clique sur le bouton
 * '-' le compteur doit être décrémenté d'1 unité.
 * 2. Bouton RESET : lorsqu'on clique sur le bouton 'Reset' le
 * compteur doit prendre la valeur zéro.
 * 
 * NOTE : Si vous souhaitez utiliser le code que vous avez produit 
 * pour répondre à l'exercice précédent, vous pouvez bien sûr le 
 * faire !
 * Remplacez simplement le code ci-dessous par le vôtre puis 
 * complétez-le pour ajouter les fonctionnalités demandées.
 * 
 * Prenez votre temps et bon courage 😁
 */

const boutonPlus = document.querySelector('#bouton-plus');
const compteur = document.querySelector('#compteur');

let compteurDeClics = 0;

/* Fonctionnalité d'incrémentation */
boutonPlus.addEventListener('click', function() {
  // Ajoute 1 unité à compteurDeClics
  compteurDeClics++;
  compteur.textContent = compteurDeClics;
});