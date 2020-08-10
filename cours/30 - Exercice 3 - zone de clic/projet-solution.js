/* Une solution possible */

const boutonPlus = document.querySelector('#bouton-plus');
const boutonMoins = document.querySelector('#bouton-moins');
const boutonReset = document.querySelector('#bouton-reset');
const compteur = document.querySelector('#compteur');
const zoneDeClic = document.querySelector('#zone-de-clic');

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

/* Incrémentation depuis la zone de clic */
zoneDeClic.addEventListener('click', function() {
  compteurDeClics++;
  compteur.textContent = compteurDeClics;
});

/* Décrémentation depuis la zone de clic */
zoneDeClic.addEventListener('contextmenu', function(evenement) {
  // Désactivation du menu contextuel
  evenement.preventDefault();
  
  compteurDeClics--;
  compteur.textContent = compteurDeClics;
});
