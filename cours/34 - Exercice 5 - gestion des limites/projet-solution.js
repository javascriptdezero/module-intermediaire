/* Une solution possible */

const boutonPlus = document.querySelector('#bouton-plus');
const boutonMoins = document.querySelector('#bouton-moins');
const boutonReset = document.querySelector('#bouton-reset');
const compteur = document.querySelector('#compteur');
const zoneDeClic = document.querySelector('#zone-de-clic');
const inputValeurDec = document.querySelector('#valeur-dec');
const inputValeurInc = document.querySelector('#valeur-inc');
const inputLimiteHaute = document.querySelector('#limite-haute');
const inputLimiteBasse = document.querySelector('#limite-basse');
const notificationTexte = document.querySelector('#notification-texte');
const notification = document.querySelector('#notification');

let compteurDeClics = 0;

function afficherNotification(message) {
  // Modifier le texte de la notification
  notificationTexte.textContent = message;

  // Afficher la notification pendant 3 secondes
  notification.classList.add('afficher');
  window.setTimeout(function() {
    notification.classList.remove('afficher');
  }, 3000);

  // Faire vibrer le compteur
  compteur.classList.add('limite-atteinte');
}

function modifierCompteur(nouvelleValeur) {
  compteurDeClics = nouvelleValeur;

  const limiteHaute = Number(inputLimiteHaute.value);

  if (compteurDeClics >= limiteHaute) {
    compteurDeClics = limiteHaute;
    afficherNotification(`Limite haute (${limiteHaute}) atteinte`);
  }

  const limiteBasse = Number(inputLimiteBasse.value);

  if (compteurDeClics <= limiteBasse) {
    compteurDeClics = limiteBasse;
    afficherNotification(`Limite basse (${limiteBasse}) atteinte`);
  }

  if (compteurDeClics < limiteHaute && compteurDeClics > limiteBasse) {
    compteur.classList.remove('limite-atteinte');
  }

  compteur.textContent = compteurDeClics;
}

// Fonction d'incrémentation
function incrementerCompteur() {
  modifierCompteur(compteurDeClics + Number(inputValeurInc.value));
}

// Fonction de décrémentation
function decrementerCompteur() {
  modifierCompteur(compteurDeClics - inputValeurDec.value);
}

/* Fonctionnalité d'incrémentation */
boutonPlus.addEventListener('click', incrementerCompteur);

/* Fonctionnalité de décrémentation */
boutonMoins.addEventListener('click', decrementerCompteur);

/* Bouton reset (remise à zéro) */
boutonReset.addEventListener('click', function () {
  modifierCompteur(0);
});

/* Incrémentation depuis la zone de clic */
zoneDeClic.addEventListener('click', incrementerCompteur);

/* Décrémentation depuis la zone de clic */
zoneDeClic.addEventListener('contextmenu', function (evenement) {
  // Désactivation du menu contextuel
  evenement.preventDefault();

  decrementerCompteur();
});

