/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
function convertirEnSemainesEtJours(nombreDeJours) {
  let nombreDeJoursRestants = nombreDeJours % 7;
  let nombreDeSemaines = (nombreDeJours - nombreDeJoursRestants) / 7;

  return `${nombreDeJours} jour(s), c'est équivalent à ${nombreDeSemaines} semaine(s) et ${nombreDeJoursRestants} jour(s)`
}

// Exercice 1
function calculPrixNappes(nombreDeTables, diametreTable, prixTissu) {
  let surface = diametreTable ** 2;
  let surfaceTotale = nombreDeTables * surface;
  let prix = surfaceTotale * prixTissu;
  return prix;
}

// Exercice 2
function calculPrixNappesDegressif(nombreDeTables, diametreTable, prixTissu) {
  let surface = diametreTable ** 2;
  let surfaceTotale = nombreDeTables * surface;
  let prix = surfaceTotale * prixTissu;
  
  if (surfaceTotale >= 100) {
    return prix * (1 - 50 / 100);
  }
  if (surfaceTotale >= 50) {
    return prix * (1 - 30 / 100);
  }
  if (surfaceTotale >= 30) {
    return prix * (1 - 20 / 100);
  }
  if (surfaceTotale >= 20) {
    return prix * (1 - 10 / 100);
  }
  return prix;
}

// Exercice 3
/*
Vous devriez obtenir ces valeurs :
- nombre vaut 85
- dix vaut 22
- vingt vaut 39
- trente vaut 58
*/

// Exercice 4
function repeter(mot, nombreDeRepetitions) {
  let motRepete = mot;
  while (--nombreDeRepetitions !== 0) {
    motRepete += mot;
  }
  return motRepete;
}