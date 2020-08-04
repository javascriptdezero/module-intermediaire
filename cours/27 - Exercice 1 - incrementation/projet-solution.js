/* Une solution possible */

const boutonPlus = document.querySelector('#bouton-plus');
const compteur = document.querySelector('#compteur');

let compteurDeClics = 0;

/* Fonctionnalité d'incrémentation */
boutonPlus.addEventListener('click', function() {
  // Ajoute 1 unité à compteurDeClics
  compteurDeClics++;
  compteur.textContent = compteurDeClics;
});