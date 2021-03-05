/* Rédigez votre code ci-dessous */
// Récupérer une référence sur le template
const elTemplateItem = document.querySelector('#template-item');
const elNouvelItem = document.querySelector('#nouvel-item');
const elListe = document.querySelector('#liste');

// Détecter la soumission du formulaire
const elForm = document.querySelector('form');

// Récupérer les valeurs par défaut de quantité et unité
const q = elTemplateItem.content.querySelector('.quantite');
const DEFAUT_QUANTITE = Number(q.textContent);
const u = elTemplateItem.content.querySelector('.unite');
const DEFAUT_UNITE = u.selectedOptions[0].value;

elForm.addEventListener('submit', function(e) {
  // On empêche le rechargement de la page
  e.preventDefault();
  
  // Créer un élément <li> à partir du template
  const elLi = elTemplateItem.content.cloneNode(true);

  // Récupérer la valeur de l'input nouvel item
  let nomItem = elNouvelItem.value;

  // Supprimer les espaces en trop avant et après le nom
  nomItem = nomItem.trim();

  // Supprimer les espaces d'affilés en trop
  nomItem = nomItem.replace(/ {2,}/g, " ");

  // Insertion intelligente
  // <nom>
  // <quantité> <nom>
  // <quantité> <unité> <nom>
  // Est-ce que le 1er mot est un nombre ?
  let mots = nomItem.split(' ');
  let premierMot = mots[0];
  let deuxiemeMot = mots[1];
  let quantite = DEFAUT_QUANTITE;
  let unite = DEFAUT_UNITE;

  if (Number.isInteger(Number(premierMot))) {
    // Si c'est une quantité, il faut l'extraire
    // <quantité> <nom>
    // <quantité> <unité> <nom>
    quantite = Number(premierMot);

    // Si le 2e mot est une unité, l'extraire
    const UNITES = ['u.', 'kg', 'g', 'L'];
    if (UNITES.includes(deuxiemeMot)) {
      unite = deuxiemeMot;
      nomItem = mots.slice(2).join(' ');
    } else {
      // Sinon c'est que le nom commence à partir du 2e mot
      nomItem = mots.slice(1).join(' ');
    }
  }

  // Mettre la 1ère lettre en majuscule
  // pommes => P + ommes
  nomItem = nomItem[0].toUpperCase() + nomItem.slice(1);

  // Injecter cette valeur dans l'élément <li>
  // Sélectionner l'élément nom <p>
  const elNom = elLi.querySelector('.nom');
  const elQuantite = elLi.querySelector('.quantite');
  const elUnite = elLi.querySelector('.unite');
  
  elNom.textContent = nomItem;
  elQuantite.textContent = quantite;
  elUnite.value = unite;

  // Ajouter l'élément <li> dans la liste <ul>
  liste.append(elLi);

  // Vider le champ nouvel item
  elNouvelItem.value = "";

  // Mettre le focus immédiatement sur le champ nouvel item
  elNouvelItem.focus();
  
});

elNouvelItem.addEventListener('input', function(e) {
  elNouvelItem.setCustomValidity('');
  elNouvelItem.checkValidity();
});

elNouvelItem.addEventListener('invalid', function(e) {
  const nom = elNouvelItem.value;

  if (nom.length === 0) {
    elNouvelItem.setCustomValidity("Vous devez indiquer les informations de l'item, exemple : 250 g chocolat");
  } else if (!/[A-Za-z]{2}/.test(nom)) {
    // Si nom ne contient pas 2 lettres côte à côte
    elNouvelItem.setCustomValidity("Le nom de l'item doit faire 2 lettres minimum");
  } else {
    elNouvelItem.setCustomValidity("Les caractères spéciaux, les accents et autres lettres spécifiques ne sont pas autorisés");
  }
});