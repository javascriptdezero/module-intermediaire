/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
function abs0(nombre) {
  return Math.abs(nombre);
}

// Exercice 1
function ceil0(nombre) {
  return Math.ceil(nombre);
}

// Exercice 2
function floor0(nombre) {
  return Math.floor(nombre);
}

// Exercice 3
function hypot0(cote1, cote2) {
  return Math.hypot(cote1, cote2);
}

// Exercice 4
function hypot1(nombre1, nombre2, nombre3) {
  return Math.hypot(nombre1, nombre2, nombre3);
}

// Exercice 5
function max0(nombre1, nombre2) {
  return Math.max(nombre1, nombre2);
}

// Exercice 6
function max1(nombre1, nombre2, nombre3) {
  return Math.max(nombre1, nombre2, nombre3);
}

// Exercice 7
function min0(nombre1, nombre2) {
  return Math.min(nombre1, nombre2);
}

// Exercice 8
function min1(nombre1, nombre2, nombre3) {
  return Math.min(nombre1, nombre2, nombre3);
}

// Exercice 9
function pow0(nombre, puissance) {
  return Math.pow(nombre, puissance);
}

// Exercice 10
function random0(limiteHaute) {
  return Math.random() * limiteHaute;
}

// Exercice 11
function random1(limiteBasse, limiteHaute) {
  return limiteBasse + Math.random() * (limiteHaute - limiteBasse);
}

// Exercice 12
function round0(nombre) {
  return Math.round(nombre);
}

// Exercice 13
function sign0(nombre) {
  return Math.sign(nombre);
}

// Exercice 14
function trunc0(nombre) {
  return Math.trunc(nombre);
}

/********************/
/* Exercices finaux */
/********************/

// Exercice 0 — Thermomètre endommagé
function corrigerTemp(liste) {
  // La température initiale est toujours de -54 °C.
  let temperaturePrecedente = -54;
  let resultat = [];
  // Pour chaque différence de température
  for (let i = 0; i < liste.length; i++) {
    // On ajoute la température absolue du jour précédent avec la différence de température dont on a retiré les décimales
    temperaturePrecedente += Math.trunc(liste[i]);
    // On stocke le résultat
    resultat.push(temperaturePrecedente);
  }
  return resultat;
}

// Exercice 1 — Vent solaire
function corrigerPression(liste) {
  let resultat = [];
  for (let i = 0; i < liste.length; i++) {
    let valeur = liste[i];
    // On corrige le signe négatif
    valeur = Math.abs(valeur);
    // On corrige l'arrondi
    valeur = Math.round(valeur);
    // On stocke le résultat
    resultat.push(valeur);
  }
  return resultat;
}
