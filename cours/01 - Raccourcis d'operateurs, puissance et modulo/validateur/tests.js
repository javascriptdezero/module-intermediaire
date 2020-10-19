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
let descriptionEntrees = ["nombreDeJours"];
ajouterTest(0, "convertirEnSemainesEtJours", {
  entrees: [0],
  descriptionEntrees,
  sortie: "0 jour(s), c'est équivalent à 0 semaine(s) et 0 jour(s)"
});
ajouterTest(0, "convertirEnSemainesEtJours", {
  entrees: [1],
  descriptionEntrees,
  sortie: "1 jour(s), c'est équivalent à 0 semaine(s) et 1 jour(s)"
});
ajouterTest(0, "convertirEnSemainesEtJours", {
  entrees: [3],
  descriptionEntrees,
  sortie: "3 jour(s), c'est équivalent à 0 semaine(s) et 3 jour(s)"
});
ajouterTest(0, "convertirEnSemainesEtJours", {
  entrees: [7],
  descriptionEntrees,
  sortie: "7 jour(s), c'est équivalent à 1 semaine(s) et 0 jour(s)"
});
ajouterTest(0, "convertirEnSemainesEtJours", {
  entrees: [8],
  descriptionEntrees,
  sortie: "8 jour(s), c'est équivalent à 1 semaine(s) et 1 jour(s)"
});
ajouterTest(0, "convertirEnSemainesEtJours", {
  entrees: [9],
  descriptionEntrees,
  sortie: "9 jour(s), c'est équivalent à 1 semaine(s) et 2 jour(s)"
});
ajouterTest(0, "convertirEnSemainesEtJours", {
  entrees: [19],
  descriptionEntrees,
  sortie: "19 jour(s), c'est équivalent à 2 semaine(s) et 5 jour(s)"
});
ajouterTest(0, "convertirEnSemainesEtJours", {
  entrees: [9000],
  descriptionEntrees,
  sortie: "9000 jour(s), c'est équivalent à 1285 semaine(s) et 5 jour(s)"
});

// Exercice 1
descriptionEntrees = ["nombreDeTables", "diametreTable", "prixTissu"];
ajouterTest(1, "calculPrixNappes", {
  entrees: [0, 0, 0],
  descriptionEntrees,
  sortie: 0
});
ajouterTest(1, "calculPrixNappes", {
  entrees: [1, 1, 1],
  descriptionEntrees,
  sortie: 1
});
ajouterTest(1, "calculPrixNappes", {
  entrees: [2, 1, 1],
  descriptionEntrees,
  sortie: 2
});
ajouterTest(1, "calculPrixNappes", {
  entrees: [1, 2, 1],
  descriptionEntrees,
  sortie: 4
});
ajouterTest(1, "calculPrixNappes", {
  entrees: [1, 2, 2],
  descriptionEntrees,
  sortie: 8
});
ajouterTest(1, "calculPrixNappes", {
  entrees: [2, 2, 2],
  descriptionEntrees,
  sortie: 16
});
ajouterTest(1, "calculPrixNappes", {
  entrees: [5, 2, 3],
  descriptionEntrees,
  sortie: 60
});

// Exercice 2
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [0, 0, 0],
  descriptionEntrees,
  sortie: 0
});
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [1, 1, 1],
  descriptionEntrees,
  sortie: 1
});
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [2, 1, 1],
  descriptionEntrees,
  sortie: 2
});
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [1, 2, 1],
  descriptionEntrees,
  sortie: 4
});
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [1, 2, 2],
  descriptionEntrees,
  sortie: 8
});
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [2, 2, 2],
  descriptionEntrees,
  sortie: 16
});
// 20 m2 pile, réduction 10%
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [5, 2, 3],
  descriptionEntrees,
  sortie: 54
});
// 27 m2 (entre 20 et 30 m2), réduction 10%
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [3, 3, 10],
  descriptionEntrees,
  sortie: 243
});
// 30 m2 pile, réduction 20%
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [30, 1, 3],
  descriptionEntrees,
  sortie: 72
});
// 32 m2 (entre 30 et 50 m2), réduction 20%
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [2, 4, 5],
  descriptionEntrees,
  sortie: 128
});
// 50 m2 pile, réduction 30%
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [50, 1, 3],
  descriptionEntrees,
  sortie: 105
});
// 80 m2 (entre 50 et 100 m2), réduction 30%
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [5, 4, 6],
  descriptionEntrees,
  sortie: 336
});
// 100 m2 pile, réduction 50%
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [4, 5, 3],
  descriptionEntrees,
  sortie: 150
});
// 125 m2 (au dessus de 100 m2), réduction 50%
ajouterTest(2, "calculPrixNappesDegressif", {
  entrees: [5, 5, 4],
  descriptionEntrees,
  sortie: 250
});

// Exercice 3
// Rien à tester, le code doit être indiqué dans la console Google Chrome

// Exercice 4
descriptionEntrees = ["chaine", "nombreDeRepetitions"];
ajouterTest(4, "repeter", {
  entrees: ["cou", 2],
  descriptionEntrees,
  sortie: "coucou"
});
ajouterTest(4, "repeter", {
  entrees: ["o", 5],
  descriptionEntrees,
  sortie: "ooooo"
});
ajouterTest(4, "repeter", {
  entrees: ["bla", 4],
  descriptionEntrees,
  sortie: "blablablabla"
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