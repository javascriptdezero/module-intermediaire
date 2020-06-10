/* Comment traverser les éléments du DOM */

/* Récupération de la liste (anciennes propriétés) */
const liste = document.querySelector('#liste-anciennes-proprietes');

/* Sélection des noeuds enfants */
// const enfants = liste.childNodes;
// console.log("Enfants de la liste :", enfants);

/* Sélection du 1er noeud enfant */
// const premierEnfant = liste.firstChild;
// premierEnfant.classList.add('entourer');
// console.dir(premierEnfant);

/* Sélection du dernier noeud enfant */
// const dernierEnfant = liste.lastChild;
// dernierEnfant.classList.add('entourer');

/* Sélection du noeud frère précédent */
// const enfant3 = liste.querySelector('li:nth-of-type(3)');
// enfant3.classList.add('selection');
// const noeudPrecedent = enfant3.previousSibling;
// noeudPrecedent.classList.add('entourer');
// console.dir(noeudPrecedent);
/* On peut chaîner les propriétés */
// noeudPrecedent.previousSibling.classList.add('entourer');

/* Sélection du noeud frère suivant */
// const noeudSuivant = enfant3.nextSibling;
// noeudSuivant.classList.add('entourer');

/* Sélection du noeud parent */
// const noeudParent = enfant3.parentNode;
// noeudParent.classList.add('entourer');

/* Récupération de la liste (nouvelles propriétés) */
// const liste = document.querySelector('#liste-nouvelles-proprietes');

/* Sélection des éléments enfants */
// const enfants = liste.children;
// console.log("Enfants de la liste :", enfants);

/* Sélection du 1er élément enfant */
// const premierEnfant = liste.firstElementChild;
// premierEnfant.classList.add('entourer');

/* Sélection du dernier élément enfant */
// const dernierEnfant = liste.lastElementChild;
// dernierEnfant.classList.add('entourer');

/* Sélection de l'élément frère précédent */
// const enfant3 = liste.querySelector('li:nth-of-type(3)');
// enfant3.classList.add('selection');
// const elementPrecedent = enfant3.previousElementSibling
// elementPrecedent.classList.add('entourer');
/* On peut chaîner les propriétés */
// elementPrecedent.previousElementSibling.classList.add('entourer');

/* Sélection de l'élément frère suivant */
// const elementSuivant = enfant3.nextElementSibling;
// elementSuivant.classList.add('entourer');

/* Quelles propriétés utiliser ? */

/* 
Note importante dans la documentation

Les nouvelles propriétés sont accessibles depuis le type Element mais définies dans les interfaces NonDocumentTypeChildNode, ParentNode et ChildNode.

Type Element : https://developer.mozilla.org/fr/docs/Web/API/Element
*/