/* 
 * Ci-dessous vous trouverez une solution possible des exercices 
 * précédents.
 * 
 * Complétez ce code pour ajouter les fonctionnalités suivantes :
 * 
 * 1. Bouton d'incrémentation : lorsqu'on clique
 * sur le bouton '+' le compteur doit être incrémenté de la quantité
 * d'unités indiquée dans l'élément input possédant l'ID valeur-inc.
 * 2. Bouton de décrémentation : lorsqu'on clique sur le bouton
 * '-' le compteur doit être décrémenté de la quantité d'unités 
 * indiquée dans l'élément input possédant l'ID valeur-dec.
 * 3. Zone de clic (incrémentation) : lorsqu'on clique avec le 
 * bouton gauche de la souris sur la zone de clic, le compteur doit 
 * être incrémenté de la quantité d'unités indiquée dans l'élément 
 * input possédant l'ID valeur-inc.
 * 4. Zone de clic (décrémentation) : lorsqu'on clique avec le 
 * bouton droit de la souris sur la zone de clic, le compteur doit 
 * être décrémenté de la quantité d'unités indiquée dans l'élément 
 * input possédant l'ID valeur-dec.
 * 
 * NOTE : Si vous souhaitez utiliser le code que vous avez produit 
 * pour répondre aux exercices précédents, vous pouvez bien sûr le 
 * faire !
 * Remplacez simplement le code ci-dessous par le vôtre puis 
 * complétez-le
 * pour ajouter les fonctionnalités demandées.
 * 
 * Prenez votre temps et bon courage 😁
 */

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

