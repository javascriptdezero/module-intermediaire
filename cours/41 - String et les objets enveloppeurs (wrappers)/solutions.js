/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
function charAt0(chaine, index) {
  return chaine.charAt(index);
}

// Exercice 1
function concat0(chaine1, chaine2) {
  return chaine1.concat(chaine2);
}

// Exercice 2
function concat1(chaine1, chaine2, chaine3) {
  let partie1 = chaine1.concat(chaine2);
  let resultat = partie1.concat(chaine3);
  return resultat;
  // On aurait pu également "chaîner" les appels de méthodes
  // comme ceci :
  
  // return chaine1.concat(chaine2).concat(chaine3);

  // En effet chaine1.concat(chaine2) renvoie une chaîne de
  // caractères, on peut donc faire un appel de méthode sur cette
  // chaîne immédiatement ! On appelle ça "chaîner" des appels
  // de méthodes
}

// Exercice 3
function concat2(chaine1, chaine2, chaine3) {
  return chaine3.concat(chaine2).concat(chaine1);
}

// Exercice 4
function includes0(chaine, caractere) {
  return chaine.includes(caractere);
}

// Exercice 5
function includes1(chaine, motif) {
  return chaine.includes(motif);
}

// Exercice 6
function includes2(chaine, caractere) {
  // On cherche le caractère à partir de l'avant dernière lettre
  // de chaine, soit à partir de l'index chaine.length - 2 !
  return chaine.includes(caractere, chaine.length - 2);
} 

// Exercice 7
function endsWith0(chaine, caractere) {
  return chaine.endsWith(caractere);
}

// Exercice 8
function endsWith1(chaine, fin) {
  return chaine.endsWith(fin);
}

// Exercice 9
function endsWith2(chaine, fin) {
  // On supprime les 3 derniers caractères grâce au paramètre
  // position, ainsi la recherche s'effectue uniquement sur la
  // longueur de chaine moins les 3 derniers caractères !
  return chaine.endsWith(fin, chaine.length - 3);
}

// Exercice 10
function indexOf0(chaine, motif) {
  return chaine.indexOf(motif);
}

// Exercice 11
function indexOf1(chaine, motif) {
  return chaine.indexOf(motif, 5);
} 

// Exercice 12
function indexOf2(chaine, motif) {
  return chaine.indexOf(motif, chaine.length - 15);
}

// Exercice 13
function lastIndexOf0(chaine, motif) {
  return chaine.lastIndexOf(motif);
} 

// Exercice 14
function lastIndexOf1(chaine, motif) {
  return chaine.lastIndexOf(motif, 19);
}

// Exercice 15
function localeCompare0(mot1, mot2) {
  return mot1.localeCompare(mot2);
}

// Exercice 16
function padEnd0(chaine, longueur) {
  return chaine.padEnd(longueur, '#');
} 

// Exercice 17
function padEnd1(chaine, longueur) {
  return chaine.padEnd(longueur, "OUI");
}

// Exercice 18
function padStart0(chaine, longueur) {
  return chaine.padStart(longueur, "#");
}

// Exercice 19
function padStart1(chaine, longueur){
  return chaine.padStart(longueur, "OUI");
}

// Exercice 20
function repeat0(caractere, longueur) {
  return caractere.repeat(longueur);
}

// Exercice 21
function repeat1(chaine, repetitions) {
  return chaine.repeat(repetitions);
}

// Exercice 22
function replace0(chaine, motif, remplacement) {
  return chaine.replace(motif, remplacement);
}

// Exercice 23
function replaceAll0(chaine, motif, remplacement) {
  return chaine.replaceAll(motif, remplacement);
}

// Exercice 24
function slice0(chaine, debut) {
  return chaine.slice(debut);
}

// Exercice 25
function slice1(chaine, debut, fin) {
  return chaine.slice(debut, fin);
}

// Exercice 26
function slice2(chaine, nombre) {
  return chaine.slice(-nombre);
}

// Exercice 27
function slice3(chaine) {
  return chaine.slice(3,-3);
}

// Exercice 28
function slice4(chaine, debut) {
  return chaine.slice(debut, -1);
}

// Exercice 29
function slice5(chaine) {
  return chaine.slice(-5, -2);
}

// Exercice 30
function split0(chaine) {
  return chaine.split("");
}

// Exercice 31
function split1(chaine) {
  return chaine.split(" ");
}

// Exercice 32
function split2(chaine, max) {
  return chaine.split(" ", max);
}

// Exercice 33
function split3(csv, separateur) {
  return csv.split(separateur);
}

// Exercice 34
function startsWith0(chaine, motif) {
  return chaine.startsWith(motif);
}

// Exercice 35
function startsWith1(chaine, motif) {
  // Le 5e caractère est à l'index 4, on compte à partir de 0 !
  return chaine.startsWith(motif, 4);
}

// Exercice 36
function toLowerCase0(chaine) {
  return chaine.toLowerCase();
}

// Exercice 37
function toUpperCase0(chaine) {
  return chaine.toUpperCase();
}

// Exercice 38
function trim0(chaine) {
  return chaine.trim();
}

// Exercice 39
function trimStart0(chaine) {
  return chaine.trimStart();
}

// Exercice 40
function trimEnd0(chaine) {
  return chaine.trimEnd();
}

/********************/
/* Exercices finaux */
/********************/

// Exercice 0 — Vérification de jauge
function verifierJauge(valeur) {
  let positionDernierDiese = valeur.lastIndexOf('#');
  // On compte à partir de zéro donc on ajoute 1 pour connaître
  // le nombre de # inscrits dans la jauge
  let valeurJauge = positionDernierDiese + 1;
  // La moitié de la jauge vaut sa longueur divisée par 2
  let moitieJauge = valeur.length / 2;
  // On compare avec >= car on veut 50% ou plus
  return valeurJauge >= moitieJauge;
}

// Exercice 1 — Création de jauge
function creerJauge(pourcentage) {
  let nombreDeDieses = pourcentage / 10;
  let jauge = "#".repeat(nombreDeDieses);
  // On complète jusqu'à 10 caractères
  return jauge.padEnd(10, " ");
  // Comme d'habitude on aurait pu tout écrire en 1 ligne
  // avec le chaînage de méthodes
  // return "#".repeat(pourcentage / 10).padEnd(10, " ");
}

// Exercice 2 — Compteur de voyelles
function compteurVoyelles(phrase) {
  let voyelles = "aeiouy";
  let compteur = 0;
  // On va parcourir chaque lettre une à une
  for (let i = 0; i < phrase.length; i++) {
    // On aurait pu utiliser phrase[i] à la place de charAt(i)
    let lettre = phrase.charAt(i);
    // Astuce pour tester si une lettre est une voyelle
    if (voyelles.includes(lettre)) {
      // C'est une voyelle, on compte + 1
      compteur++;
    }
  }
  return compteur;
}

// Exercice 3 — Compteur de consonnes
function compteurConsonnes(phrase) {
  /*
  On pourrait être tenté d'utiliser la négation sur la détection
  des voyelles de l'exercice précédent pour détecter les consonnes.
  Mais en faisant ça on prendrait en compte les espaces et la
  ponctuation (qui ne sont pas des voyelles mais pas des consonnes
  non plus ! Il vaut mieux partir sur l'énumération des consonnes.
  */
  let consonnes = "zrtpqsdfghjklmwxcvbn";
  let compteur = 0;
  // On va parcourir chaque lettre une à une
  for (let i = 0; i < phrase.length; i++) {
    // On aurait pu utiliser phrase[i] à la place de charAt(i)
    let lettre = phrase.charAt(i);
    // Astuce pour tester si une lettre est une consonne
    if (consonnes.includes(lettre)) {
      // C'est une consonne, on compte + 1
      compteur++;
    }
  }
  return compteur;
}

// Exercice 4 — Kebab case
function kebabCase(chaine) {
  // On met la chaine en minuscules...
  let chaineMinuscules = chaine.toLowerCase();
  // puis on remplace tous les espaces par un tiret
  let kebab = chaineMinuscules.replaceAll(' ', '-');
  return kebab;
  // À nouveau, on peut le faire en une seule ligne avec
  // le chaînage des méthodes :
  // return chaine.toLowerCase().replaceAll(' ', '-');
}

// Exercice 5 — Camel case
function camelCase(chaine) {
  // On met la chaine en minuscules...
  let chaineMinuscules = chaine.toLowerCase();
  // On scinde la chaîne en mots qu'on stocke dans un tableau
  let mots = chaineMinuscules.split(' ');
  // On initialise le résultat avec le premier mot en minuscules
  let resultat = mots[0];
  // Pour chaque mot sauf le 1er...
  for (let i = 1; i < mots.length; i++) {
    let mot = mots[i];
    // On met la 1ere lettre en majuscule
    let premiereLettreEnMaj = mot[0].toUpperCase();
    // On découpe le reste du mot sans la 1ere lettre
    let resteDuMot = mot.slice(1);
    // On concatène le tout pour reformer le mot avec la majuscule
    let motAvecPremiereLettreEnMaj = premiereLettreEnMaj.concat(resteDuMot);
    resultat = resultat.concat(motAvecPremiereLettreEnMaj);
  }
  return resultat;

  /* Voici une version plus compacte */
  // 1. En utilisant l'opérateur '+' à la place de concat()
  // 2. En utilisant le chaînage de méthodes
  // 3. En utilisant un tableau et join() pour créer la chaîne finale
  // // On met la chaine en minuscules...
  // let mots = chaine.toLowerCase().split(' ');
  // // On initialise le résultat dans un tableau contenant le 1er mot
  // let resultat = [mots[0]];
  // // Pour chaque mot sauf le 1er...
  // for (let i = 1; i < mots.length; i++) {
  //   // On ajoute la 1ère lettre du mot et le reste du mot au tableau
  //   resultat.push(mots[i][0].toUpperCase() + mots[i].slice(1));
  // }
  // // On génère la chaîne de caractères avec join('')
  // return resultat.join('');
}

// Exercice 6 — Tri de mots
function triDeMots(liste) {
  // Pour cet exercice j'ai fait le choix d'utiliser [i]
  // à la place de charAt(i), les 2 sont identiques, [i]
  // est plus compact et souvent beaucoup plus utilisé !

  let voyelles = "aeiouy";
  let resultat = "";
  // On récupère la liste des mots dans un tableau
  let listeDeMots = liste.split(',');
  // Pour chaque mot...
  for (let i = 0; i < listeDeMots.length; i++) {
    let mot = listeDeMots[i];
    // On regarde si la 1ère lettre et la derniere
    // sont des voyelles
    let premiereLettre = mot[0];
    let derniereLettre = mot.slice(-1);
    if (voyelles.includes(premiereLettre) && voyelles.includes(derniereLettre)) {
      // Si oui, on ajoute ce mot à la liste finale avec une virgule
      resultat = resultat.concat(mot, ",");
    }
  }
  // On retire la dernière virgule en trop
  resultat = resultat.slice(0, -1);
  return resultat;

  // Plutôt que d'utiliser une chaîne de caractères on peut
  // aussi utiliser un tableau et join pour générer la chaîne
  // de caractères finale, c'est ce qu'on fera dans l'exercice
  // suivant
}

// Exercice 7 — Légumes
function legumes(liste) {
  // On part sur la même chose que l'exercice précédent...
  // Mais cette fois-ci on va utiliser un tableau comme résultat
  let resultat = [];
  let legumes = "carotte,haricot,chou,aubergine";

  // On récupère la liste des mots dans un tableau
  let listeDeMots = liste.split(',');
  // On parcourt le tableau et pour chaque mot...
  for (let i = 0; i < listeDeMots.length; i++) {
    let mot = listeDeMots[i];

    // On vérifie si c'est un légume
    if (legumes.includes(mot)) {
      // On ajoute ce mot au tableau de résultat
      resultat.push(mot);
    }
  }
  // Grâce à join() on peut créer la chaîne de résultat facilement
  // avec la virgule entre chaque mot !
  return resultat.join(',');
}

// Exercice 8 — Décodeur
function decodeur(secret) {
  // On cherche le début de séquence '##'
  let positionDebutSequence = secret.indexOf('##');
  // On se déplace de 2 caractères sur la droite pour tomber sur
  // le message chiffré
  positionDebutSequence += 2;
  // Même chose pour la fin de séquence, sauf qu'on n'a pas
  // besoin de se déplacer car slice() n'inclus pas l'index de fin
  let positionFinSequence = secret.lastIndexOf('##');
  // On récupère juste le contenu utile
  let contenu = secret.slice(positionDebutSequence, positionFinSequence);
  // On déchiffre le contenu...
  // On remplace les tirets par les espaces...
  contenu = contenu.replaceAll('-', ' ');
  // On fait les conversions de chiffres en lettres
  contenu = contenu.replaceAll('1', 'i');
  contenu = contenu.replaceAll('3', 'e');
  contenu = contenu.replaceAll('4', 'a');
  contenu = contenu.replaceAll('5', 's');
  contenu = contenu.replaceAll('8', 'b');
  contenu = contenu.replaceAll('0', 'o');
  return contenu;

  /* Une version plus compacte... */
  // On récupère juste le contenu utile
  // let contenu = secret.slice(secret.indexOf('##') + 2, secret.lastIndexOf('##'));
  // // On déchiffre le contenu en utilisant des tableaux...
  // // (il existe plein d'autres façons de faire !)
  // caracteres = "-134580".split('');
  // remplacant = " ieasbo".split('');
  // for (let i = 0; i < caracteres.length; i++) {
  //   contenu = contenu.replaceAll(caracteres[i], remplacant[i]);
  // }
  // return contenu;
}

// Exercice 9 — Extraction de noms
function extraireNoms(liste) {
  // Il existe plein de façons différentes de faire cet exercice !
  let resultat = "";
  // On scinde la liste sous la forme d'un tableau contenant
  // des couples nom:X;prénom:Y (ou prénom:Y;nom:X)
  let personnes = liste.split(',');
  // Pour chaque personne, on extrait juste le nom
  for (let i = 0; i < personnes.length; i++) {
    let personne = personnes[i];
    // Le couple nom;prénom est toujours séparé par un point-virgule
    // On récupère le nom et prénom dans un tableau identite
    let identite = personne.split(';');
    // identite vaut ["nom:X", "prénom:Y"] ou ["prénom:Y", "nom:X"]
    // On cherche le nom et on concatène celui-ci au résultat
    for (let j = 0; j < identite.length; j++) {
      if (identite[j].startsWith('nom:')) {
        // On extrait juste le nom, soit les caractères juste après
        // le préfixe "nom:" (donc à partir de l'index 4)
        let nom = identite[j].slice(4);
        // On le met en majuscules et on l'ajoute au résultat
        resultat = resultat.concat(nom.toUpperCase(), ',');
      }
    }
  }
  // On retire la dernière virgule en trop du résultat
  return resultat.slice(0, -1);
}

// Exercice 10 — Tableur (difficile)
function tableur(liste) {
  // Tous les espaces vont être déterminés par la taille max des
  // noms et prénoms ! Il faut donc les calculer en 1er.

  // Pour chaque personne on va extraire le prénom et le nom.
  // On stockera tous les prénoms ensemble et noms ensemble.
  let personnes = liste.split(',');
  let prenoms = [];
  let noms = [];
  for (let i = 0; i < personnes.length; i++) {
    let personne = personnes[i];
    // personne contient par exemple "Tom REDOCEMIA"
    let prenomEtNom = personne.split(' ');
    // Le prénom est le premier mot
    let prenom = prenomEtNom[0];
    // Le nom est le second mot
    let nom = prenomEtNom[1];
    // On ajoute le prenom et le nom à chaque tableau
    prenoms.push(prenom);
    noms.push(nom);
  }

  // Maintenant qu'on a tous les prénoms et noms, on va chercher
  // le plus long prenom et nom. On initialise les valeurs à la
  // taille du mot "Prénom" et "Nom" dans le header. En effet, si
  // tous les prénoms sont plus petits que "Prénom" alors il faudra
  // que la colonne fasse la taille de "Prénom" au minimum !
  let taillePlusLongPrenom = "Prénom".length;
  let taillePlusLongNom = "NOM".length;
  // On commence par les prénoms
  for (let i = 0; i < prenoms.length; i++) {
    if(prenoms[i].length > taillePlusLongPrenom) {
      taillePlusLongPrenom = prenoms[i].length;
    }
  }
  // Pareil pour les noms
  for (let i = 0; i < noms.length; i++) {
    if(noms[i].length > taillePlusLongNom) {
      taillePlusLongNom = noms[i].length;
    }
  }

  // Maintenant on peut créer les espaces manquants facilement
  let resultat = "Prénom".padStart(taillePlusLongPrenom);
  // On ajoute les 3 espaces de séparation des colonnes;
  resultat += "   "; // équivalent à resultat = resultat + "   "
  resultat += "NOM".padStart(taillePlusLongNom);
  
  // Il ne reste plus qu'à ajouter les prénoms et noms
  for (let i = 0; i < prenoms.length; i++) { 
    // On ajoute un saut à la ligne
    resultat += "\n";
    resultat += prenoms[i].padStart(taillePlusLongPrenom);
    resultat += "   ";
    resultat += noms[i].padStart(taillePlusLongNom);
  }
  return resultat;
}

// Exercice 11 — Ville ou pays ? (difficile)
function villeOuPays(liste) {
  // Voici les noms de référence pour les villes et pays
  let listeVilles = ["Paris","Londres","Rome","Berlin"];
  let listePays = ["France","Royaume-Uni","Italie","Allemagne"];
  let resultat = [];

  // On commence par extraire chaque nom dans un tableau
  let noms = liste.split(',');
  // Pour chaque nom, on vérifie si c'est une ville ou un pays
  for (let i = 0; i < noms.length; i++) {
    let nom = noms[i];
    // Le nom peut être mal formaté, on retire les espaces en trop
    nom = nom.trim();
    // On le met en minuscules avant comparaison
    nom = nom.toLowerCase();

    // On le compare avec notre liste de villes
    for (let i = 0; i < listeVilles.length; i++) {
      let ville = listeVilles[i];
      // On fait la comparaison en minuscules pour éviter les
      // problèmes de formatage des lettres (majuscules/minuscules)
      if (ville.toLowerCase() === nom) {
        // C'est une ville, on l'ajoute à résultat, ici on utilise
        // ville qui contient le nom de la ville correctement 
        // formatée (c'est notre référence)
        resultat.push("VILLE:" + ville);
      }
    }

    // On le compare avec notre liste de pays
    for (let i = 0; i < listePays.length; i++) {
      let pays = listePays[i];
      // On fait la comparaison en minuscules pour éviter les
      // problèmes de formatage des lettres (majuscules/minuscules)
      if (pays.toLowerCase() === nom) {
        // C'est un pays, on l'ajoute à résultat, ici on utilise
        // pays qui contient le nom du pays correctement 
        // formaté (c'est notre référence)
        resultat.push("PAYS:" + pays);
      }
    }
  }

  // On construit la chaîne finale avec join()
  return resultat.join(',');
}