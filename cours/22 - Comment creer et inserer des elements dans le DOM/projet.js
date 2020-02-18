/* Création et insertion d'éléments dans le DOM */

/* Récupération de la liste */
const liste = document.querySelector('#liste');

/* Création d'éléments à partir de code HTML */
// liste.innerHTML = "<li>Item ajouté via <strong>innerHTML</strong></li>";
// liste.textContent = "<li>Item ajouté via <strong>textContent</strong></li>";
// liste.innerText = "<li>Item ajouté via <strong>innerText</strong></li>";
// liste.outerHTML = "<p><strong>outerHTML</strong> remplace l'élément complet !</p>";

// Note : on peut aussi les utiliser en lecture
// console.log("innerHTML : ", liste.innerHTML);
// console.log("outerHTML : ", liste.outerHTML);

/* Utiliser les template strings avec innerHTML / outerHTML */
// const personne = { prenom: "Jérémy", classe: "formateur" };
// liste.innerHTML = `<li>Mon formateur s'appelle <span class="${personne.classe}">${personne.prenom}</span></li>`;

/* Pur création d'un noeud à partir de zéro */
// const li = document.createElement("li");
// li.textContent = "Nouvel élément li";
// liste.appendChild(li);
// const li2 = document.createElement("li");
// li2.textContent = "Nouvel élément li2";
// liste.append(li, li2);

/* Clonage */
// const dernierItem = liste.querySelector('li:last-of-type');
// const nouvelItem = dernierItem.cloneNode(true);
// liste.append(nouvelItem);

/* Insertion d'éléments à une position donnée */
// liste.insertAdjacentHTML('beforebegin', "<p>Élément ajouté via <strong>beforebegin</strong> (🇫🇷 avant le début)</p>");
// liste.insertAdjacentHTML('afterbegin', "<li>Élément ajouté via <strong>afterbegin</strong> (🇫🇷 après le début)</li>");
// liste.insertAdjacentHTML('beforeend', "<li>Élément ajouté via <strong>beforeend</strong> (🇫🇷 avant la fin)</li>");
// liste.insertAdjacentHTML('afterend', "<p>Élément ajouté via <strong>afterend</strong> (🇫🇷 après la fin)</p>");

// Depuis un élément déjà créé
// const li = document.createElement('li');
// li.innerHTML = "Item créé grâce à <strong>createElement()</strong>";
// liste.insertAdjacentElement('afterbegin', li);

// Créer et insérer un noeud texte
// liste.insertAdjacentText('afterbegin', 'Nouveau noeud texte');

/* Très vieille méthode */
// const nouvelItem = document.createElement('li');
// nouvelItem.innerHTML = "Item inséré grâce à <strong>insertBefore()</strong>";
// const itemDeReference = liste.querySelector('li:nth-of-type(3)');
// liste.insertBefore(nouvelItem, itemDeReference);

/* Nouvelles méthodes */
// const avant = document.createElement('p');
// avant.innerHTML = "Élément ajouté via <strong>before()</strong> (🇫🇷 avant le début)";
// liste.before(avant);

// const debut = document.createElement('li');
// debut.innerHTML = "Élément ajouté via <strong>prepend()</strong> (🇫🇷 après le début)";
// liste.prepend(debut);

// const fin = document.createElement('li');
// fin.innerHTML = "Élément ajouté via <strong>append()</strong> (🇫🇷 avant la fin)";
// liste.append(fin);

// const apres = document.createElement('p');
// apres.innerHTML = "Élément ajouté via <strong>after()</strong> (🇫🇷 après la fin)";
// liste.after(apres);

/* Quelle méthode utiliser ? */