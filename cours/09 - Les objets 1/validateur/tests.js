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
let descriptionEntrees = ["monHeure", "mesMinutes"];
ajouterTest(0, "creerHoraire", {
  entrees: [12, 30],
  descriptionEntrees,
  sortie: { heures: 12, minutes: 30 }
});
ajouterTest(0, "creerHoraire", {
  entrees: [5, 42],
  descriptionEntrees,
  sortie: { heures: 5, minutes: 42 }
});

// Exercice 1
descriptionEntrees = ["horaire"];
ajouterTest(1, "afficherHoraire", {
  entrees: [{heures: 12, minutes: 30}],
  descriptionEntrees,
  sortie: "L'horaire est 12 heures et 30 minutes.",
});
ajouterTest(1, "afficherHoraire", {
  entrees: [{heures: 5, minutes: 8}],
  descriptionEntrees,
  sortie: "L'horaire est 5 heures et 8 minutes.",
});

// Exercice 2
descriptionEntrees = ["horaire"];
ajouterTest(2, "avancerDe20Minutes", {
  entrees: [{heures: 12, minutes: 30}],
  descriptionEntrees,
  sortie: {heures: 12, minutes: 50},
});
ajouterTest(2, "avancerDe20Minutes", {
  entrees: [{heures: 12, minutes: 55}],
  descriptionEntrees,
  sortie: {heures: 13, minutes: 15},
});
ajouterTest(2, "avancerDe20Minutes", {
  entrees: [{heures: 23, minutes: 40}],
  descriptionEntrees,
  sortie: {heures: 0, minutes: 0},
});
ajouterTest(2, "avancerDe20Minutes", {
  entrees: [{heures: 23, minutes: 52}],
  descriptionEntrees,
  sortie: {heures: 0, minutes: 12},
});

// Exercice 3
descriptionEntrees = ["rdv", "finJournee"];
ajouterTest(3, "validerRdv", {
  entrees: [{heures: 12, minutes: 30, duree: 120}, {heures: 13, minutes: 0}],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(3, "validerRdv", {
  entrees: [{heures: 12, minutes: 30, duree: 240}, {heures: 16, minutes: 30}],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(3, "validerRdv", {
  entrees: [{heures: 12, minutes: 30, duree: 120}, {heures: 18, minutes: 0}],
  descriptionEntrees,
  sortie: true,
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
          const entreesOriginales = test.entrees.map(entree => typeof entree === "object" ? {...entree} : entree);
          
          // Exécute la fonction de l'étudiant
          let valeurRetour = (entreesOriginales === null) ? window[nomFonction]() : window[nomFonction](...entreesOriginales);
          let valeursIdentiques = valeurRetour === test.sortie;
          let doitRenvoyerUnObjet = typeof test.sortie === "object";

          if (doitRenvoyerUnObjet) {
            if (valeurRetour) {
              // Vérifie qu'il y a le même nombre de propriétés dans chaque objet à comparer
              valeursIdentiques = Object.keys(valeurRetour).length === Object.keys(test.sortie).length;
              // Vérifie que toutes les valeurs de propriétés sont les mêmes
              for (let cle in valeurRetour) {
                if (valeurRetour[cle] !== test.sortie[cle]) {
                  valeursIdentiques = false;
                }
              }
            }
            
            // On affiche l'objet sous la forme d'une chaîne de caractères
            valeurRetour = JSON.stringify(valeurRetour);
            test.sortie = JSON.stringify(test.sortie);
          }

          if (valeursIdentiques) {
            valeurRetour = formaterPourLeHtml(valeurRetour);
            enonces.definirSucces(enonces.liste[test.idExercice], test.sortie);
          } else {
            // Affiche les arguments d'entrée sous la forme d'une chaîne de caractères
            test.entrees = test.entrees.map(entree => typeof entree === "object" ? JSON.stringify(entree) : entree);

            const valeurRecue = formaterPourLeHtml(valeurRetour);
            const valeurAttendue = formaterPourLeHtml(construireMessageErreur(test, numeroTest, listeTests.length));
            enonces.definirEchec(enonces.liste[test.idExercice], { valeurRecue, valeurAttendue });
            
            if (doitRenvoyerUnObjet) {
              document.querySelector(".message.echec").innerHTML = document.querySelector(".message.echec").innerHTML.replace("affiche", "renvoie").replace("afficher", "renvoyer");
            }

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