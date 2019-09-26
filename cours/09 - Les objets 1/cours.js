/* Les objets (partie 1) */

// Déclarer un objet
// Propriété = paire de clé (nom de la propriété, une string) + valeur
let objetVide = {};
let administrateur = { prenom: "Jérémy", age: 34 };
let utilisateur = {
  prenom: "Tom",
  age: 23,   // Virgule finale (ou pas)
};

console.log(objetVide);
console.log(administrateur);
console.log(utilisateur);

/*
À quoi servent les objets ?
- Structurer son code et sa pensée
- Rassembler plusieurs variables dans une seule entité
- Permettre la composition à partir d'éléments simples
- Analogies lettres / mots / phrases / paragraphes
*/

// Imbrication d'objets
let rendezVous = {
  date: "4 Février 2042",
  horaire: {
    heures: 10,
    minutes: 30
  },
  lieu: "12 rue du Code Source"
}

// Comment lire la propriété d'un objet : notation pointée et crochets, différence, avantages / inconvénients, limitation dans les noms des propriétés identiques aux noms des variables mais espaces autorisés, il faut mettre "propriété avec guillemets". Notation pointée demande un identifiant de variable valide, donc espaces interdits
/*
Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:
let pre = "pre";
let nom = "nom";
console.log(utilisateur[pre + nom]);
*/
// Comment écrire dans la propriété d'un objet
// Comment ajouter / supprimer une propriété d'un objet
// Les noms des propriétés sont toujours des chaînes de caractères (peuvent contenir des espaces)
// Intérêt d'utiliser des objets ?
// Que se passe-t-il en mémoire ?
// Exemple de code déroutant : notion de const... qui est variable !
// Dangling comma : diff plus simples, plus facile d'ajouter/supprimer/déplacer une ligne
// Affectation d'une variable (ou toute expression) à une propriété

/* Avantage: on réduit le nombre de variables, on structure mieux son code
// Avant : 2 variables
let debutRdvHeures = 15;
let debutRdvMinutes = 40;

// Après : 1 seule variable
let debutRdv = {
  heures: 15,
  minutes: 40
}
*/
