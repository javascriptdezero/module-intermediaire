/* Pourquoi apprendre la POO (Programmation Orientée Objet) ? */

/* Définition : paradigme de programmation */

// Exemple de programmation impérative
// const PRIX_CLAVIER = 30;
// const REDUCTION_SUR_CLAVIER_EN_POURCENTS = 20;

// const PRIX_SOURIS = 15;
// const REDUCTION_SUR_SOURIS_EN_POURCENTS = 10;

// let prixAvecReductions = 0;
// let prixSansReductions = 0;

// prixSansReductions += PRIX_CLAVIER;
// prixAvecReductions += PRIX_CLAVIER - (PRIX_CLAVIER * REDUCTION_SUR_CLAVIER_EN_POURCENTS / 100);
// prixSansReductions += PRIX_SOURIS;
// prixAvecReductions += PRIX_SOURIS - (PRIX_SOURIS * REDUCTION_SUR_SOURIS_EN_POURCENTS / 100);

// console.log(`Total : ${prixSansReductions} €, avec réductions : ${prixAvecReductions} €`);

// Exemple de programmation orientée objet
const clavier = {
  prix: 30,
  reductionEnPourcents: 20,
};
const souris = {
  prix: 15,
  reductionEnPourcents: 10,
};
const panier = {
  prixAvecReductions: 0,
  prixSansReductions: 0,
  ajouterProduit: function(produit) {
    this.prixSansReductions += produit.prix;
    this.prixAvecReductions += produit.prix - (produit.prix * produit.reductionEnPourcents / 100);
  },
  afficherTotal: function() {
    console.log(`Total : ${this.prixSansReductions} €, avec réductions : ${this.prixAvecReductions} €`);
  },
};

panier.ajouterProduit(clavier);
panier.ajouterProduit(souris);
panier.afficherTotal();