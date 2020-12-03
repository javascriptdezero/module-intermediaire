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
let descriptionEntrees = ["valeur"];
ajouterTest(exerciceId, "isNaN0", {
  entrees: ["JavaScript"],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "isNaN0", {
  entrees: ["NaN"],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "isNaN0", {
  entrees: [NaN],
  descriptionEntrees,
  sortie: true,
});

// Exercice 1
exerciceId++;
descriptionEntrees = ["valeur"];
ajouterTest(exerciceId, "isFinite0", {
  entrees: ["0"],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "isFinite0", {
  entrees: [Infinity],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "isFinite0", {
  entrees: [-Infinity],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "isFinite0", {
  entrees: [NaN],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "isFinite0", {
  entrees: [0],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "isFinite0", {
  entrees: [5/2],
  descriptionEntrees,
  sortie: true,
});

// Exercice 2
exerciceId++;
descriptionEntrees = ["valeur"];
ajouterTest(exerciceId, "isInteger0", {
  entrees: ["0"],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "isInteger0", {
  entrees: [5/2],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "isInteger0", {
  entrees: [42.1337],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "isInteger0", {
  entrees: [NaN],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "isInteger0", {
  entrees: [Infinity],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "isInteger0", {
  entrees: [0],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "isInteger0", {
  entrees: [42],
  descriptionEntrees,
  sortie: true,
});

// Exercice 3
exerciceId++;
descriptionEntrees = ["valeur"];
ajouterTest(exerciceId, "isSafeInteger0", {
  entrees: ["0"],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "isSafeInteger0", {
  entrees: [0],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "isSafeInteger0", {
  entrees: [-256443645756],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "isSafeInteger0", {
  entrees: [256443645756],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "isSafeInteger0", {
  entrees: [9007199254740991],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "isSafeInteger0", {
  entrees: [-9007199254740991],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "isSafeInteger0", {
  entrees: [9007199254740992],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "isSafeInteger0", {
  entrees: [-9007199254740992],
  descriptionEntrees,
  sortie: false,
});

// Exercice 4
exerciceId++;
descriptionEntrees = ["chaine"];
ajouterTest(exerciceId, "parseFloat0", {
  entrees: ["8.4°C ce matin..."],
  descriptionEntrees,
  sortie: 8.4,
});
ajouterTest(exerciceId, "parseFloat0", {
  entrees: ["La réponse est 42... ou NaN"],
  descriptionEntrees,
  sortie: NaN,
});
ajouterTest(exerciceId, "parseFloat0", {
  entrees: ["2 buts en 30 min !"],
  descriptionEntrees,
  sortie: 2,
});

// Exercice 5
exerciceId++;
descriptionEntrees = ["chaine"];
ajouterTest(exerciceId, "parseInt0", {
  entrees: ["8.4°C ce matin..."],
  descriptionEntrees,
  sortie: 8,
});
ajouterTest(exerciceId, "parseInt0", {
  entrees: ["La réponse est 42... ou NaN"],
  descriptionEntrees,
  sortie: NaN,
});
ajouterTest(exerciceId, "parseInt0", {
  entrees: ["2 buts en 30 min !"],
  descriptionEntrees,
  sortie: 2,
});

// Exercice 6
exerciceId++;
descriptionEntrees = ["binaire"];
ajouterTest(exerciceId, "parseInt1", {
  entrees: ["101010"],
  descriptionEntrees,
  sortie: 42,
});
ajouterTest(exerciceId, "parseInt1", {
  entrees: ["10100111001"],
  descriptionEntrees,
  sortie: 1337,
});

// Exercice 7
exerciceId++;
descriptionEntrees = ["hexa"];
ajouterTest(exerciceId, "parseInt2", {
  entrees: ["2a"],
  descriptionEntrees,
  sortie: 42,
});
ajouterTest(exerciceId, "parseInt2", {
  entrees: ["539"],
  descriptionEntrees,
  sortie: 1337,
});

// Exercice 8
exerciceId++;
descriptionEntrees = ["hexa"];
ajouterTest(exerciceId, "toFixed0", {
  entrees: [42.1337],
  descriptionEntrees,
  sortie: "42.134",
});
ajouterTest(exerciceId, "toFixed0", {
  entrees: [356.23553],
  descriptionEntrees,
  sortie: "356.236",
});
ajouterTest(exerciceId, "toFixed0", {
  entrees: [1.61803],
  descriptionEntrees,
  sortie: "1.618",
});

// Exercice 9
exerciceId++;
descriptionEntrees = ["valeur"];
ajouterTest(exerciceId, "toString0", {
  entrees: [42.1337],
  descriptionEntrees,
  sortie: "42.1337",
});
ajouterTest(exerciceId, "toString0", {
  entrees: [1337],
  descriptionEntrees,
  sortie: "1337",
});

// Exercice 10
exerciceId++;
descriptionEntrees = ["nombre"];
ajouterTest(exerciceId, "toString1", {
  entrees: [42],
  descriptionEntrees,
  sortie: "101010",
});
ajouterTest(exerciceId, "toString1", {
  entrees: [1337],
  descriptionEntrees,
  sortie: "10100111001",
});

// Exercice 10
exerciceId++;
descriptionEntrees = ["nombre"];
ajouterTest(exerciceId, "toString2", {
  entrees: [42],
  descriptionEntrees,
  sortie: "2a",
});
ajouterTest(exerciceId, "toString2", {
  entrees: [1337],
  descriptionEntrees,
  sortie: "539",
});

// Exercice 11
exerciceId++;
descriptionEntrees = ["secret"];
ajouterTest(exerciceId, "decodeur", {
  entrees: ["0110011001110010"],
  descriptionEntrees,
  sortie: "fr",
});
ajouterTest(exerciceId, "decodeur", {
  entrees: ["01001010011000010111011001100001010100110110001101110010011010010111000001110100"],
  descriptionEntrees,
  sortie: "JavaScript",
});

// Exercice 12
exerciceId++;
descriptionEntrees = ["message"];
ajouterTest(exerciceId, "encodeur", {
  entrees: ["fr"],
  descriptionEntrees,
  sortie: "0110011001110010",
});
ajouterTest(exerciceId, "encodeur", {
  entrees: ["JavaScript"],
  descriptionEntrees,
  sortie: "01001010011000010111011001100001010100110110001101110010011010010111000001110100",
});

// Exercice 12
exerciceId++;
descriptionEntrees = ["commandes"];
ajouterTest(exerciceId, "totalPanier", {
  entrees: ["10 pommes,20 cerises,35 pommes,12 bananes,30 cerises,6 bananes"],
  descriptionEntrees,
  sortie: "45 pommes,50 cerises,18 bananes",
});
ajouterTest(exerciceId, "totalPanier", {
  entrees: ["2 melons,12 oranges,35 pommes,1 melons,0 bananes,5 oranges,0 bananes,30 cerises"],
  descriptionEntrees,
  sortie: "3 melons,17 oranges,35 pommes,30 cerises",
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