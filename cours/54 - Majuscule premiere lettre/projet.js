/* Rédigez votre code ci-dessous */
// Récupérer une référence sur le template
const elTemplateItem = document.querySelector('#template-item');
const elNouvelItem = document.querySelector('#nouvel-item');
const elListe = document.querySelector('#liste');

// Détecter la soumission du formulaire
const elForm = document.querySelector('form');

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
  // Tant qu'il y a 2 espaces d'affilés
  // pommes granny
  nomItem = nomItem.replace(/ {2,}/g, " ");
  // Remplacer les 2 espaces par 1 seul espace

  // Injecter cette valeur dans l'élément <li>
  // Sélectionner l'élément nom <p>
  const elNom = elLi.querySelector('.nom');
  elNom.textContent = nomItem;

  // Ajouter l'élément <li> dans la liste <ul>
  liste.append(elLi);

  // Vider le champ nouvel item
  elNouvelItem.value = "";

  // Mettre le focus immédiatement sur le champ nouvel item
  elNouvelItem.focus();
  
});