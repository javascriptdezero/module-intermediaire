/* Le contenu a été supprimé car vous devrez rédiger le code */
const templateItem = document.querySelector('#template-item');
const liste = document.querySelector('#liste');
const form = document.querySelector('form');
const nomNouvelItem = document.querySelector('#nom-nouvel-item');
const exporter = document.querySelector('#exporter');

let listeItems = [];
let reference, remplacement;
let sourceDragAndDrop;

const UNITES_POSSIBLES = [];
const unites = templateItem.content.querySelector('.unite');
for (let i = 0; i < unites.children.length; i++) {
  const option = unites.children.item(i);
  UNITES_POSSIBLES.push(option.value);
}

// Chargement des données si elles existent
const donneesChargees = localStorage.getItem("liste");
if (donneesChargees !== null) {
  listeItems = JSON.parse(donneesChargees);
  for (let i = 0; i < listeItems.length; i++) {
    // Pour chaque item stocké, créer un nouvel <li>
    const li = creerElementLi(listeItems[i]);
    // Ajouter l'élément <li> à la liste <ul>
    liste.append(li);
  }
}

function log(...args) {
  console.log(Date.now(), ...args);
}

nomNouvelItem.addEventListener('input', function (e) {
  if (!/[A-Za-z]{2}/.test(nomNouvelItem.value)) {
    nomNouvelItem.setCustomValidity("erreur");
  } else {
    // On indique que le champ est valide
    nomNouvelItem.setCustomValidity('');
  }
  // On appelle la vérification via l'attribut HTML pattern
  nomNouvelItem.checkValidity();
});

nomNouvelItem.addEventListener('invalid', function() {
  if (nomNouvelItem.value === '') {
    nomNouvelItem.setCustomValidity("Vous devez indiquer les informations de l'item, exemple : 250 g chocolat");
  } else if (!/[A-Za-z]{2}/.test(nomNouvelItem.value)) {
    nomNouvelItem.setCustomValidity("Le nom de l'item doit faire 2 lettres minimum");
  } else {
    nomNouvelItem.setCustomValidity("Les caractères spéciaux, les accents et autres lettres spécifiques ne sont pas autorisés");
  }
});

form.addEventListener('submit', function (e) {
  // On évite de recharger la page web
  e.preventDefault();

  let nomItem = nomNouvelItem.value;

  // On retire les espaces en trop au début et à la fin
  nomItem = nomItem.trim();
  // On remplace plusieurs espaces d'affilés par un seul
  nomItem = nomItem.replace(/ {2,}/, " ");

  // On extrait les données intelligemment
  const objetItem = extraireDonnees(nomItem);

  // Sauvegarde des données
  listeItems.push(objetItem);
  sauvegarder();

  // Création de l'élément <li>
  const nouvelItem = creerElementLi(objetItem);

  liste.append(nouvelItem);

  // UX
  nomNouvelItem.value = "";
  nomNouvelItem.focus();
});

// Création d'un nouvel élément li pour afficher le nouvel item
function creerElementLi(objetItem) {
  const nouvelItem = templateItem.content.cloneNode(true);

  const nom = nouvelItem.querySelector('.nom');
  const quantite = nouvelItem.querySelector('.quantite');
  const unite = nouvelItem.querySelector('.unite');
  const poubelle = nouvelItem.querySelector('.supprimer');

  // Transformation des paragraphes <p> en <input>
  nom.addEventListener('focus', remplacerParagrapheParInput);
  quantite.addEventListener('focus', remplacerParagrapheParInput);

  // Gestion de la suppression
  poubelle.addEventListener('click', supprimerItem);

  nom.textContent = objetItem.nom;
  quantite.textContent = objetItem.quantite;
  unite.value = objetItem.unite;

  return nouvelItem;
}


// Drap and drop
/*
poignee.addEventListener("mousedown", demarrerDeplacement);

function supprimerSeparateur() {
  let separateur = liste.querySelector('.separateur');
  if (separateur) separateur.remove();
}

function dragOver(event) {
  let separateur = liste.querySelector('.separateur');
  // On créé le séparateur une fois et on le réutilise
  if (separateur === null) {
    separateur = document.createElement('li');
    // Le séparateur peut être une drop zone
    separateur.addEventListener('drop', drop);
    separateur.addEventListener('dragover', function (event) {
      event.preventDefault();
    });
    separateur.classList.add('separateur');
  }

  if (event.offsetY <= event.currentTarget.clientHeight / 2) {
    if (event.currentTarget.previousElementSibling !== separateur) {
      event.currentTarget.before(separateur);
    }
  } else {
    if (event.currentTarget.nextElementSibling !== separateur) {
      event.currentTarget.after(separateur);
    }
  }

  // Pour pouvoir avoir la drop zone !
  event.preventDefault();
}

function dragStart(event) {
  liste.classList.add('drag-en-cours');
  event.currentTarget.removeEventListener('dragover', dragOver);
  event.currentTarget.classList.add('drag-start');

  event.dataTransfer.setData("text/plain", indexItemDansListe(event.currentTarget));
}

function dragEnd(event) {
  log("dragend");

  liste.classList.remove('drag-en-cours');
  event.currentTarget.addEventListener('dragover', dragOver);

  event.currentTarget.removeAttribute("draggable");
  event.currentTarget.classList.remove("drag-start");

  supprimerSeparateur();
}

function drop(event) {
  log("drop");
  event.preventDefault();

  const separateur = liste.querySelector('.separateur');

  const indexOriginal = Number(event.dataTransfer.getData('text/plain'));

  const depuisIndex = indexItemDansListe(sourceDragAndDrop);
  const versIndex = indexItemDansListe(separateur);

  console.log("src: ", depuisIndex, "dst: ", versIndex, "diff:", depuisIndex - versIndex);

  // Ne te remplace pas toi-même
  if (Math.abs(depuisIndex - versIndex) !== 1) {
    log("il faut deplacer");

    const noeudSource = listeItems.splice(indexOriginal, 1)[0];
    listeItems.splice(versIndex, 0, noeudSource);

    sauvegarder();

    // On va déplacer vers le bas l'item donc il faut remonter les autres entre
    const aDeplacer = [];

    // Si on doit déplacer l'item vers le bas
    let deplacementVersLeBas = (depuisIndex < versIndex);
    if (deplacementVersLeBas) {
      for (let i = depuisIndex + 1; i < versIndex; i++) {
        aDeplacer.push(liste.children[i]);
      }
    } else {
      for (let i = versIndex + 1; i < depuisIndex; i++) {
        aDeplacer.push(liste.children[i]);
      }
    }

    let deplacementAutresItems = deplacementVersLeBas ? 'vers-le-haut' : 'vers-le-bas';

    aDeplacer.forEach(function (li) {
      li.classList.add(deplacementAutresItems)
    });

    sourceDragAndDrop.classList.add('deplacement');
    const nombreItemsEntre = Math.abs(depuisIndex - versIndex) - 1;

    sourceDragAndDrop.addEventListener('transitionend', function () {
      log("remplacement effectué");
      aDeplacer.forEach(function (li) {
        li.classList.remove(deplacementAutresItems)
      });
      separateur.replaceWith(sourceDragAndDrop);
    });

    sourceDragAndDrop.style.transform =
      `translateY(calc(${deplacementVersLeBas ? 1 : -1} * (${nombreItemsEntre * 100}% + ${nombreItemsEntre * 16}px)))`;
  } else {
    log("identique");
  }
}

li.addEventListener('dragstart', dragStart);
li.addEventListener('dragover', dragOver);
li.addEventListener('dragend', dragEnd);
li.addEventListener('drop', drop);

function demarrerDeplacement(e) {
sourceDragAndDrop = e.target.closest('li');
sourceDragAndDrop.setAttribute("draggable", "true");
}
*/


function remplacerParagrapheParInput(e) {
  reference = e.target;

  const input = document.createElement('input');
  input.type = reference.classList.contains("nom") ? "text" : "number";
  if (reference.classList.contains("quantite")) {
    input.min = 0;
    input.max = 999;
  }

  input.className = reference.className;
  input.value = reference.textContent;

  remplacement = input;

  reference.replaceWith(input);

  input.focus();

  const remplacerValeur = function () {
    reference.textContent = remplacement.value;
    remplacement.replaceWith(reference);
  };

  // Quand on quitte le champ
  input.addEventListener('blur', function () {
    remplacerValeur();
  });
  // Quand on appuie sur ENTREE
  input.addEventListener('keydown', function (e) {
    if (e.key === "Enter") input.blur();
  });
}

function supprimerItem(e) {
  // Quelle est la position de l'item <li> sur lequel j'ai cliqué ?
  const li = e.currentTarget.closest('li');
  const enfants = Array.from(liste.children);
  const indexLi = enfants.indexOf(li);
  // Supprimer l'item à cette position de la listeItems
  listeItems.splice(indexLi, 1);
  // Sauvegarder les données dans localStorage
  sauvegarder();

  li.addEventListener('transitionend', function (e) {
    console.log(e);
    if (e.propertyName === "height") {
      // Supprimer l'élément <li> de la liste
      li.remove();
    }
  });

  li.classList.add('suppression');
}

function sauvegarder() {
  localStorage.setItem("liste", JSON.stringify(listeItems));
}


/* Insertion intelligente */
function extraireDonnees(nomItem) {
  const objetItem = {
    quantite: 1,
    unite: "u.",
    nom: "",
  };

  const donnees = nomItem.split(' ');
  if (donnees.length >= 2) {
    // "pommes granny"
    // "250 g chocolat"
    // "4 kg riz complet"
    // "6 L lait"
    // "12 pommes"
    // "12 pommes granny"

    if (!Number.isNaN(Number(donnees[0]))) {
      // Si le premier mot est un nombre
      objetItem.quantite = Number(donnees[0]);

      if (UNITES_POSSIBLES.includes(donnees[1])) {
        // Si le 2e mot est l'unité...
        objetItem.unite = donnees[1];
        objetItem.nom = donnees.slice(2).join(' ');
      } else {
        objetItem.nom = donnees.slice(1).join(' ');
      }
    } else {
      // "pommes granny"
      objetItem.nom = nomItem;
    }

  } else {
    // "pommes"
    objetItem.nom = nomItem
  }

  // UX
  objetItem.nom = objetItem.nom[0].toUpperCase() + objetItem.nom.slice(1);

  return objetItem;
}

/* Exporter les données */
exporter.addEventListener('click', function(e) {
  let exportation = "";
  for (let i = 0; i < listeItems.length; i++) {
    const item = listeItems[i];
    exportation += `- ${item.nom} (${item.quantite}${item.unite !== "u." ? ` ${item.unite}` : ''})%0D%0A`;
  }
  const url = `mailto:jeremy@javascriptdezero.com?subject=Liste de courses&body=${exportation}`;
  window.location = url;
});