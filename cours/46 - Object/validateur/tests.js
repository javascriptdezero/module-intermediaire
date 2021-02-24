/*
 * N'hésitez pas à jeter un oeil 👁 sur ce code et à me prévenir
 * si vous rencontrez un bogue !
 *
 * Vous pouvez me joindre par email sur jeremy@javascriptdezero.com
 *
 * Merci 👍
 */

const tests = {};

function ajouterTest(idExercice, nomFonction, {
  entrees = null,
  descriptionEntrees = null,
  sortie = null,
}) {
  if (!tests[nomFonction]) {
    tests[nomFonction] = [];
  }
  tests[nomFonction].push({
    idExercice,
    entrees,
    descriptionEntrees,
    sortie,
  });
}

// Ajout des tests des exos

// Exercice 0
let exerciceId = 0;
let descriptionEntrees = ["objet1", "objet2"];
ajouterTest(exerciceId, "assign0", {
  entrees: [{ prenom: "Jérémy" }, { nom: "MOUZIN" }],
  descriptionEntrees,
  sortie: { prenom: "Jérémy", nom: "MOUZIN" },
});
ajouterTest(exerciceId, "assign0", {
  entrees: [{ prenom: "Tom" }, { nom: "Redocemia" }],
  descriptionEntrees,
  sortie: { prenom: "Tom", nom: "Redocemia" },
});

// Exercice 1
exerciceId++;
descriptionEntrees = ["objet"];
ajouterTest(exerciceId, "entries0", {
  entrees: [{ prenom: "Jérémy", nom: "MOUZIN" }],
  descriptionEntrees,
  sortie: [["prenom", "Jérémy"], ["nom", "MOUZIN"]],
});
ajouterTest(exerciceId, "entries0", {
  entrees: [{ prenom: "Tom", nom: "Redocemia" }],
  descriptionEntrees,
  sortie: [["prenom", "Tom"], ["nom", "Redocemia"]],
});

// Exercice 2
exerciceId++;
descriptionEntrees = ["objet"];
ajouterTest(exerciceId, "keys0", {
  entrees: [{ prenom: "Jérémy", nom: "MOUZIN" }],
  descriptionEntrees,
  sortie: ["prenom", "nom"],
});
ajouterTest(exerciceId, "keys0", {
  entrees: [{prenom: "Tom", nom: "Redocemia"}],
  descriptionEntrees,
  sortie: ["prenom", "nom"],
});

// Exercice 3
exerciceId++;
descriptionEntrees = ["objet"];
ajouterTest(exerciceId, "values0", {
  entrees: [{ prenom: "Jérémy", nom: "MOUZIN" }],
  descriptionEntrees,
  sortie: ["Jérémy", "MOUZIN"],
});
ajouterTest(exerciceId, "values0", {
  entrees: [{prenom: "Tom", nom: "Redocemia"}],
  descriptionEntrees,
  sortie: ["Tom", "Redocemia"],
});

// Exercice 4
exerciceId++;
descriptionEntrees = ["objet"];
ajouterTest(exerciceId, "inverser", {
  entrees: [{ prenom: "Jérémy", nom: "MOUZIN" }],
  descriptionEntrees,
  sortie: { Jérémy: "prenom", MOUZIN: "nom" },
});
ajouterTest(exerciceId, "inverser", {
  entrees: [{prenom: "Tom", nom: "Redocemia"}],
  descriptionEntrees,
  sortie: { Tom: "prenom", Redocemia: "nom" },
});

// Exercice 5
exerciceId++;
descriptionEntrees = ["objet"];
ajouterTest(exerciceId, "resume", {
  entrees: [{ prenom: "Jérémy", nom: "MOUZIN" }],
  descriptionEntrees,
  sortie: { cles: ["prenom", "nom"], valeurs: ["Jérémy", "MOUZIN"] },
});
ajouterTest(exerciceId, "resume", {
  entrees: [{prenom: "Tom", nom: "Redocemia"}],
  descriptionEntrees,
  sortie: { cles: ["prenom", "nom"], valeurs: ["Tom", "Redocemia"] },
});

lancerTousLesTests();

// Code qui vient tester tous les exercices remplis par l'étudiant
function lancerTousLesTests() {
  Object.keys(tests).forEach((nomFonction) => {
    // Si la fonction a été déclarée par l'étudiant, on teste son code
    if (typeof window[nomFonction] !== "undefined") {
      let continuerTests = true;
      tests[nomFonction].forEach((test, numeroTest, listeTests) => {
        if (continuerTests) {
          // Sauvegarde des entrées originales qui peuvent être modifiées par l'étudiant à l'intérieur
          // de la fonction. Ça permet d'afficher les entrées d'origine dans le message d'erreur.
          const entreesOriginales = test.entrees.map(dupliquerValeur);

          // Exécute la fonction de l'étudiant
          let valeurRetour = (entreesOriginales === null) ? window[nomFonction]() : window[nomFonction](...entreesOriginales);

          let valeursIdentiques = comparerSimplement(valeurRetour, test.sortie);

          if (valeursIdentiques) {
            let bonneReponse = formaterObjet(test.sortie);
            enonces.definirSucces(enonces.liste[test.idExercice], bonneReponse);
          } else {
            const valeurRecue = formaterObjet(valeurRetour);
            const valeurAttendue = construireMessageErreur(test, numeroTest, listeTests.length);
            enonces.definirEchec(enonces.liste[test.idExercice], { valeurRecue, valeurAttendue });

            continuerTests = false;
          }
        }
      });
    }
  });
}

/* Duplique superficiellement (shallow copy) un objet ou tableau */
function dupliquerValeur(valeur) {
  if (Array.isArray(valeur)) {
    // On renvoie un nouveau tableau identique
    return [...valeur];
  } else if (typeof valeur === "object") {
    // On renvoie un nouvel objet identique
    return { ...valeur };
  } else {
    // On renvoie la valeur primitive
    return valeur;
  }
}

function formaterObjet(valeur) {
  if (typeof valeur === "object") {
    return JSON.stringify(valeur);
  }
  if (typeof valeur === "string") {
    return `"${valeur}"`;
  }
  return valeur;
}

function estUnObjet(variable) {
  return Object.prototype.toString.call(variable) === '[object Object]';
}

function comparerSimplement(valeur1, valeur2) {
  if (typeof valeur1 !== typeof valeur2) return false;
  // Gère le cas où on attend NaN en sortie
  if (Number.isNaN(valeur2)) return Number.isNaN(valeur1);

  if (Array.isArray(valeur1) && Array.isArray(valeur2)) {
    // Au préalable on vérifie qu'ils ont le même nombre d'éléments
    if (valeur1.length !== valeur2.length) return false;
    // Comparaison, élément par élément
    for (let i = 0, l = valeur1.length; i < l; i++) {
      if (!comparerSimplement(valeur1[i], valeur2[i])) return false;
    }
    return true;
  } else if (estUnObjet(valeur1) && estUnObjet(valeur2)) {
    // Vu qu'on travaille sur des objets non imbriqués simples, on peut
    // se permettre d'utiliser JSON.stringify pour aller vite
    return JSON.stringify(valeur1) === JSON.stringify(valeur2);
  } else {
    return valeur1 === valeur2;
  }
}

function construireMessageErreur(test, numeroTest, nombreDeTests) {
  let messageErreur = formaterObjet(test.sortie);
  messageErreur += '\n';

  if (test.descriptionEntrees !== null) {
    if (test.descriptionEntrees.length > 1) {
      messageErreur += '\n→ pour les arguments ';
      let listeDescriptionValeur = [];
      test.descriptionEntrees.forEach((description, index) => {
        listeDescriptionValeur.push(formateArgumentEtValeurHtml(description, test.entrees[index]));
      });
      messageErreur += listeDescriptionValeur.join(" et ");
    } else {
      messageErreur += `\n→ pour l'argument ${formateArgumentEtValeurHtml(test.descriptionEntrees[0], test.entrees[0])}`;
    }
    let pourcentageReussi = 100 * numeroTest / nombreDeTests;
    if (!Number.isInteger(pourcentageReussi)) {
      pourcentageReussi = pourcentageReussi.toFixed(2);
    }
    messageErreur += `\n\n<p class="indication-tests-reussis">Tests réussis : <strong>${pourcentageReussi}%</strong></p>`;
  }
  return messageErreur;
}

function formateArgumentEtValeurHtml(nomArgument, valeur) {
  return `<strong>${nomArgument}</strong> = <code>${formaterObjet(valeur)}</code>`;
}