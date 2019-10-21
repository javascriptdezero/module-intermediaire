/* Les méthodes : des fonctions dans des objets */

// const login = {
//   twitter: "@JeremyMouzin",
//   nom: "Jérémy Mouzin",
//   afficher: function() {
//     console.log("Le login twitter @JeremyMouzin appartient à Jérémy Mouzin.");
//   },
// };

// login.afficher();

/* Utiliser les propriétés d'un objet dans une méthode */

const login = {
  twitter: "@JeremyMouzin",
  nom: "Jérémy Mouzin",
  afficher: function() {
    console.log(`Le login twitter ${this.twitter} appartient à ${this.nom}.`);
  },
};

login.afficher();
login.nom = "Tom Redocemia";
login.afficher();


/* Vous avez déjà utilisé une méthode ! */

// console.log("log est une méthode de l'objet console !");
// console.log(console);
// console.log(typeof console);

/* Documentation console */

// console.error("Ceci est une erreur");
