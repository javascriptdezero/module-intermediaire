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
const notification = document.querySelector('#notification');
const texteNotification = document.querySelector('#notification-texte');

let compteurDeClics = 0;

// Fonction de modification de la valeur du compteur
function modifierCompteur(nouvelleValeur) {
  compteurDeClics = nouvelleValeur;

  const limiteHaute = +inputLimiteHaute.value;
  if (compteurDeClics >= limiteHaute) {
    // Texte de la notification
    texteNotification.textContent = `Limite haute (${limiteHaute}) atteinte`;

    // Contrainte du compteur à la limite haute
    compteurDeClics = limiteHaute;
  }

  const limiteBasse = +inputLimiteBasse.value;
  if (compteurDeClics <= limiteBasse) {
    // Texte de la notification
    texteNotification.textContent = `Limite basse (${limiteBasse}) atteinte`;
    
    // Contrainte du compteur à la limite basse
    compteurDeClics = limiteBasse;
  }

  if (compteurDeClics >= limiteHaute || compteurDeClics <= limiteBasse) {
    // Affichage temporaire de la notification
    notification.classList.add('afficher');
    setTimeout(function() {
      notification.classList.remove('afficher');
    }, 3000);
  
    // Compteur qui vibre en rouge
    compteur.classList.add('limite-atteinte');
  } else {
    compteur.classList.remove('limite-atteinte');
  }

  // Mise à jour de la valeur du compteur
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
boutonReset.addEventListener('click', function() {
  modifierCompteur(0);
});

/* Incrémentation depuis la zone de clic */
zoneDeClic.addEventListener('click', incrementerCompteur);

/* Décrémentation depuis la zone de clic */
zoneDeClic.addEventListener('contextmenu', function(evenement) {
  // Désactivation du menu contextuel
  evenement.preventDefault();
  
  decrementerCompteur();
});

