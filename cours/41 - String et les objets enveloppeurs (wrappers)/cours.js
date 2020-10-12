/* String et les objets enveloppeurs (wrappers) */

/* Documentation MDN du type String */

/* Méthodes statiques (boîte à outils) */
// N'essayez pas de tout comprendre ! (encodage des caractères)

/* Propriétés */
// Construction d'une instance de type String */
let chaine = new String("un peu de texte");
// console.log(chaine.length);
// console.log(typeof chaine);
// console.log(chaine);

// Utilisation de l'indice pour sélectionner un caractère
// let caractere = chaine[3];
// console.log(caractere);

// Attention à bien utiliser l'opérateur new !
// let conversion = String(42);
// console.log(conversion);
// console.log(typeof conversion);

/* Valeur primitive VS String (type "string" VS "object") */
// let primitive = "chaine primitive";
// console.log(primitive);
// console.log(typeof primitive);

// let instance = new String(primitive);
// console.log(instance);
// console.log(typeof instance);
// console.log(instance.length);

/* Conversion automatique (wrapper objects) */
// console.log(primitive.length);
// console.log(primitive.concat(", qui n'est pas un objet !"));

// Exemple d'appel de méthode sur une valeur primitive
// console.log("encore du texte".toUpperCase());

/* Immuable (🇬🇧 Immutable) VS Mutable (🇬🇧 Mutable) */
// let texte = "ce texte est immuable";
// texte[0] = "C";
// console.log(texte);

/* Méthodes simples à connaître */

/* Exercices */

/* Prochaine leçon */