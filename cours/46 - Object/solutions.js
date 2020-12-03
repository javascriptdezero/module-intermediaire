/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
function isNaN0(valeur) {
  return Number.isNaN(valeur);
}

// Exercice 1
function isFinite0(valeur) {
  return Number.isFinite(valeur);
}

// Exercice 2
function isInteger0(valeur) {
  return Number.isInteger(valeur);
}

// Exercice 3
function isSafeInteger0(valeur) {
  return Number.isSafeInteger(valeur);
}

// Exercice 4
function parseFloat0(chaine) {
  return Number.parseFloat(chaine);
}

// Exercice 5
function parseInt0(chaine) {
  return Number.parseInt(chaine);
}

// Exercice 6
function parseInt1(binaire) {
  return Number.parseInt(binaire, 2);
}

// Exercice 7
function parseInt2(hexa) {
  return Number.parseInt(hexa, 16);
}

// Exercice 8
function toFixed0(valeur) {
  return valeur.toFixed(3);
}

// Exercice 9
function toString0(valeur) {
  return valeur.toString();
} 

// Exercice 10
function toString1(nombre) {
  return nombre.toString(2);
}

// Exercice 11
function toString2(nombre) {
  return nombre.toString(16);
}

/********************/
/* Exercices finaux */
/********************/

// Exercice 0 — Décodeur
function decodeur(secret) {
  let message = "";

  // On incrémente de 8 unités pour découper par bloc de 8 chiffres
  for (let i = 0; i < secret.length; i += 8) {
    // On découpe 8 caractères
    let binaire = secret.slice(i, i + 8);
    // On convertit en base 10 le binaire qui est en base 2
    let nombre = Number.parseInt(binaire, 2);
    // On ajoute au résultat la lettre correspondante au nombre
    message += String.fromCharCode(nombre);
  }
  return message;
}

// Exercice 1 — Encodeur
function encodeur(message) {
  let secret = "";
  // Pour chaque caractère du message...
  for (let i = 0; i < message.length; i++) {
    // On récupère le nombre correspondant à chaque caractère
    let nombre = message.charCodeAt(i);
    // On le convertit en binaire
    let binaire = nombre.toString(2);
    // On ajoute les 0 devant pour faire 8 chiffres et on ajoute
    // au résultat avec += (concaténation)
    secret += binaire.padStart(8, '0');
  }
  return secret;
}

// Exercice 2 — Panier de fruits
function totalPanier(commandes) {
  // On retiendra l'ordre des fruits dans ce tableau, on y stockera
  // chaque nom de fruit (une seule fois) rencontré dans les commandes
  let ordreDesFruits = [];
  // Chaque somme de fruits sera stockée dans un objet. Le nom
  // du fruit sera le nom de la propriété dont la valeur sera la
  // quantité totale des commandes de ce fruit.
  // Par exemple : sommeCommandes = { "pommes": 20, "cerises": 12 }
  let sommeCommandes = {};
  
  // On découpe chaque énumération de fruit des commandes...
  let commandeParFruit = commandes.split(',');

  // Pour chaque commande de fruit...
  for (let i = 0; i < commandeParFruit.length; i++) {
    // On extrait la quantité et le nom du fruit
    // commandeParFruit[i] vaut par exemple "45 pommes"
    let quantiteEtNom = commandeParFruit[i].split(' ');
    // quantiteEtNom vaut ["45", "pommes"]
    let quantite = quantiteEtNom[0];
    let nom = quantiteEtNom[1];

    // Etape 1 : on sauvegarde ce nouveau fruit dans ordreDesFruits.
    // Si le nom de ce fruit n'est pas contenu dans notre tableau
    // ordreDesFruits, alors on l'ajoute
    if (!ordreDesFruits.includes(nom)) {
      ordreDesFruits.push(nom);
    }

    // Etape 2 : on ajoute la quantité de cette commande à la
    // quantité de fruits déjà connue. Cas particulier : si c'est
    // la 1ère fois qu'on voit ce fruit, il faut l'ajouter à notre
    // objet sommeCommandes.
    
    // On vérifie si on a déjà vu ce fruit. Quand on essaye
    // d'accéder à une propriété qui n'existe pas sur un objet, ça
    // renvoie undefined.
    // Si on n'a jamais enregistré ce fruit dans sommeCommandes...
    if (sommeCommandes[nom] === undefined) {
      // ... on l'ajoute à l'objet sommeCommandes avec sa quantité
      // initiale. Attention quantite est une chaîne de caractères,
      // il faut la convertir en nombre
      sommeCommandes[nom] = Number(quantite);
    } else {
      // sinon, si on a déjà vu ce fruit, on ajoute la nouvelle
      // quantité à la somme déjà existante avec l'opérateur '+='.
      // Attention quantite est une chaîne de caractères, il faut
      // la convertir en nombre pour faire l'addition
      sommeCommandes[nom] += Number(quantite);
    }
  }

  // Etape 3, on affiche dans l'ordre toutes les sommes, pour ça
  // on utilise notre ordreDesFruits pour récupérer chaque nom
  // de fruit à utiliser sur sommeCommandes.
  let resultat = [];

  // Pour chaque fruit dans l'ordre...
  for (let i = 0; i < ordreDesFruits.length; i++) {
    let nomDuFruit = ordreDesFruits[i];
    // On ne doit afficher que les fruits dont la quantité est > 0
    if (sommeCommandes[nomDuFruit] > 0) {
      // On ajoute au tableau résultat par exemple "45 pommes"
      resultat.push(`${sommeCommandes[nomDuFruit]} ${nomDuFruit}`);
    }
  }

  // Etape 4 : on retourne la chaîne de caractères finale en CSV
  return resultat.join(',');
}
