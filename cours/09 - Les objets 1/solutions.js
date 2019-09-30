/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
function creerHoraire(monHeure, mesMinutes) {
  let horaire = {
    heures: monHeure,
    minutes: mesMinutes,
  };

  return horaire;
}

// Exercice 0 : solution alternative sans variable intermédiaire
function creerHoraire(monHeure, mesMinutes) {
  return {
    heures: monHeure,
    minutes: mesMinutes,
  };
}

// Exercice 1
function afficherHoraire(horaire) {
  return `L'horaire est ${horaire.heures} heures et ${horaire.minutes} minutes.`;
}

// Exercice 2
function avancerDe20Minutes(horaire) {
  let horaireAvancee = {
    heures: horaire.heures,
    minutes: horaire.minutes + 20,
  }

  if (horaireAvancee.minutes >= 60) {
    horaireAvancee.minutes -= 60;
    horaireAvancee.heures++;
    if (horaireAvancee.heures > 23) {
      horaireAvancee.heures = 0;
    }
  }

  return horaireAvancee;
}

// Exercice 2 : solution alternative (avec mutation de l'argument, on verra ce que c'est plus tard...)
function avancerDe20Minutes(horaire) {
  horaire.minutes += 20;
  if (horaire.minutes >= 60) {
    horaire.minutes -= 60;
    horaire.heures++;
    if (horaire.heures > 23) {
      horaire.heures = 0;
    }
  }
  return horaire;
}

// Exercice 2 : solution alternative à l'aide de l'opérateur conditionnel '?'
// C'est pas très lisible, vous en conviendrez, mais ça marche.
function avancerDe20Minutes(horaire) {
  return {
    heures: horaire.minutes + 20 >= 60 ? (horaire.heures + 1 > 23 ? 0 : ++horaire.heures) : horaire.heures,
    minutes: horaire.minutes + 20 >= 60 ? horaire.minutes + 20 - 60 : horaire.minutes + 20,
  }
}

// Exercice 3 — Refactoring
function validerRdv(rdv, finJournee) {
  // ETAPE 1 : Calcul de la fin du RDV
  let finRdvHeures = rdv.heures;
  let finRdvMinutes = rdv.minutes + rdv.duree;

  // ETAPE 1.1 : Gestion du cas particulier où les minutes sont >= 60
  while (finRdvMinutes >= 60) {
    finRdvHeures++;
    finRdvMinutes -= 60;
  }

  // ETAPE 2 : Est-ce que la fin du RDV est avant la fin de la journée ?
  let rdvOk = (finRdvHeures < finJournee.heures
    || (finRdvHeures === finJournee.heures
    && finRdvMinutes < finJournee.minutes));

  // On renvoie si le RDV peut se faire ou pas
  return rdvOk;
}