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
let descriptionEntrees = ["prenom", "nomSociete"];
ajouterTest(0, "merci", {
  entrees: ["Tom", "MagiciensDuCode"],
  descriptionEntrees,
  sortie: "C'est Tom qui m'a permis d'entrer dans MagiciensDuCode"
});
ajouterTest(0, "merci", {
  entrees: ["Jérémy", "le monde des développeurs"],
  descriptionEntrees,
  sortie: "C'est Jérémy qui m'a permis d'entrer dans le monde des développeurs"
});

// Exercice 1
descriptionEntrees = ["prenom", "nom", "adresse", "codePostal", "ville"];
ajouterTest(1, "formaterAdresse", {
  entrees: ["Tom", "REDOCEMIA", "21 rue du bloc d'instructions", 1337, "POINT-VIRGULE"],
  descriptionEntrees,
  sortie: `===[ Destinataire ]===
Tom REDOCEMIA
21 rue du bloc d'instructions
1337 POINT-VIRGULE`
});
ajouterTest(1, "formaterAdresse", {
  entrees: ["Jérémy", "MOUZIN", "42 rue de l'algorithme", 38000, "GRENOBLE"],
  descriptionEntrees,
  sortie: `===[ Destinataire ]===
Jérémy MOUZIN
42 rue de l'algorithme
38000 GRENOBLE`
});

// Exercice 2
descriptionEntrees = ["nombreDeJours"];
ajouterTest(2, "convertirEnSemaines", {
  entrees: [35],
  descriptionEntrees,
  sortie: "35 jours sont équivalents à 5 semaines"
});
ajouterTest(2, "convertirEnSemaines", {
  entrees: [0],
  descriptionEntrees,
  sortie: "0 jours sont équivalents à 0 semaines"
});
ajouterTest(2, "convertirEnSemaines", {
  entrees: [42],
  descriptionEntrees,
  sortie: "42 jours sont équivalents à 6 semaines"
});
ajouterTest(2, "convertirEnSemaines", {
  entrees: [1337],
  descriptionEntrees,
  sortie: "1337 jours sont équivalents à 191 semaines"
});

// Exercice 3
descriptionEntrees = null;
ajouterTest(3, "templateString", {
  descriptionEntrees,
  sortie: `Les template strings sont délimitées par des backticks \`\`.
Pour créer un espace réservé on utilise \$\{\}.`
});

// Exercice 4
descriptionEntrees = ["nombreDeJours"];
ajouterTest(4, "convertirEnSemainesEtJours", {
  entrees: [0],
  descriptionEntrees,
  sortie: "0 jour, c'est équivalent à 0 semaine et 0 jour"
});
ajouterTest(4, "convertirEnSemainesEtJours", {
  entrees: [1],
  descriptionEntrees,
  sortie: "1 jour, c'est équivalent à 0 semaine et 1 jour"
});
ajouterTest(4, "convertirEnSemainesEtJours", {
  entrees: [3],
  descriptionEntrees,
  sortie: "3 jours, c'est équivalent à 0 semaine et 3 jours"
});
ajouterTest(4, "convertirEnSemainesEtJours", {
  entrees: [7],
  descriptionEntrees,
  sortie: "7 jours, c'est équivalent à 1 semaine et 0 jour"
});
ajouterTest(4, "convertirEnSemainesEtJours", {
  entrees: [8],
  descriptionEntrees,
  sortie: "8 jours, c'est équivalent à 1 semaine et 1 jour"
});
ajouterTest(4, "convertirEnSemainesEtJours", {
  entrees: [9],
  descriptionEntrees,
  sortie: "9 jours, c'est équivalent à 1 semaine et 2 jours"
});
ajouterTest(4, "convertirEnSemainesEtJours", {
  entrees: [19],
  descriptionEntrees,
  sortie: "19 jours, c'est équivalent à 2 semaines et 5 jours"
});
ajouterTest(4, "convertirEnSemainesEtJours", {
  entrees: [9000],
  descriptionEntrees,
  sortie: "9000 jours, c'est équivalent à 1285 semaines et 5 jours"
});

// Exercice 5
descriptionEntrees = ["numeroClient"];
ajouterTest(5, "retournerReference", {
  entrees: [1864],
  descriptionEntrees,
  sortie: "N° de client : 421864 (standard)"
});
ajouterTest(5, "retournerReference", {
  entrees: [5842],
  descriptionEntrees,
  sortie: "N° de client : PR5842 (premium)"
});
ajouterTest(5, "retournerReference", {
  entrees: [5000],
  descriptionEntrees,
  sortie: "N° de client : PR5000 (premium)"
});
ajouterTest(5, "retournerReference", {
  entrees: [7000],
  descriptionEntrees,
  sortie: "N° de client : 427000 (standard)"
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
          // Exécute la fonction de l'étudiant
          let valeurRetour = (test.entrees === null) ? window[nomFonction]() : window[nomFonction](...test.entrees);

          if (valeurRetour === test.sortie) {
            valeurRetour = formaterPourLeHtml(valeurRetour);
            enonces.definirSucces(enonces.liste[test.idExercice], test.sortie);
          } else {
            const valeurRecue = formaterPourLeHtml(valeurRetour);
            const valeurAttendue = formaterPourLeHtml(construireMessageErreur(test, numeroTest, listeTests.length));
            enonces.definirEchec(enonces.liste[test.idExercice], { valeurRecue, valeurAttendue });
            continuerTests = false;
          }
        }
      });
    }
  });
}

function construireMessageErreur(test, numeroTest, nombreDeTests) {
  let messageErreur = `${test.sortie}\n`;

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
  return `<strong>${nomArgument}</strong> = <code>${valeur}</code>`;
}