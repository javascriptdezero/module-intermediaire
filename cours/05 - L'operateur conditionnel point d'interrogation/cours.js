/* L'opérateur conditionnel '?' */

/* Affectation conditionnelle d'une valeur */
let celibataire = true;
let etatCivil = "";

if (celibataire) {
  etatCivil = "Célibataire";
} else {
  etatCivil = "Concubinage";
}

console.log(etatCivil);

/* Utilisation de l'opérateur ternaire '?' */
// let celibataire = true;
// let etatCivil = "";

// etatCivil = (celibataire) ? "Célibataire" : "Concubinage";

// console.log(etatCivil);

/* Enchaînement de conditions (non recommandé) */
// let celibataire = true;
// let mariage = false;
// let etatCivil = "";

// etatCivil = (celibataire) ? "Célibataire" : (mariage) ? "Marié" : "Concubinage";

// console.log(etatCivil);

/* Enchaînement complexe de conditions (non recommandé) */
// let celibataire = true;
// let mariage = false;
// let pacs = false;
// let etatCivil = "";

// etatCivil = (celibataire) ? "Célibataire" : (mariage) ? "Marié" : (pacs) ? "Pacsé" : "Concubinage";

// console.log(etatCivil);

/* Enchaînement encore plus complexe de conditions (VRAIMENT non recommandé) */
// let celibataire = true;
// let deces = true;
// let genre = "femme";
// let etatCivil = "";

// etatCivil = (celibataire) ? ((deces) ? ((genre === "femme") ? "Veuve" : "Veuf") : "Célibataire")
//   : "Concubinage";

// console.log(etatCivil);

/* Exécution conditionnelle (non recommandé) */
// function proposerPacs() { 
//   console.log("Souhaitez-vous vous pacser ?");
//   return "Concubinage";
// }

// let celibataire = false;

// etatCivil = (celibataire) ? "Célibataire" : proposerPacs();

// console.log(etatCivil);