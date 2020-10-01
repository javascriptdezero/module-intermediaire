/* Les tableaux - Lecture et parcours via une boucle */

/* Lire un élément à partir de son index */
let nombres = [12, 24, 32, 48];
// index        0   1   2   3

// Notation avec les crochets
console.log(nombres[1]);

// Et si l'index "sort" du tableau ?
// console.log(nombres[12]);

/* Un élément omis retourne la valeur undefined (empty = vide) */
let tableauAvecTrous = [ ,"marc", "marie", ,"paul"];
// console.log(tableauAvecTrous);
// console.log(tableauAvecTrous[0]);

/* Parcourir tous les éléments d'un tableau de 3 éléments */
let prenoms = ["marc", "marie", "paul"];
for (let i = 0; i < 3; i++) {
  // console.log(`index ${i} : ${prenoms[i]}`);
}

/* Les tableaux sont en fait des objets ! */
// Rappel de déclaration d'un objet
let personne = {
  prenom: "Jérémy",
};
// console.log(personne["prenom"]);
// console.log(typeof personne);

let notes = [12, 18, 15];
// console.log(typeof notes);

// Rappel : les noms des propriétés sont toujours des chaînes de caractères !
// console.log(notes[1]);
// console.log(notes["1"]);

// Documentation MDN
// console.log(notes.length);

// Parcourir tous les éléments de n'importe quel tableau
for (let i = 0; i < notes.length; i++) {
  // console.log(`Note n°${i} : ${notes[i]}`);
}

/* Bonnes pratiques */
// Rarement utilisé...
let notesEleve = [12, 13, 15];
notesEleve.prenom = "Jérémy";
notesEleve.moyenne = function() { };
// console.log(notesEleve);

// On préférera structurer les données dans un objet
let eleve = {
  notes: [12, 13, 15],
  prenom: "Jérémy",
  moyenne: function() { /* Manipule this.notes */ },
};
