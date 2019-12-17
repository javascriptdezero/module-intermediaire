/* Comment sélectionner les éléments du DOM ? */

/* Anciennes méthodes */
console.log(document.getElementById('deuxieme-paragraphe'));
console.log(document.getElementsByName('bouton'));
console.log(document.getElementsByClassName('paragraphe'));
console.log(document.getElementsByTagName('p'));

/* Méthodes modernes via les sélecteurs CSS */
// console.log(document.querySelector('#deuxieme-paragraphe'));
// console.log(document.querySelectorAll('[name="bouton"]'));
// console.log(document.querySelectorAll('.paragraphe'));
// console.log(document.querySelectorAll('p'));

/* Faire une recherche dans un sous-ensemble du DOM */
// const liste1 = document.getElementById('liste-1');
// console.log(liste1.getElementsByTagName('li'));
// console.log(liste1.getElementsByClassName('item'));
/* Façon moderne */
// const liste1 = document.querySelector('#liste-1');
// console.log(liste1.querySelectorAll('li'));
// console.log(liste1.querySelectorAll('.item'));

/* Requête de sélection complexe */
/* Avant il fallait faire comme ça... */
// const liste1 = document.getElementById('liste-1');
// const itemsListe1 = liste1.getElementsByTagName('li');
// const deuxiemeItemListe1 = itemsListe1.item(1);
// console.log("Item 2 de la liste 1 (ancienne méthode): ", deuxiemeItemListe1);
/* Maintenant... c'est tout de même plus rapide ! */
// const item2Liste1 = document.querySelector('#liste-1 li:nth-child(2)');
// console.log("Item 2 de la liste 1 (nouvelle méthode): ", item2Liste1);

/* Quelle méthode choisir ? */

/* Astuce pour s'entraîner à la sélection dans Chrome */
