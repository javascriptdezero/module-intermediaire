/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
function assign0(objet1, objet2) {
  // Cette solution modifie l'objet1 en place, regardez la
  // solution alternative ci-dessous
  return Object.assign(objet1, objet2);
}

// Solution alternative à l'exercice 0
// Cette solution a pour avantage de ne pas modifier l'objet1
function assign0(objet1, objet2) {
  const resultat = {};
  Object.assign(resultat, objet1, objet2);
  return resultat;
}

// Exercice 1
function entries0(objet) {
  return Object.entries(objet);
}

// Exercice 2
function keys0(objet) {
  return Object.keys(objet);
}

// Exercice 3
function values0(objet) {
  return Object.values(objet);
}

/********************/
/* Exercices finaux */
/********************/

// Exercice 0 — Inversement clé / valeur
function inverser(objet) {
  const resultat = {};
  const cles = Object.keys(objet);
  const valeurs = Object.values(objet);
  for (let i = 0; i < cles.length; i++) {
    const cle = cles[i];
    const valeur = valeurs[i];
    resultat[valeur] = cle;
  }
  return resultat;
}

// Solution alternative de l'exercice 0 — Inversement clé / valeur
function inverser(objet) {
  const resultat = {};
  const pairesClesValeurs = Object.entries(objet);
  for (let i = 0; i < pairesClesValeurs.length; i++) {
    const paire = pairesClesValeurs[i];
    const cle = paire[0];
    const valeur = paire[1];
    resultat[valeur] = cle;
  }
  return resultat;
}

// Exercice 1 — Résumé
function resume(objet) {
  return {
    cles: Object.keys(objet),
    valeurs: Object.values(objet),
  }
}