/* Déclarer des variables : const, let et var */

/* On a déjà vu let (ES6) */
// let nombre = 42;

// Déclarer avec let sans affectation ?
// let nombre;

// Affectation d'une nouvelle valeur avec '=' ?
// nombre = 1337;

// Redéclaration de la variable ?
// let nombre = 9000;

// console.log(nombre);

/* Déclarer une constante avec const */
// const nombre = 42;

// Déclarer avec const sans affectation ?
// const nombre;

// Affectation d'une nouvelle valeur avec '=' ?
// nombre = 1337;

// Redéclaration de la variable ?
// const nombre = 9000;

// console.log(nombre);

/* Quel intérêt ? */
// const protocole = "http";
// const protocoleSecurise = "https";
// const adresse = "www.javascriptdezero.com";
// // Case à cocher par exemple pour demander la connexion sécurisée
// let connexionSecurisee = false;
// console.log(`${connexionSecurisee ? protocoleSecurise : protocole}://${adresse}`);

/* Choix du nom des constantes (majuscules / minuscules) */
// const PORT_HTTP = 80;
// const PORT_HTTPS = 443;
// const TVA = 20 / 100;

// // Ajout de plusieurs produits dans le panier
// let prixPanierHT = 100; 

// const taxes = prixPanierHT * TVA;
// const prixTTC = prixPanierHT + taxes;
// console.log(prixTTC);

/* Déclarer avec var (< ES6) */
// var nombre = 42;

// Déclarer avec var sans affectation ?
// var nombre = 42;

// Affectation d'une nouvelle valeur avec '=' ?
// nombre = 1337;

// Redéclaration de la variable ?
// var nombre = 9000;

// console.log(nombre);

/* Et si on utilise ni const, ni let et ni var ?! */
// nombre = 42;

// console.log(nombre);

/* Quel mot-clé choisir ? */
