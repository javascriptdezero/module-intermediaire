/* Déplacement et suppression d'éléments du DOM */

/* Récupération de la liste */
const liste = document.querySelector('#liste');

/* Suppression par affectation de contenu */
// liste.innerHTML = ""; // On supprime tous les enfants
// liste.outerHTML = ""; // On supprimer tout !

/* Anciennes méthodes */
// const anciennesMethodes = liste.querySelector('li:nth-of-type(2) ul');
// const removeChildItem = anciennesMethodes.querySelector('li:nth-of-type(1)');
// anciennesMethodes.removeChild(removeChildItem);
/* Remplacement d'un noeud */
// const nouvelItem = document.createElement('li');
// nouvelItem.textContent = "Je remplace le noeud removeChild()";
// anciennesMethodes.replaceChild(nouvelItem, removeChildItem);

/* Nouvelles méthodes */
// const removeItem = liste.querySelector('li:nth-of-type(3) ul li:nth-of-type(1)');
// removeItem.remove();
/* Remplacement d'un noeud */
// const nouvelItem = document.createElement('li');
// nouvelItem.textContent = "Je remplace le noeud remove()";
// removeItem.replaceWith(nouvelItem);

/* Comment déplacer un noeud ? */
// const anciennesMethodes = liste.querySelector('li:nth-of-type(2)');
// anciennesMethodes.classList.add('surligner');
// liste.prepend(anciennesMethodes);
// liste.insertAdjacentElement('beforeend', anciennesMethodes);

/* Comment déplacer une copie d'un noeud ? */
// const copie = anciennesMethodes.cloneNode(true);
// liste.append(copie);