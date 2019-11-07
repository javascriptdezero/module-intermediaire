/* Pourquoi apprendre la POO (Programmation Orientée Objet) ? */

/* Définition : paradigme de programmation */

// Exemple programmation impérative
// const TEMPS_EN_MINUTES = 421337;
// const NOMBRE_MINUTES_DANS_1_HEURE = 60;
// const NOMBRE_MINUTES_DANS_1_JOUR = 24 * NOMBRE_MINUTES_DANS_1_HEURE;
// const NOMBRE_MINUTES_DANS_1_SEMAINE = 7 * NOMBRE_MINUTES_DANS_1_JOUR;
// let semaines = 0;
// let jours = 0;
// let heures = 0;
// let minutes = TEMPS_EN_MINUTES;

// while (minutes >= NOMBRE_MINUTES_DANS_1_SEMAINE) {
//   semaines++;
//   minutes -= NOMBRE_MINUTES_DANS_1_SEMAINE;
// }

// while (minutes >= NOMBRE_MINUTES_DANS_1_JOUR) {
//   jours++;
//   minutes -= NOMBRE_MINUTES_DANS_1_JOUR;
// }

// while (minutes >= NOMBRE_MINUTES_DANS_1_HEURE) {
//   heures++;
//   minutes -= NOMBRE_MINUTES_DANS_1_HEURE;
// }

// console.log(`${TEMPS_EN_MINUTES} minutes font ${semaines} semaines, ${jours} jours, ${heures} heures et ${minutes} minutes.`);

// Exemple en programmation orientée objet
const TEMPS_EN_MINUTES = 421337;

const periode = {
  NOMBRE_MINUTES_DANS_1_HEURE: 60,
  NOMBRE_MINUTES_DANS_1_JOUR: 24 * 60,
  NOMBRE_MINUTES_DANS_1_SEMAINE: 7 * 24 * 60,
  semaines: 0,
  jours: 0,
  heures: 0,
  minutes: 0,
  temps: 0,
  compterGroupeDeMinutes: function(minutes, groupeDeMinutes) {
    let compteur = 0;
    while (minutes >= groupeDeMinutes) {
      minutes -= groupeDeMinutes;
      compteur++;
    }
    return compteur;
  },
  convertirMinutesEnPeriode: function(tempsEnMinutes) {
    this.temps = tempsEnMinutes;
    this.semaines = this.compterGroupeDeMinutes(tempsEnMinutes, this.NOMBRE_MINUTES_DANS_1_SEMAINE);
    tempsEnMinutes -= this.semaines * this.NOMBRE_MINUTES_DANS_1_SEMAINE;
    this.jours = this.compterGroupeDeMinutes(tempsEnMinutes, this.NOMBRE_MINUTES_DANS_1_JOUR);
    tempsEnMinutes -= this.jours * this.NOMBRE_MINUTES_DANS_1_JOUR;
    this.heures = this.compterGroupeDeMinutes(tempsEnMinutes, this.NOMBRE_MINUTES_DANS_1_HEURE);
    tempsEnMinutes -= this.heures * this.NOMBRE_MINUTES_DANS_1_HEURE;
    this.minutes = tempsEnMinutes;
  },
  convertirHeuresEnPeriode: function(tempsEnHeures) {
    this.convertirMinutesEnPeriode(tempsEnHeures * 60);
  },
  afficher: function() {
    console.log(`${this.temps} minutes font ${this.semaines} semaines, ${this.jours} jours, ${this.heures} heures et ${this.minutes} minutes.`)
  }
};

periode.convertirHeuresEnPeriode(TEMPS_EN_MINUTES);
periode.afficher();