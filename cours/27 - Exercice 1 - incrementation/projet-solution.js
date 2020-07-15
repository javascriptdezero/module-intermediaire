const boutonPlus = document.querySelector('#bouton-plus');
const boutonMoins = document.querySelector('#bouton-moins');
const boutonReset = document.querySelector('#bouton-reset');
const compteur = document.querySelector('#compteur');

let compteurDeClics = 0;

boutonPlus.addEventListener('click', function() {
  compteurDeClics++;
  compteur.textContent = compteurDeClics;
});

boutonMoins.addEventListener('click', function() {
  compteurDeClics--;
  compteur.textContent = compteurDeClics;
});

boutonReset.addEventListener('click', function() {
  compteurDeClics = 0;
  compteur.textContent = compteurDeClics;
});
