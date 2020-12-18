> Vous pouvez afficher ce fichier sous une forme plus agréable à l'aide du raccourci clavier `CMD+Shift+V` (ou `Ctrl+Shift+V` sous Windows et Linux). Vous pouvez aussi faire un clic droit sur l'onglet puis `Ouvrir l'aperçu`. 

# Intégration

Vous pouvez effectuer l'intégration de ce projet en HTML / CSS. Pour en savoir plus, regardez dans le dossier `integration` le fichier `integration.md`.

# Spécifications

**Accessibilité** : toutes les fonctionnalités (sauf le changement d'ordre des items) devront fonctionner en utilisant uniquement le clavier (touche `TAB` pour se déplacer sur les différents éléments).

**UX (expérience utilisateur)** : certaines fonctionnalités sont créées uniquement pour faciliter la saisie et corriger automatiquement certaines erreurs dans le but d'améliorer l'expérience utilisateur.

Voici la liste exhaustive de toutes les fonctionnalités à implémenter dans cet outil.

## Ajout d'un nouvel item

Le champ `Nouvel item` en haut permet d'entrer les informations d'un nouvel item à ajouter à la liste.

> Note importante : la page ne doit pas être rechargée lorsqu'on valide l'ajout d'un nouvel item via le formulaire

L'ajout d'un nouvel item peut se faire de 3 façons différentes :

- En appuyant sur `ENTRÉE` quand le focus est encore dans le champ `Nouvel item`
- En appuyant sur le bouton `Ajouter` avec la souris
- **Accessibilité** : en se déplaçant sur le bouton `Ajouter` avec la touche `TAB` puis en tapant sur `ENTRÉE`
- **UX** : dès le chargement de la page, le champ `Nouvel item` doit être actif pour pouvoir commencer à saisir un nouvel item
- **UX** : après l'ajout d'un item le champ `Nouvel item` doit être effacé et avoir le focus pour pouvoir entrer un nouvel item immédiatement

#### Exercice — Nouvel item

Implémentez le code JavaScript permettant d'ajouter un nouvel item (qui sera un élément `<li>`) à la liste (qui est un élément `<ul>`avec l'id `liste`).

Le nouvel item sera créé à partir du [template](https://developer.mozilla.org/fr/docs/Web/HTML/Element/template) dont l'id est `template-item` et qui est contenu dans le fichier HTML.

La valeur de quantité par défaut d'un item sera `1`. L'unité par défaut sera l'unité `u.`.

## UX — Filtrage des informations

Pour éviter d'entrer des valeurs incohérentes ou erronées, il faudra préalablement filtrer puis valider le texte du champ `Nouvel item` avant d'ajouter un item.

#### Exercice — Correction des espaces

- Supprimez automatiquement les espaces en trop avant et après le texte indiqué dans le champ `Nouvel item` avant d'ajouter celui-ci
- Transformez plusieurs espaces d'affilés du texte indiqué dans le champ `Nouvel item` en un unique espace, exemple :
```
"pommes    granny" → "pommes granny"
```

#### Exercice — Majuscule à la première lettre

La première lettre de l'item à ajouter devra être mise automatiquement en majuscule pour faciliter la vie de l'utilisateur.

#### Exercice — Validation de la valeur filtrée

Pour valider une valeur il faudra vérifier que le champ `Nouvel item` :

- n'est pas vide
- ne contient que les 26 lettres majuscules et minuscules, des espaces, des parenthèses et des chiffres (pas de `ç`, de `é` etc.)

Utilisez la gestion des erreurs HTML5 grâce à l'attribut [pattern](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs/pattern) et les expressions régulières.

#### Exercice — Messages d'erreurs utiles à l'utilisateur

Si une contrainte n'est pas respectée, il faut expliquer clairement le problème à l'utilisateur avec [un message d'erreur personnalisé](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input#Notes).

- Si le champ est vide on affichera : `Vous devez indiquer les informations de l'item, exemple : 250 g chocolat`
- Si le champ contient des caractères interdits on affichera : `Les caractères spéciaux, les accents et autres lettres spécifiques ne sont pas autorisés`

#### Exercice — Minimum 2 caractères

Pour être valide, un nom d'item devra être composé d'au moins 2 lettres côte à côte. Si ce n'est pas le cas il faudra afficher le message d'erreur personnalisé suivant : `Le nom de l'item doit faire 2 lettres minimum`.

#### Exercice — Insertion intelligente

L'utilisateur doit pouvoir indiquer par exemple `1 kg riz` ou `4 pommes` ou `pain` dans le champ `Nouvel item` et les quantités et unités doivent être automatiquement renseignées.

Si aucune quantité n'est indiquée, on utilisera la valeur par défaut `1`.

Si aucune unité n'est précisée (comme dans `4 pommes`), on utilisera l'unité `u.` par défaut.

On ne traitera pas les cas particuliers comme `kg pommes`, `12 20 pommes` etc. et on supposera que les quantités sont toujours strictement supérieures à `0`.

Les formats possibles sont donc :

- `<nom>`
- `<quantité> <nom>`
- `<quantité> <unité> <nom>`

Quelques valeurs qui doivent être reconnues :

- `pommes` → quantité: `1`, unité: `u.`, nom: `Pommes`
- `pommes granny` → quantité: `1`, unité: `u.`, nom: `Pommes granny`
- `250 g chocolat` → quantité: `250`, unité: `g`, nom: `Chocolat`
- `4 kg riz complet` → quantité: `4`, unité: `kg`, nom: `Riz complet`
- `6 L lait` → quantité: `6`, unité: `L`, nom: Lait
- `12 pommes` → quantité: `12`, unité: `u.`, nom: `Pommes`
- `12 pommes granny` → quantité: `12`, unité: `u.`, nom: `Pommes granny`

Attention il faut que la première lettre mise en majuscule soit toujours celle du produit et pas d'une éventuelle unité. Par exemple `1 kg riz` devra donner `1 kg Riz` et pas `1 Kg riz`.

#### Exercice — Réduire la maintenance

Pour des questions de maintenance, le code doit prendre en compte les unités indiquées dans le HTML.

Ainsi, si un développeur ajoute une nouvelle unité comme `m` (mètres), on doit pouvoir immédiatement utiliser `3 m ruban` par exemple pour ajouter un nouvel item.

Aucune modification dans le code JavaScript ne devra être nécessaire pour prendre cette nouvelle unité en compte.

## L'API LocalStorage

À chaque rechargement de la page web, toutes les données sont perdues. Pour faire persister les données, on va utiliser l'[API LocalStorage](https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) pour stocker les données localement dans le navigateur.

#### Exercice — Sauvegarde des données

Les données seront stockées sous la forme d'un tableau d'objets. Chaque objet représentera un item. Comme `localStorage` ne peut stocker que des chaînes de caractères dans ses valeurs, on utilisera [JSON.stringify()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/stringify) pour transformer un objet JavaScript en chaîne de caractères.

- Lorsqu'un item est ajouté, sauvegardez les données de celui-ci dans le `localStorage` du navigateur
- Vérifiez que les données sont bien stockées dans l'onglet `Application` puis dans le panneau de gauche `Storage > Local Storage > https://127.0.0.1:5500`

#### Exercice — Chargement des données

Comme vous pouvez le voir, lorsque vous actualisez la page rien ne s'affiche dans la liste. C'est tout à fait normal.

Il va falloir charger les données depuis le `localStorage` du navigateur et recréer tous les items `<li>` qu'on va venir ajouter à la liste `<ul>`.

Pour ce faire on pourra utiliser la fonction [JSON.parse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/parse) pour reconstruire le tableau JavaScript qui a été sauvegardé précédemment dans le `localStorage` sous la forme d'une chaîne de caractères.

## Modification d'un item

# **TODO**

Une fois qu'un item est ajouté, il faut pouvoir modifier ses informations facilement.

- Il faut pouvoir accéder aux différents champs `nom`, `quantite` et `unite` via la touche `TAB`
- 
- La quantité d'un item doit être comprise entre `1` et `999` inclus
- Dès qu'on modifie un item en éditant un de ces champs, les nouvelles valeurs pour cet item doivent être sauvegardées dans le `localStorage`

## Modification de la liste

#### Exercice — Suppression d'un item

Pour supprimer un item il suffit d'utiliser le bouton poubelle à droite de celui-ci.

- Lorsque ce bouton est cliqué, l'item doit être supprimé de la liste et une sauvegarde de la nouvelle liste doit être faite dans `localStorage` pour refléter cette suppression
- Une fois que c'est fait il faut également supprimer l'item `<li>` de la liste `<ul>`
- **UX** : appliquez la classe `.suppression` avant de supprimer l'item de la liste pour effectuer une animation de suppression. Utilisez l'évènement `transitionend` pour détecter la fin de la suppression et supprimer l'item `<li>` de la liste `<ul>` à ce moment là

#### Exercice — Changement de l'ordre des items

# TODO

On souhaite pouvoir changer l'ordre des items de la liste de courses. Pour cela, on va utiliser l'[API Drag and Drop](https://developer.mozilla.org/fr/docs/Web/API/API_HTML_Drag_and_Drop) :

- La poignée d'un item ne doit pas être sélectionnable par la touche `TAB`
- Avec la souris, lorsqu'on clique puis qu'on déplace la poignée d'un item celui-ci doit se déplacer
- Lorsqu'on lâche un item entre 2 autres items, l'item doit être déplacé à cet endroit
- Lorsqu'on lâche un item sur la partie supérieure d'un autre item, l'item doit être déplacé juste au dessus de cet item
- Lorsqu'on lâche un item sur la partie inférieure d'un autre item, l'item doit être déplacé juste en dessous de cet item
- Lorsque la position de déplacement de l'item est la même que celle où il était avant, on ne fait rien

## Exportation des données

Pour partager facilement la liste de courses, un bouton `Exporter` est mis à disposition. Utilisez-le pour vous envoyer la liste de course par email !

- Lors du clic sur ce bouton, exportez la liste de courses sous la forme d'une chaîne de caractères avec le format suivant (il faut utiliser `%0D%0A` pour faire les retours à la ligne dans le corps de l'email) : 
```
- Poires (2 kg)%0D%0A
- Baguettes de pain (3)%0D%0A
- Lait (6 L)%0D%0A
```
- Lors du clic sur le bouton, crééz une chaîne de caractères pour construire une URL de type [mailto](https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Liens_email). Utilisez votre adresse email comme destinataire, indiquez `Liste de courses` pour le sujet et utilisez comme corps du message la chaîne de caractères générée juste avant (la liste de courses !)
- Utilisez [window.location](https://developer.mozilla.org/fr/docs/Web/API/window/location) pour naviguer sur l'URL créée juste avant et lancer votre gestionnaire d'email préféré avec l'email pré-rempli. Il ne reste plus qu'à vous envoyer cet email !

# TODO LIST
- Vérifier que le fichier index.html ne contient pas les choses qu'on doit faire dans la suite des exercices (attribut pattern et required sur l'input par exemple et tous les tabindex)
- Supprimer les attributs pour le drag and drop dans le HTML
- Supprimer les fonctions fléchées du JS
- Préparer un dossier solution ?

- pointer-events: none => sur l'image pour pas être gêné par le drag
- Astuce des before / after pour détecter le déplacement entre les items ( dans les margins)
- Drop zone sur le séparateur également
- Déplacement effectif de l'item à sa nouvelle place
- On ne déplace pas sur soi-même