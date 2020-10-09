/* Les tableaux - Tableaux multidimensionnels */

// Tableau à 2 dimensions
let tab2D = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

// Accès au 2ème élément de ce tableau
// console.log(tab2D[1]);

// Accès à un élément particulier du tableau dans le tableau
// console.log(tab2D[1][2]);

/* Raisonnement en lignes et colonnes */

// Premier index = ligne, deuxième index = colonne :
let plateauMorpion = [
  [" ", " ", " "], // 1 ligne comportant 3 colonnes
  [" ", " ", " "], // 1 ligne comportant 3 colonnes
  [" ", " ", " "], // 1 ligne comportant 3 colonnes
];

// Je joue
plateauMorpion[0][1] = "X";
// afficherPlateau();

// Affichage du plateau de jeu en lignes et colonnes
function afficherPlateau() {
  // On affiche les numéros des colonnes
  console.log("   0 1 2");
  for (let ligne = 0; ligne < plateauMorpion.length; ligne++) {
    // On initialise le contenu de la ligne avec le numéro de ligne et la 1ère barre
    let ligneComplete = `${ligne} |`;

    for (let col = 0; col < plateauMorpion[ligne].length; col++) {
      // On met la valeur de la case et on ajoute une barre verticale ensuite
      ligneComplete += `${plateauMorpion[ligne][col]}|`;
    }

    console.log(ligneComplete);
  }
}

/* Tableaux 3D */
let tab3Dligne = [[[0, 1, 2], [3, 4, 5], [6, 7, 8]], [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]];
let tab3D = [
  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ],
  [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
  ]
];

// Sélectionnez la lettre g ?
// console.log(tab3D[][][]);