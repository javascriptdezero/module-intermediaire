/* Rédigez votre code ci-dessous */
// Récupérer une référence sur le template
const elTemplateItem = document.querySelector('#template-item');
const elNouvelItem = document.querySelector('#nouvel-item');
const elListe = document.querySelector('#liste');
const elExporter = document.querySelector('#exporter');

// Détecter la soumission du formulaire
const elForm = document.querySelector('form');

// Récupérer les valeurs par défaut de quantité et unité
const q = elTemplateItem.content.querySelector('.quantite');
const DEFAUT_QUANTITE = Number(q.textContent);
const u = elTemplateItem.content.querySelector('.unite');
const DEFAUT_UNITE = u.selectedOptions[0].value;
const UNITES = [];
for (let i = 0; i < u.options.length; i++) {
  UNITES.push(u.options[i].value);
}

// Liste des items
let listeItems = [];

// Chargement des données depuis localStorage
const CLE_LOCAL_STORAGE = "liste";
const donnees = localStorage.getItem(CLE_LOCAL_STORAGE);
// S'il y a des données à charger
if (donnees !== null) {
  // On les charge
  listeItems = JSON.parse(donnees);
  for (let i = 0; i < listeItems.length; i++) {
    // On créé pour chaque objet un élément <li>
    const elLi = creerElementLi(listeItems[i]);
    // On ajoute l'élément à la liste <ul>
    elListe.append(elLi);
  }
}

// Création d'un unique indicateur
const indicateur = document.createElement('li');
indicateur.classList.add('indicateur');

function sauvegarder() {
  localStorage.setItem(CLE_LOCAL_STORAGE, JSON.stringify(listeItems));
}

function indexDeLiDansListe(element) {
  const li = element.closest('li');
  const enfants = Array.from(elListe.children);
  return enfants.indexOf(li);
}

function remplacerParagrapheParInput(e) {
  const elP = e.target;
  // Transformation de l'élément <p> en <input type="text">
  // Créer un <input>
  const elInput = document.createElement('input');
  
  // Si on a cliqué sur le nom... on fait un type="text"
  if (elP.classList.contains("nom")) {
    elInput.type = "text";
  } else {
    // Sinon on fait type="number" et ajouter les attributs min max
    elInput.type = "number";
    elInput.min = "1";
    elInput.max = "999";
  }
  
  elInput.className = elP.className;

  // Injecter le nom provenant de <p> dans <input>
  const nom = elP.textContent;
  elInput.value = nom;

  // Remplacer l'élément <p> par <input>
  elP.replaceWith(elInput);

  // UX
  elInput.focus();

  // Lorsqu'on quitte l'input, il faut remettre <p> mis à jour
  function gestionBlur(e) {
    // Stocker les nouvelles données dans localStorage
    // Détecter ce qu'on a modifié, le nom ou la quantité ?
    const element = e.target;

    // On cherche l'élément <li> parent
    const index = indexDeLiDansListe(element);

    if (element.classList.contains('nom')) {
      listeItems[index].nom = element.value;
    } else {
      listeItems[index].quantite = Number(element.value);
    }

    // Mettre à jour la propriété adéquate dans la listeItems
    // Sauvegarder la liste
    sauvegarder();

    elP.textContent = elInput.value;
    elInput.replaceWith(elP);
  }

  elInput.addEventListener('blur', gestionBlur);

  // Si on appuie sur ENTREE, il faut également remplacer par <p>
  elInput.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
      elInput.removeEventListener('blur', gestionBlur);
      gestionBlur(e);
    }
  });
}

function creerElementLi(objetItem) {
  // Créer un fragment de document à partir du template
  const fragmentDoc = elTemplateItem.content.cloneNode(true);

  // Injecter cette valeur dans l'élément <li>
  // Sélectionner l'élément nom <p>
  const elLi = fragmentDoc.querySelector('li');
  const elNom = fragmentDoc.querySelector('.nom');
  const elQuantite = fragmentDoc.querySelector('.quantite');
  const elUnite = fragmentDoc.querySelector('.unite');
  const elSupprimer = fragmentDoc.querySelector('.supprimer');
  const elPoignee = fragmentDoc.querySelector('.poignee');

  elSupprimer.addEventListener('click', function(e) {
    console.log("click sur supprimer");
    // Détecter sur quel élément on a cliqué ?
    const index = indexDeLiDansListe(e.currentTarget);
    // Supprimer cet élément de la listeItems
    listeItems.splice(index, 1);
    // Sauvegarde dans localStorage
    sauvegarder();
    
    // Supprimer l'item <li> de la liste <ul> avec l'animation
    const li = elListe.children[index];
    // On ajoute le gestionnaire d'évènement
    li.addEventListener('transitionend', function(e) {
      if (e.propertyName === "height") {
        li.remove();
      }
    });
    // On ajoute la classe qui va générer l'animation
    li.classList.add('suppression');
  });

  elNom.addEventListener('focus', remplacerParagrapheParInput);
  elQuantite.addEventListener('focus', remplacerParagrapheParInput);
  elUnite.addEventListener('change', function(e) {
    const index = indexDeLiDansListe(elUnite);
    listeItems[index].unite = elUnite.value;
    sauvegarder();
  });
  
  elNom.textContent = objetItem.nom;
  elQuantite.textContent = objetItem.quantite;
  elUnite.value = objetItem.unite;

  elPoignee.addEventListener('mousedown', demarrerDeplacement);
  elPoignee.addEventListener('mouseup', function(e) {
    elLi.removeAttribute('draggable');
  });
  elLi.addEventListener('dragstart', dragStart);
  elLi.addEventListener('dragend', dragEnd);

  // Affichage de l'indicateur
  elLi.addEventListener('dragover', dragOver);

  return fragmentDoc;
}

function dragOver(e) {
  const li = e.currentTarget;
  li.before(indicateur);
}

function demarrerDeplacement(e) {
  const poignee = e.currentTarget;
  const li = poignee.closest('li');
  li.setAttribute('draggable', 'true');
}

function dragStart(e) {
  const li = e.currentTarget;
  li.classList.add('drag-start');
}

function dragEnd(e) {
  console.log("dragEnd");
  const li = e.currentTarget;
  li.removeAttribute('draggable');
  li.classList.remove('drag-start');
}

elForm.addEventListener('submit', function(e) {
  // On empêche le rechargement de la page
  e.preventDefault();
  
  // Récupérer la valeur de l'input nouvel item
  let nomItem = elNouvelItem.value;

  // Supprimer les espaces en trop avant et après le nom
  nomItem = nomItem.trim();

  // Supprimer les espaces d'affilés en trop
  nomItem = nomItem.replace(/ {2,}/g, " ");

  const objetItem = extraireDonnees(nomItem);

  // Sauvegarder les données dans localStorage
  listeItems.push(objetItem);
  sauvegarder();

  const elLi = creerElementLi(objetItem);

  // Ajouter l'élément <li> dans la liste <ul>
  liste.append(elLi);

  // Vider le champ nouvel item
  elNouvelItem.value = "";

  // Mettre le focus immédiatement sur le champ nouvel item
  elNouvelItem.focus();
  
});

// Insertion intelligente
function extraireDonnees(nomItem) {
  // <nom>
  // <quantité> <nom>
  // <quantité> <unité> <nom>
  // Est-ce que le 1er mot est un nombre ?
  let mots = nomItem.split(' ');
  let premierMot = mots[0];
  let deuxiemeMot = mots[1];

  const objetItem = {
    nom: nomItem,
    quantite: DEFAUT_QUANTITE,
    unite: DEFAUT_UNITE,
  }

  if (Number.isInteger(Number(premierMot))) {
    // Si c'est une quantité, il faut l'extraire
    // <quantité> <nom>
    // <quantité> <unité> <nom>
    objetItem.quantite = Number(premierMot);

    // Si le 2e mot est une unité, l'extraire
    if (UNITES.includes(deuxiemeMot)) {
      objetItem.unite = deuxiemeMot;
      objetItem.nom = mots.slice(2).join(' ');
    } else {
      // Sinon c'est que le nom commence à partir du 2e mot
      objetItem.nom = mots.slice(1).join(' ');
    }
  }

  // Mettre la 1ère lettre en majuscule
  // pommes => P + ommes
  objetItem.nom = objetItem.nom[0].toUpperCase() + objetItem.nom.slice(1);

  return objetItem;
}

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

elExporter.addEventListener('click', function(e) {
  console.log("Exporter");
  console.log(listeItems);
  // - <nom> (<quantite> <unite>)%0D%0A
  let corps = "";
  for (let i = 0; i < listeItems.length; i++) {
    const item = listeItems[i];
    const chaine = `- ${item.nom} (${item.quantite} ${item.unite})%0D%0A`;
    corps += chaine;
  }

  console.log(corps);

  // Construire l'URL de type mailto
  let url = "mailto:jeremy@javascriptdezero.com";
  url += "?subject=Liste de courses";
  url += "&body=" + corps;

  window.location = url;
});