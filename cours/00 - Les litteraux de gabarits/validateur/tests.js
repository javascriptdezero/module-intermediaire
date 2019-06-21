/*
 * N'hésitez pas à jeter un oeil 👁 sur ce code et à me prévenir
 * si vous rencontrez un bogue !
 *
 * Vous pouvez me joindre par email sur jeremy@javascriptdezero.com
 * ou via Slack : https://javascriptdezero.slack.com
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