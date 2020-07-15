/* Les évènements */

/* Qu'est-ce qu'un évènement ? */

/* Exemple : modifier du texte après un clic */

// Sélection des éléments
const texte = document.querySelector('#texte');

let nombreDeClics = 0;
function modifierTexte() {
  nombreDeClics++;
  texte.textContent = `Bouton cliqué ${nombreDeClics} fois`;
}

/* Attribut HTML onclick */

/* Propriété onclick (GlobalEventHandlers) */
// Documentation : HTMLElement
// const bouton = document.querySelector('#bouton');
// bouton.onclick = modifierTexte;

/* addEventListener (recommandé) */
// Documentation : EventTarget
// bouton.addEventListener('click', modifierTexte);

/* Quelle méthode choisir ? */
// addEventListener : plusieurs callbacks
// bouton.addEventListener('click', function() {
//   console.log('première fonction');
// });
// bouton.addEventListener('click', function() {
//   console.log('deuxième fonction');
// });

/* Supprimer un évènement */
// bouton.addEventListener('click', function() {
//   console.log("Un autre évènement");
// });

/* Exécuter un gestionnaire d'évènement une seule fois */
// bouton.addEventListener('click', function() {
//   console.log("Je n'apparais qu'une seule fois");
// }, { once: true });

/* Le paramètre évènement du gestionnaire d'évènement */
// bouton.addEventListener('click', function(evenement) {
//   console.dir(evenement);
// });