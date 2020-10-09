/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
function concat0(tableau1, tableau2) {
  return tableau1.concat(tableau2);
}

// Exercice 1
function concat1(tableau, valeur1, valeur2, valeur3) {
  return tableau.concat(valeur1, valeur2, valeur3);
}

// Exercice 2
function fill0(tableau, valeur) {
  return tableau.fill(valeur);
}

// Exercice 3
function fill1(tableau, valeur, index) {
  return tableau.fill(valeur, index);
}

// Exercice 4
function fill2(tableau, valeur, debut, fin) {
  return tableau.fill(valeur, debut, fin + 1);
}

// Exercice 5
function fill3(tableau, valeur) {
  return tableau.fill(valeur, -3);
}

// Exercice 6
function includes0(tableau, valeur) {
  return tableau.includes(valeur);
}

// Exercice 7
function includes1(tableau, valeur, debut) {
  return tableau.includes(valeur, debut);
}

// Exercice 8
function includes2(tableau, valeur) {
  return tableau.includes(valeur, -4);
}

// Exercice 9
function indexOf0(tableau, valeur) {
  return tableau.indexOf(valeur);
}

// Exercice 10
function indexOf1(tableau, valeur, debut) {
  return tableau.indexOf(valeur, debut);
}

// Exercice 11
function indexOf2(tableau, valeur) {
  return tableau.indexOf(valeur, -2);
}

// Exercice 12
function join0(tableau) {
  return tableau.join();
}

// Exercice 13
function join1(tableau, separateur) {
  return tableau.join(separateur);
}

// Exercice 14
function lastIndexOf0(tableau, valeur) {
  return tableau.lastIndexOf(valeur);
}

// Exercice 15
function lastIndexOf1(tableau, valeur) {
  return tableau.lastIndexOf(valeur, 3);
}

// Exercice 16
function lastIndexOf2(tableau, valeur) {
  return tableau.lastIndexOf(valeur, -3);
}

// Exercice 17
function pop0(tableau) {
  return tableau.pop();
}

// Exercice 18
function pop1(tableau) {
  tableau.pop();
  return tableau;
}

// Exercice 19
function push0(tableau, valeur) {
  tableau.push(valeur);
  return tableau;
}

// Exercice 20
function push1(tableau, valeur1, valeur2) {
  tableau.push(valeur1, valeur2);
  return tableau;
}

// Exercice 21
function reverse0(tableau) {
  return tableau.reverse();
}

// Exercice 22
function shift0(tableau) {
  return tableau.shift();
}

// Exercice 23
function shift1(tableau) {
  tableau.shift();
  return tableau;
}

// Exercice 24
function slice0(tableau) {
  return tableau.slice(2);
}

// Exercice 25
function slice1(tableau, debut, fin) {
  return tableau.slice(debut, fin);
}

// Exercice 26
function slice2(tableau) {
  return tableau.slice(-3);
}

// Exercice 27
function slice3(tableau) {
  return tableau.slice(2,-2);
}

// Exercice 28
function splice0(tableau) {
  tableau.splice(2,1);
  return tableau;
}

// Exercice 29
function splice1(tableau) {
  tableau.splice(1,3);
  return tableau;
}

// Exercice 30
function splice2(tableau) {
  tableau.splice(-3,2);
  return tableau;
}

// Exercice 31
function splice3(tableau, debut, valeur) {
  tableau.splice(debut, 0, valeur);
  return tableau;
}

// Exercice 32
function splice4(tableau, debut, valeur1, valeur2) {
  tableau.splice(debut, 0, valeur1, valeur2);
  return tableau;
}

// Exercice 33
function splice5(tableau, valeur1, valeur2) {
  tableau.splice(-2, 0, valeur1, valeur2);
  return tableau;
}

// Exercice 34
function splice6(tableau, valeur1, valeur2) {
  tableau.splice(1, 3, valeur1, valeur2);
  return tableau;
}

// Exercice 35
function unshift0(tableau, valeur) {
  tableau.unshift(valeur);
  return tableau;
}

// Exercice 36
function unshift1(tableau, valeur1, valeur2) {
  tableau.unshift(valeur1, valeur2);
  return tableau;
}

/********************/
/* Exercices finaux */
/********************/

// Exercice 0 — Demi-tour
function demitour(tableau1, tableau2) {
  // On retourne les 2 tableaux
  tableau1.reverse();
  tableau2.reverse();
  // Puis on concatène les 2 en partant de tableau2 comme valeur initiale
  return tableau2.concat(tableau1);
}

// Exercice 1 - Remplissage
function remplissage(mot, taille) {
  // On récupère la longueur du mot
  const longueurInitialeMot = mot.length;
  // Pour arriver jusqu'à la taille voulue, il faudra ajouter
  // ((longueur du mot) - taille) caractères supplémentaires
  for (let i = 0; i < taille - longueurInitialeMot; i++) {
    // On ajoute un '#' en 1er caractère du mot
    mot.unshift("#");
  }
  // mot est un tableau donc il faut le transformer en chaîne de caractères
  return mot.join("");
}

// Exercice 2 - Extraction
function extraction(transmission, sequence) {
  // On cherche le 1er caractère sequence dans transmission
  const indexDebut = transmission.indexOf(sequence);
  // On cherche le dernier caractère sequence dans transmission
  const indexFin = transmission.lastIndexOf(sequence);
  // On récupère ce qu'il y a entre ces 2 caractères, attention
  // indexDebut et indexFin correspondent à la position du
  // caractère sequence ! Il faut donc commencer 1 position après
  // indexFin (d'où le + 1). En revanche indexFin n'est pas inclus
  // quand on fait slice, donc pas besoin de mettre (indexFin - 1) !
  return transmission.slice(indexDebut + 1, indexFin);
}

// Exercice 3 - Camouflage
function camouflage(transmission, sequence) {
  // Cf commentaires de l'exercice précédent, même principe...
  const indexDebut = transmission.indexOf(sequence);
  const indexFin = transmission.lastIndexOf(sequence);
  // ...sauf qu'on utilise fill à la place
  return transmission.fill('#', indexDebut + 1, indexFin);
}

// Exercice 4 - Suppression
function suppression(transmission, sequence) {
  // indexDebut correspond à la première lettre du code secret
  // (d'où le + 1) !
  const indexDebut = transmission.indexOf(sequence) + 1;
  // indexFin correspond à l'index de sequence de fin du code
  const indexFin = transmission.lastIndexOf(sequence);
  // On calcule la longueur du code secret à supprimer
  const longueurASupprimer = indexFin - indexDebut;
  // On supprime dès la 1ère lettre du code secret
  transmission.splice(indexDebut, longueurASupprimer);
  return transmission;
}

// Exercice 5 - Entrelacement
function entrelacement(tableau1, tableau2) {
  const resultat = [];
  // Comme les tableaux sont de la même longueur, on peut
  // boucler facilement en utilisant la taille du tableau1
  // par exemple comme limite
  for (let i = 0; i < tableau1.length; i++) {
    // Puis on ajoute dans l'ordre tableau1, tableau2 chaque
    // élément de chaque tableau au résultat
    resultat.push(tableau1[i], tableau2[i]);
  }
  return resultat;
}

// Exercice 6 - Duplication
function duplication(quantites, valeurs){
  const resultat = [];
  // Pour chaque quantité du tableau quantites...
  for (let i = 0; i < quantites.length; i++) {
    const quantite = quantites[i];
    const valeur = valeurs[i];
    // On boucle plusieurs fois pour faire les copies (duplication)
    for (let copies = 0; copies < quantite; copies++) {
      resultat.push(valeur);
    }
  }
  return resultat;
}

// Exercice 7 - Sélection
function selection(selecteur, liste) {
  const resultat = [];
  // Pour chaque sélecteur...
  for (let i = 0; i < selecteur.length; i++) {
    // S'il est inclus dans la liste...
    if (liste.includes(selecteur[i])) {
      // On supprime le 1er élément de liste qu'on stocke
      // dans premierElement (shift() modifie en place liste !)
      const premierElement = liste.shift();
      // On ajoute à notre resultat ce premier élément
      resultat.push(premierElement);
    } else {
      // Si le sélecteur n'est pas inclus dans la liste
      // On supprime le dernier élément de liste qu'on stocke
      // dans dernierElement (pop() modifie en place liste !)
      const dernierElement = liste.pop();
      // On ajoute à notre resultat ce dernier élément
      resultat.push(dernierElement);
    }
  }
  return resultat;
} 

// Exercice 8
function extractionMultiple(transmission, sequence) {
  let resultat = [];
  // On cherche le 1er caractère de sequence
  let indexDebut = transmission.indexOf(sequence);
  // Tant qu'il en existe un, on extrait le code secret
  while (indexDebut !== -1) {
    // On cherche le caractère sequence de fin de ce code secret.
    // Pour ça, on utilise indexOf() à partir du caractère juste
    // après le 1er caractère de sequence soit (indexDebut + 1)
    const indexFin = transmission.indexOf(sequence, indexDebut + 1);
    // On récupère le code secret grâce à slice() qu'on cumule
    // au resultat grâce à concat()
    resultat = resultat.concat(transmission.slice(indexDebut + 1, indexFin));
    // On cherche le prochain caractère de début de sequence de
    // code secret en partant cette fois-ci de juste après le
    // caractère sequence de fin du code qu'on vient de lire,
    // soit à partir de (indexFin + 1)
    indexDebut = transmission.indexOf(sequence, indexFin + 1);
  }
  return resultat;
}

// Exercice 9
function extractionMultipleIncomplete(transmission, sequence) {
  let resultat = [];
  // On cherche le 1er caractère de sequence
  let indexDebut = transmission.indexOf(sequence);
  // Tant qu'il en existe un, on extrait le code secret
  while (indexDebut !== -1) {
    // On cherche le caractère sequence de fin de ce code secret.
    // Pour ça, on utilise indexOf() à partir du caractère juste
    // après le 1er caractère de sequence soit (indexDebut + 1)
    const indexFin = transmission.indexOf(sequence, indexDebut + 1);
    // S'il n'y a pas de caractère sequence de fin, on lit
    // jusqu'au bout du fichier et on arrête de chercher
    if (indexFin === -1) {
      resultat = resultat.concat(transmission.slice(indexDebut + 1));
      // On arrête de chercher, cette ligne permet de sortir
      // de la boucle du while()
      indexDebut = -1;
    } else {
      // On récupère le code secret grâce à slice() qu'on cumule
      // au resultat grâce à concat()
      resultat = resultat.concat(transmission.slice(indexDebut + 1, indexFin));
      // On cherche le prochain caractère de début de sequence de
      // code secret en partant cette fois-ci de juste après le
      // caractère sequence de fin du code qu'on vient de lire,
      // soit à partir de (indexFin + 1)
      indexDebut = transmission.indexOf(sequence, indexFin + 1);
    }
  }
  return resultat;
}
