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
let descriptionEntrees = ["nombre"];
ajouterTest(exerciceId, "abs0", {
  entrees: [12],
  descriptionEntrees,
  sortie: 12,
});
ajouterTest(exerciceId, "abs0", {
  entrees: [0],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(exerciceId, "abs0", {
  entrees: [-5],
  descriptionEntrees,
  sortie: 5,
});

// Exercice 1
exerciceId++;
descriptionEntrees = ["nombre"];
ajouterTest(exerciceId, "ceil0", {
  entrees: [0],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(exerciceId, "ceil0", {
  entrees: [5.2],
  descriptionEntrees,
  sortie: 6,
});
ajouterTest(exerciceId, "ceil0", {
  entrees: [8.9],
  descriptionEntrees,
  sortie: 9,
});
ajouterTest(exerciceId, "ceil0", {
  entrees: [-0.8],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(exerciceId, "ceil0", {
  entrees: [-42.3],
  descriptionEntrees,
  sortie: -42,
});

// Exercice 2
exerciceId++;
descriptionEntrees = ["nombre"];
ajouterTest(exerciceId, "floor0", {
  entrees: [0],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(exerciceId, "floor0", {
  entrees: [5.2],
  descriptionEntrees,
  sortie: 5,
});
ajouterTest(exerciceId, "floor0", {
  entrees: [8.9],
  descriptionEntrees,
  sortie: 8,
});
ajouterTest(exerciceId, "floor0", {
  entrees: [-0.8],
  descriptionEntrees,
  sortie: -1,
});
ajouterTest(exerciceId, "floor0", {
  entrees: [-42.3],
  descriptionEntrees,
  sortie: -43,
});

// Exercice 3
exerciceId++;
descriptionEntrees = ["cote1", "cote2"];
ajouterTest(exerciceId, "hypot0", {
  entrees: [3, 4],
  descriptionEntrees,
  sortie: 5,
});
ajouterTest(exerciceId, "hypot0", {
  entrees: [0, 5],
  descriptionEntrees,
  sortie: 5,
});
ajouterTest(exerciceId, "hypot0", {
  entrees: [12, 28],
  descriptionEntrees,
  sortie: 30.463092423455635,
});

// Exercice 4
exerciceId++;
descriptionEntrees = ["nombre1", "nombre2", "nombre3"];
ajouterTest(exerciceId, "hypot0", {
  entrees: [1, 2, 3],
  descriptionEntrees,
  sortie: 2.23606797749979,
});
ajouterTest(exerciceId, "hypot0", {
  entrees: [42, 12, 34],
  descriptionEntrees,
  sortie: 43.68065933568311,
});
ajouterTest(exerciceId, "hypot0", {
  entrees: [0, 6, 0],
  descriptionEntrees,
  sortie: 6,
});

// Exercice 5
exerciceId++;
descriptionEntrees = ["nombre1", "nombre2"];
ajouterTest(exerciceId, "max0", {
  entrees: [5, 12],
  descriptionEntrees,
  sortie: 12,
});
ajouterTest(exerciceId, "max0", {
  entrees: [-4, 8],
  descriptionEntrees,
  sortie: 8,
});
ajouterTest(exerciceId, "max0", {
  entrees: [-12, -5],
  descriptionEntrees,
  sortie: -5,
});

// Exercice 6
exerciceId++;
descriptionEntrees = ["nombre1", "nombre2", "nombre3"];
ajouterTest(exerciceId, "max1", {
  entrees: [5, 12, 20],
  descriptionEntrees,
  sortie: 20,
});
ajouterTest(exerciceId, "max1", {
  entrees: [-4, 8, 0],
  descriptionEntrees,
  sortie: 8,
});
ajouterTest(exerciceId, "max1", {
  entrees: [-12, -5, -25],
  descriptionEntrees,
  sortie: -5,
});

// Exercice 7
exerciceId++;
descriptionEntrees = ["nombre1", "nombre2"];
ajouterTest(exerciceId, "min0", {
  entrees: [5, 12],
  descriptionEntrees,
  sortie: 5,
});
ajouterTest(exerciceId, "min0", {
  entrees: [-4, 8],
  descriptionEntrees,
  sortie: -4,
});
ajouterTest(exerciceId, "min0", {
  entrees: [-12, -5],
  descriptionEntrees,
  sortie: -12,
});

// Exercice 8
exerciceId++;
descriptionEntrees = ["nombre1", "nombre2", "nombre3"];
ajouterTest(exerciceId, "min1", {
  entrees: [5, 12, 20],
  descriptionEntrees,
  sortie: 5,
});
ajouterTest(exerciceId, "min1", {
  entrees: [-4, 8, 0],
  descriptionEntrees,
  sortie: -4,
});
ajouterTest(exerciceId, "min1", {
  entrees: [-12, -5, -25],
  descriptionEntrees,
  sortie: -25,
});

// Exercice 9
exerciceId++;
descriptionEntrees = ["nombre", "puissance"];
ajouterTest(exerciceId, "pow0", {
  entrees: [42, 2],
  descriptionEntrees,
  sortie: 1764,
});
ajouterTest(exerciceId, "pow0", {
  entrees: [2, 12],
  descriptionEntrees,
  sortie: 4096,
});

// Exercice 10
exerciceId++;
descriptionEntrees = ["limiteHaute"];
ajouterTest(exerciceId, "random0", {
  entrees: [1337],
  descriptionEntrees,
  sortie: [0, 1337],
});
ajouterTest(exerciceId, "random0", {
  entrees: [42],
  descriptionEntrees,
  sortie: [0, 42],
});

// Exercice 11
exerciceId++;
descriptionEntrees = ["limiteBasse", "limiteHaute"];
ajouterTest(exerciceId, "random1", {
  entrees: [10, 42],
  descriptionEntrees,
  sortie: [10, 42],
});
ajouterTest(exerciceId, "random1", {
  entrees: [254, 1337],
  descriptionEntrees,
  sortie: [254, 1337],
});

// Exercice 12
exerciceId++;
descriptionEntrees = ["nombre"];
ajouterTest(exerciceId, "round0", {
  entrees: [42.2],
  descriptionEntrees,
  sortie: 42,
});
ajouterTest(exerciceId, "round0", {
  entrees: [42.5],
  descriptionEntrees,
  sortie: 43,
});
ajouterTest(exerciceId, "round0", {
  entrees: [42.9],
  descriptionEntrees,
  sortie: 43,
});

// Exercice 13
exerciceId++;
descriptionEntrees = ["nombre"];
ajouterTest(exerciceId, "sign0", {
  entrees: [5],
  descriptionEntrees,
  sortie: 1,
});
ajouterTest(exerciceId, "sign0", {
  entrees: [0],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(exerciceId, "sign0", {
  entrees: [-4],
  descriptionEntrees,
  sortie: -1,
});

// Exercice 14
exerciceId++;
descriptionEntrees = ["nombre"];
ajouterTest(exerciceId, "trunc0", {
  entrees: [5.2],
  descriptionEntrees,
  sortie: 5,
});
ajouterTest(exerciceId, "trunc0", {
  entrees: [5.8],
  descriptionEntrees,
  sortie: 5,
});
ajouterTest(exerciceId, "trunc0", {
  entrees: [-45.2],
  descriptionEntrees,
  sortie: -45,
});
ajouterTest(exerciceId, "trunc0", {
  entrees: [-45.8],
  descriptionEntrees,
  sortie: -45,
});

// Exercice 15
exerciceId++;
descriptionEntrees = ["liste"];
ajouterTest(exerciceId, "corrigerTemp", {
  entrees: [[-2.34, -8.12, 5.74, 20.8, -30.82]],
  descriptionEntrees,
  sortie: [-56, -64, -59, -39, -69],
});
ajouterTest(exerciceId, "corrigerTemp", {
  entrees: [[12.34, 3.4, -13.51, -4, 12.7, 35.40, 8.6245, -12.454536]],
  descriptionEntrees,
  sortie: [-42,-39,-52,-56,-44,-9,-1,-13],
});

// Exercice 16
exerciceId++;
descriptionEntrees = ["liste"];
ajouterTest(exerciceId, "corrigerPression", {
  entrees: [[812.24, -810.8, 829.99, -822.46, -855.12]],
  descriptionEntrees,
  sortie: [812, 811, 830, 822, 855],
});
ajouterTest(exerciceId, "corrigerPression", {
  entrees: [[824, -840, 812, -822.54, -830.12]],
  descriptionEntrees,
  sortie: [824, 840, 812, 823, 830],
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

          // Gestion manuelle des exercices sur Math.random()
          if (nomFonction.startsWith("random")) {
            const [limiteBasse, limiteHaute] = test.sortie;
            console.log(`(${valeurRetour} >= ${limiteBasse} && ${valeurRetour} < ${limiteHaute})`, (valeurRetour >= limiteBasse && valeurRetour < limiteHaute));
            if (valeurRetour >= limiteBasse && valeurRetour < limiteHaute) {
              // Succès
              enonces.definirSucces(enonces.liste[test.idExercice], valeurRetour);
            } else {
              // Echec
              const valeurAttendue = `Une valeur entre ${limiteBasse} (inclus) et ${limiteHaute} (exclu)`;
              enonces.definirEchec(enonces.liste[test.idExercice], { valeurRecue: valeurRetour, valeurAttendue });

              continuerTests = false;
            }
          } else {
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
    return {...valeur};
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

function comparerSimplement(valeur1, valeur2) {
  if (typeof valeur1 !== typeof valeur2) return false;
  // Gère le cas où on attend NaN en sortie
  if (Number.isNaN(valeur2)) return Number.isNaN(valeur1);

  if (Array.isArray(valeur1) && Array.isArray(valeur2)) {
    // Au préalable on vérifie qu'ils ont le même nombre d'éléments
    if (valeur1.length !== valeur2.length) return false;
    // Comparaison, élément par élément
    for (let i = 0, l = valeur1.length; i < l; i++) {
      if (valeur1[i] !== valeur2[i]) return false;
    }
    return true;
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