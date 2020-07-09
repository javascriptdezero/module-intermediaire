/* Compteur de clics */

const boutonPlus = document.querySelector('#bouton-plus');
const boutonMoins = document.querySelector('#bouton-moins');
const boutonReset = document.querySelector('#bouton-reset');
const compteur = document.querySelector('#compteur');
const limiteBasseInput = document.querySelector('#limite-basse');
const limiteHauteInput = document.querySelector('#limite-haute');
const valeurDecrementation = document.querySelector('#valeur-dec');
const valeurIncrementation = document.querySelector('#valeur-inc');
const notification = document.querySelector('#notification');
const notificationTexte = document.querySelector('#notification-texte');
const zoneDeClic = document.querySelector('#zone-de-clic');

function incrementer() {
  modifierCompteur(+compteur.textContent + Number(valeurIncrementation.value));
}

function decrementer() {
  modifierCompteur(+compteur.textContent - Number(valeurDecrementation.value));
}

boutonPlus.addEventListener('click', incrementer);

boutonReset.addEventListener('click', function() {
  modifierCompteur(0);
});

boutonMoins.addEventListener('click', decrementer);

function afficherNotification(texte) {
  notificationTexte.innerText = texte;
  notification.classList.add('afficher');
  setTimeout(() => {
    notification.classList.remove('afficher');
  }, 1500);
}

function modifierCompteur(nouvelleValeur) {
  const limiteBasse = +limiteBasseInput.value;
  const limiteHaute = +limiteHauteInput.value;

  if (nouvelleValeur <= limiteBasse) {
    afficherNotification(`Limite basse (${limiteBasse}) atteinte`);
    nouvelleValeur = limiteBasse;
  }

  if (nouvelleValeur >= limiteHaute) {
    afficherNotification(`Limite haute (${limiteHaute}) atteinte`);
    nouvelleValeur = limiteHaute;
  }

  if (nouvelleValeur <= limiteBasse || nouvelleValeur >= limiteHaute) {
    compteur.classList.add('limite-atteinte');
  } else {
    compteur.classList.remove('limite-atteinte');
  }

  compteur.textContent = nouvelleValeur;
}

zoneDeClic.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  decrementer();
});

zoneDeClic.addEventListener('click', incrementer);