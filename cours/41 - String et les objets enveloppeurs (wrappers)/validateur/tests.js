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
let descriptionEntrees = ["chaine", "index"];
ajouterTest(exerciceId, "charAt0", {
  entrees: ["C++", 2],
  descriptionEntrees,
  sortie: "+",
});
ajouterTest(exerciceId, "charAt0", {
  entrees: ["JavaScript", 4],
  descriptionEntrees,
  sortie: "S",
});

// Exercice 1
exerciceId++;
descriptionEntrees = ["chaine1", "chaine2"];
ajouterTest(exerciceId, "concat0", {
  entrees: ["C", "++"],
  descriptionEntrees,
  sortie: "C++",
});
ajouterTest(exerciceId, "concat0", {
  entrees: ["Java", "Script", 4],
  descriptionEntrees,
  sortie: "JavaScript",
});

// Exercice 2
exerciceId++;
descriptionEntrees = ["chaine1", "chaine2", "chaine3"];
ajouterTest(exerciceId, "concat1", {
  entrees: ["Java", "Script", " est puissant"],
  descriptionEntrees,
  sortie: "JavaScript est puissant",
});
ajouterTest(exerciceId, "concat1", {
  entrees: ["Les Strings", " c'est ", "facile !"],
  descriptionEntrees,
  sortie: "Les Strings c'est facile !",
});

// Exercice 3
exerciceId++;
descriptionEntrees = ["chaine1", "chaine2", "chaine3"];
ajouterTest(exerciceId, "concat2", {
  entrees: ["JavaScript", " est le ", "Puissant"],
  descriptionEntrees,
  sortie: "Puissant est le JavaScript",
});
ajouterTest(exerciceId, "concat2", {
  entrees: ["Yoda", " parle ", "Comme ça"],
  descriptionEntrees,
  sortie: "Comme ça parle Yoda",
});

// Exercice 4
exerciceId++;
descriptionEntrees = ["chaine", "caractere"];
ajouterTest(exerciceId, "includes0", {
  entrees: ["JavaScript", "S"],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "includes0", {
  entrees: ["JavaScript", "s"],
  descriptionEntrees,
  sortie: false,
});

// Exercice 5
exerciceId++;
descriptionEntrees = ["chaine", "motif"];
ajouterTest(exerciceId, "includes1", {
  entrees: ["JavaScript", "Script"],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "includes1", {
  entrees: ["JavaScript", "script"],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "includes1", {
  entrees: ["Un peu de texte", "texte"],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "includes1", {
  entrees: ["Un peu de texte", "detexte"],
  descriptionEntrees,
  sortie: false,
});

// Exercice 6
exerciceId++;
descriptionEntrees = ["chaine", "caractere"];
ajouterTest(exerciceId, "includes2", {
  entrees: ["JavaScript", "p"],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "includes2", {
  entrees: ["JavaScript", "t"],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "includes2", {
  entrees: ["JavaScript", "i"],
  descriptionEntrees,
  sortie: false,
});

// Exercice 7
exerciceId++;
descriptionEntrees = ["chaine", "caractere"];
ajouterTest(exerciceId, "endsWith0", {
  entrees: ["JavaScript", "t"],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "endsWith0", {
  entrees: ["JavaScript", "p"],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "endsWith0", {
  entrees: ["JavaScript", "i"],
  descriptionEntrees,
  sortie: false,
});

// Exercice 8
exerciceId++;
descriptionEntrees = ["chaine", "fin"];
ajouterTest(exerciceId, "endsWith1", {
  entrees: ["JavaScript", "Script"],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "endsWith1", {
  entrees: ["JavaScript", "Scrip"],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "endsWith1", {
  entrees: ["JavaScript", "script"],
  descriptionEntrees,
  sortie: false,
});

// Exercice 9
exerciceId++;
descriptionEntrees = ["chaine", "fin"];
ajouterTest(exerciceId, "endsWith2", {
  entrees: ["JavaScript###", "Script"],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "endsWith2", {
  entrees: ["JavaScript####", "Script"],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "endsWith2", {
  entrees: ["JavaScript##", "Scriptt"],
  descriptionEntrees,
  sortie: false,
});

// Exercice 10
exerciceId++;
descriptionEntrees = ["chaine", "motif"];
ajouterTest(exerciceId, "indexOf0", {
  entrees: ["Java et JavaScript sont très différents", "Java"],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(exerciceId, "indexOf0", {
  entrees: ["Java et JavaScript sont très différents", "JavaScript"],
  descriptionEntrees,
  sortie: 8,
});
ajouterTest(exerciceId, "indexOf0", {
  entrees: ["Java et JavaScript sont très différents", "java"],
  descriptionEntrees,
  sortie: -1,
});

// Exercice 11
exerciceId++;
descriptionEntrees = ["chaine", "motif"];
ajouterTest(exerciceId, "indexOf1", {
  entrees: ["Java... et JavaScript sont très différents", "Java"],
  descriptionEntrees,
  sortie: 11,
});
ajouterTest(exerciceId, "indexOf1", {
  entrees: ["Java... et JavaScript sont très différents", "."],
  descriptionEntrees,
  sortie: 5,
});
ajouterTest(exerciceId, "indexOf1", {
  entrees: ["Java... et JavaScript sont très différents", "java"],
  descriptionEntrees,
  sortie: -1,
});

// Exercice 12
exerciceId++;
descriptionEntrees = ["chaine", "motif"];
ajouterTest(exerciceId, "indexOf2", {
  entrees: ["Java ou... JavaScript ?", "Java"],
  descriptionEntrees,
  sortie: 11,
});
ajouterTest(exerciceId, "indexOf2", {
  entrees: ["Java ou... JavaScript ?", "."],
  descriptionEntrees,
  sortie: 8,
});
ajouterTest(exerciceId, "indexOf2", {
  entrees: ["Java ou JavaScript ?", "java"],
  descriptionEntrees,
  sortie: -1,
});

// Exercice 13
exerciceId++;
descriptionEntrees = ["chaine", "motif"];
ajouterTest(exerciceId, "lastIndexOf0", {
  entrees: ["Java et JavaScript sont très différents", "Java"],
  descriptionEntrees,
  sortie: 8,
});
ajouterTest(exerciceId, "lastIndexOf0", {
  entrees: ["Java et JavaScript sont très différents", "t"],
  descriptionEntrees,
  sortie: 37,
});
ajouterTest(exerciceId, "lastIndexOf0", {
  entrees: ["Java et JavaScript sont très différents", "java"],
  descriptionEntrees,
  sortie: -1,
});

// Exercice 14
exerciceId++;
descriptionEntrees = ["chaine", "motif"];
ajouterTest(exerciceId, "lastIndexOf1", {
  entrees: ["Java ou JavaScript... Plutôt JavaScript !", "Java"],
  descriptionEntrees,
  sortie: 8,
});
ajouterTest(exerciceId, "lastIndexOf1", {
  entrees: ["Java ou JavaScript... Plutôt JavaScript !", "."],
  descriptionEntrees,
  sortie: 19,
});
ajouterTest(exerciceId, "lastIndexOf1", {
  entrees: ["Java ou JavaScript... Plutôt JavaScript !", "java"],
  descriptionEntrees,
  sortie: -1,
});

// Exercice 15
exerciceId++;
descriptionEntrees = ["mot1", "mot2"];
ajouterTest(exerciceId, "localeCompare0", {
  entrees: ["apprendre", "apprentissage"],
  descriptionEntrees,
  sortie: -1,
});
ajouterTest(exerciceId, "localeCompare0", {
  entrees: ["apprendre", "apprendre"],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(exerciceId, "localeCompare0", {
  entrees: ["apprendre", "appareil"],
  descriptionEntrees,
  sortie: 1,
});

// Exercice 16
exerciceId++;
descriptionEntrees = ["chaine", "longueur"];
ajouterTest(exerciceId, "padEnd0", {
  entrees: ["JavaScript", 12],
  descriptionEntrees,
  sortie: "JavaScript##",
});
ajouterTest(exerciceId, "padEnd0", {
  entrees: ["Java", 8],
  descriptionEntrees,
  sortie: "Java####",
});

// Exercice 17
exerciceId++;
descriptionEntrees = ["chaine", "longueur"];
ajouterTest(exerciceId, "padEnd1", {
  entrees: ["JavaScript", 20],
  descriptionEntrees,
  sortie: "JavaScriptOUIOUIOUIO",
});
ajouterTest(exerciceId, "padEnd1", {
  entrees: ["JavaScript", 12],
  descriptionEntrees,
  sortie: "JavaScriptOU",
});

// Exercice 18
exerciceId++;
descriptionEntrees = ["chaine", "longueur"];
ajouterTest(exerciceId, "padStart0", {
  entrees: ["JavaScript", 12],
  descriptionEntrees,
  sortie: "##JavaScript",
});
ajouterTest(exerciceId, "padStart0", {
  entrees: ["Java", 8],
  descriptionEntrees,
  sortie: "####Java",
});

// Exercice 19
exerciceId++;
descriptionEntrees = ["chaine", "longueur"];
ajouterTest(exerciceId, "padStart1", {
  entrees: ["JavaScript", 20],
  descriptionEntrees,
  sortie: "OUIOUIOUIOJavaScript",
});
ajouterTest(exerciceId, "padStart1", {
  entrees: ["JavaScript", 12],
  descriptionEntrees,
  sortie: "OUJavaScript",
});

// Exercice 20
exerciceId++;
descriptionEntrees = ["caractere", "longueur"];
ajouterTest(exerciceId, "repeat0", {
  entrees: ["X", 5],
  descriptionEntrees,
  sortie: "XXXXX",
});

// Exercice 21
exerciceId++;
descriptionEntrees = ["chaine", "repetitions"];
ajouterTest(exerciceId, "repeat1", {
  entrees: ["JavaScript", 2],
  descriptionEntrees,
  sortie: "JavaScriptJavaScript",
});

// Exercice 22
exerciceId++;
descriptionEntrees = ["chaine", "motif", "remplacement"];
ajouterTest(exerciceId, "replace0", {
  entrees: ["Le JavaScript et le JavaScript sont 2 langages de programmation", "JavaScript", "C++"],
  descriptionEntrees,
  sortie: "Le C++ et le JavaScript sont 2 langages de programmation",
});
ajouterTest(exerciceId, "replace0", {
  entrees: ["Java est génial !", "Java", "JavaScript"],
  descriptionEntrees,
  sortie: "JavaScript est génial !",
});
ajouterTest(exerciceId, "replace0", {
  entrees: ["C++ est super !", "C++", "JavaScript"],
  descriptionEntrees,
  sortie: "JavaScript est super !",
});

// Exercice 23
exerciceId++;
descriptionEntrees = ["chaine", "motif", "remplacement"];
ajouterTest(exerciceId, "replaceAll0", {
  entrees: ["Et si on codait en JavaScript ? En JavaScript ? T'es malade !", "JavaScript", "assembleur"],
  descriptionEntrees,
  sortie: "Et si on codait en assembleur ? En assembleur ? T'es malade !",
});
ajouterTest(exerciceId, "replaceAll0", {
  entrees: ["Java biensûr ! C'est le Java mon langage préféré !", "Java", "JavaScript"],
  descriptionEntrees,
  sortie: "JavaScript biensûr ! C'est le JavaScript mon langage préféré !",
});

// Exercice 24
exerciceId++;
descriptionEntrees = ["chaine", "debut"];
ajouterTest(exerciceId, "slice0", {
  entrees: ["Les méthodes de String sont pratiques !", 6],
  descriptionEntrees,
  sortie: "thodes de String sont pratiques !",
});
ajouterTest(exerciceId, "slice0", {
  entrees: ["Les méthodes de String sont pratiques !", 16],
  descriptionEntrees,
  sortie: "String sont pratiques !",
});

// Exercice 25
exerciceId++;
descriptionEntrees = ["chaine", "debut", "fin"];
ajouterTest(exerciceId, "slice1", {
  entrees: ["Les méthodes de String sont pratiques !", 4, 12],
  descriptionEntrees,
  sortie: "méthodes",
});
ajouterTest(exerciceId, "slice1", {
  entrees: ["Les méthodes de String sont pratiques !", 16, 22],
  descriptionEntrees,
  sortie: "String",
});

// Exercice 26
exerciceId++;
descriptionEntrees = ["chaine", "nombre"];
ajouterTest(exerciceId, "slice2", {
  entrees: ["fichier.html", 4],
  descriptionEntrees,
  sortie: "html",
});
ajouterTest(exerciceId, "slice2", {
  entrees: ["script.js", 2],
  descriptionEntrees,
  sortie: "js",
});

// Exercice 27
exerciceId++;
descriptionEntrees = ["chaine"];
ajouterTest(exerciceId, "slice3", {
  entrees: ["JavaScript"],
  descriptionEntrees,
  sortie: "aScr",
});
ajouterTest(exerciceId, "slice3", {
  entrees: ["Persévérance"],
  descriptionEntrees,
  sortie: "sévéra",
});

// Exercice 28
exerciceId++;
descriptionEntrees = ["chaine", "debut"];
ajouterTest(exerciceId, "slice4", {
  entrees: ["JavaScript", 2],
  descriptionEntrees,
  sortie: "vaScrip",
});
ajouterTest(exerciceId, "slice4", {
  entrees: ["Persévérance", 3],
  descriptionEntrees,
  sortie: "sévéranc",
});

// Exercice 29
exerciceId++;
descriptionEntrees = ["chaine", "debut"];
ajouterTest(exerciceId, "slice5", {
  entrees: ["Crier"],
  descriptionEntrees,
  sortie: "Cri",
});
ajouterTest(exerciceId, "slice5", {
  entrees: ["Persévérance"],
  descriptionEntrees,
  sortie: "ran",
});

// Exercice 30
exerciceId++;
descriptionEntrees = ["chaine"];
ajouterTest(exerciceId, "split0", {
  entrees: ["JavaScript"],
  descriptionEntrees,
  sortie: ['J','a','v','a','S','c','r','i','p','t'],
});

// Exercice 31
exerciceId++;
descriptionEntrees = ["chaine"];
ajouterTest(exerciceId, "split1", {
  entrees: ["Split est très pratique pour convertir une phrase en tableau"],
  descriptionEntrees,
  sortie: ["Split","est","très","pratique","pour","convertir","une","phrase","en","tableau"],
});

// Exercice 32
exerciceId++;
descriptionEntrees = ["chaine", "max"];
ajouterTest(exerciceId, "split2", {
  entrees: ["Split est très pratique pour convertir une phrase en tableau", 6],
  descriptionEntrees,
  sortie: ["Split","est","très","pratique","pour","convertir"],
});
ajouterTest(exerciceId, "split2", {
  entrees: ["Split est très pratique pour convertir une phrase en tableau", 4],
  descriptionEntrees,
  sortie: ["Split","est","très","pratique"],
});

// Exercice 33
exerciceId++;
descriptionEntrees = ["csv", "separateur"];
ajouterTest(exerciceId, "split3", {
  entrees: ["12,14,20,16,8,17", ','],
  descriptionEntrees,
  sortie: ['12','14','20','16','8','17'],
});
ajouterTest(exerciceId, "split3", {
  entrees: ["Janvier;Février;Mars;Avril;Mai;Juin", ';'],
  descriptionEntrees,
  sortie: ["Janvier","Février","Mars","Avril","Mai","Juin"],
});

// Exercice 34
exerciceId++;
descriptionEntrees = ["chaine", "motif"];
ajouterTest(exerciceId, "startsWith0", {
  entrees: ["JavaScript", 'Java'],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "startsWith0", {
  entrees: ["JavaScript", 'java'],
  descriptionEntrees,
  sortie: false,
});

// Exercice 35
exerciceId++;
descriptionEntrees = ["chaine", "motif"];
ajouterTest(exerciceId, "startsWith1", {
  entrees: ["JavaScript", 'Script'],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "startsWith1", {
  entrees: ["JavaScript", 'script'],
  descriptionEntrees,
  sortie: false,
});

// Exercice 36
exerciceId++;
descriptionEntrees = ["chaine"];
ajouterTest(exerciceId, "toLowerCase0", {
  entrees: ["C++"],
  descriptionEntrees,
  sortie: "c++",
});
ajouterTest(exerciceId, "toLowerCase0", {
  entrees: ["JavaScript"],
  descriptionEntrees,
  sortie: "javascript",
});

// Exercice 37
exerciceId++;
descriptionEntrees = ["chaine"];
ajouterTest(exerciceId, "toUpperCase0", {
  entrees: ["c++"],
  descriptionEntrees,
  sortie: "C++",
});
ajouterTest(exerciceId, "toUpperCase0", {
  entrees: ["JavaScript"],
  descriptionEntrees,
  sortie: "JAVASCRIPT",
});

// Exercice 38
exerciceId++;
descriptionEntrees = ["chaine"];
ajouterTest(exerciceId, "trim0", {
  entrees: ["    C++       "],
  descriptionEntrees,
  sortie: "C++",
});
ajouterTest(exerciceId, "trim0", {
  entrees: ["   JavaScript "],
  descriptionEntrees,
  sortie: "JavaScript",
});

// Exercice 39
exerciceId++;
descriptionEntrees = ["chaine"];
ajouterTest(exerciceId, "trimStart0", {
  entrees: ["    C++       "],
  descriptionEntrees,
  sortie: "C++       ",
});
ajouterTest(exerciceId, "trimStart0", {
  entrees: ["   JavaScript "],
  descriptionEntrees,
  sortie: "JavaScript ",
});

// Exercice 40
exerciceId++;
descriptionEntrees = ["chaine"];
ajouterTest(exerciceId, "trimEnd0", {
  entrees: ["    C++       "],
  descriptionEntrees,
  sortie: "    C++",
});
ajouterTest(exerciceId, "trimEnd0", {
  entrees: ["   JavaScript "],
  descriptionEntrees,
  sortie: "   JavaScript",
});

// Exercice 41
exerciceId++;
descriptionEntrees = ["jauge"];
ajouterTest(exerciceId, "verifierJauge", {
  entrees: ["####  "],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "verifierJauge", {
  entrees: ["####   "],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "verifierJauge", {
  entrees: ["###    "],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "verifierJauge", {
  entrees: ["###   "],
  descriptionEntrees,
  sortie: true,
});
ajouterTest(exerciceId, "verifierJauge", {
  entrees: ["##    "],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "verifierJauge", {
  entrees: ["##            "],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(exerciceId, "verifierJauge", {
  entrees: ["#######  "],
  descriptionEntrees,
  sortie: true,
});

// Exercice 42
exerciceId++;
descriptionEntrees = ["pourcentage"];
for (let p = 0; p <= 10; p++) {
  ajouterTest(exerciceId, "creerJauge", {
    entrees: [p * 10],
    descriptionEntrees,
    sortie: "#".repeat(p).padEnd(10, " "),
  });
}

// Exercice 43
exerciceId++;
descriptionEntrees = ["phrase"];
ajouterTest(exerciceId, "compteurVoyelles", {
  entrees: ["apprendre pour progresser"],
  descriptionEntrees,
  sortie: 8,
});
ajouterTest(exerciceId, "compteurVoyelles", {
  entrees: ["la cle, c'est de perseverer"],
  descriptionEntrees,
  sortie: 8,
});
ajouterTest(exerciceId, "compteurVoyelles", {
  entrees: ["zdftghtrqklpmnbvg"],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(exerciceId, "compteurVoyelles", {
  entrees: ["un peu chaque jour pour memoriser"],
  descriptionEntrees,
  sortie: 14,
});

// Exercice 44
exerciceId++;
descriptionEntrees = ["phrase"];
ajouterTest(exerciceId, "compteurConsonnes", {
  entrees: ["apprendre pour progresser"],
  descriptionEntrees,
  sortie: 15,
});
ajouterTest(exerciceId, "compteurConsonnes", {
  entrees: ["la cle, c'est de perseverer"],
  descriptionEntrees,
  sortie: 13,
});
ajouterTest(exerciceId, "compteurConsonnes", {
  entrees: ["zdftghtrqklpmnbvg"],
  descriptionEntrees,
  sortie: 17,
});
ajouterTest(exerciceId, "compteurConsonnes", {
  entrees: ["un peu chaque jour pour memoriser"],
  descriptionEntrees,
  sortie: 14,
});

// Exercice 45
exerciceId++;
descriptionEntrees = ["chaine"];
ajouterTest(exerciceId, "kebabCase", {
  entrees: ["liste noeuds HTML"],
  descriptionEntrees,
  sortie: "liste-noeuds-html",
});
ajouterTest(exerciceId, "kebabCase", {
  entrees: ["Liste des items selection"],
  descriptionEntrees,
  sortie: "liste-des-items-selection",
});

// Exercice 46
exerciceId++;
descriptionEntrees = ["chaine"];
ajouterTest(exerciceId, "camelCase", {
  entrees: ["liste noeuds HTML"],
  descriptionEntrees,
  sortie: "listeNoeudsHtml",
});
ajouterTest(exerciceId, "kebabCase", {
  entrees: ["Liste des items selection"],
  descriptionEntrees,
  sortie: "listeDesItemsSelection",
});

// Exercice 47
exerciceId++;
descriptionEntrees = ["liste"];
ajouterTest(exerciceId, "triDeMots", {
  entrees: ["air,eau,feu,terre,oui,non,ame"],
  descriptionEntrees,
  sortie: "eau,oui,ame",
});
ajouterTest(exerciceId, "triDeMots", {
  entrees: ["exercice,courage,volley,penny,amy"],
  descriptionEntrees,
  sortie: "exercice,amy",
});

// Exercice 48
exerciceId++;
descriptionEntrees = ["liste"];
ajouterTest(exerciceId, "legumes", {
  entrees: ["carotte,pomme,cerise,haricot,chou,poire"],
  descriptionEntrees,
  sortie: "carotte,haricot,chou",
});
ajouterTest(exerciceId, "legumes", {
  entrees: ["pomme,aubergine,chou,haricot,pomme,poire"],
  descriptionEntrees,
  sortie: "aubergine,chou,haricot",
});

// Exercice 49
exerciceId++;
descriptionEntrees = ["secret"];
ajouterTest(exerciceId, "decodeur", {
  entrees: ["fsihgE24TfsE#Efsf##J'41m3-813n-l3-j5,-3t-v0u5-?##fSH345Zgze"],
  descriptionEntrees,
  sortie: "J'aime bien le js, et vous ?",
});
ajouterTest(exerciceId, "decodeur", {
  entrees: ["fsihgE24TfsE#Efsf##L3-J4v45cr1pt,-c'35t-834u-!##fSH345Zgze"],
  descriptionEntrees,
  sortie: "Le Javascript, c'est beau !",
});

// Exercice 50
exerciceId++;
descriptionEntrees = ["liste"];
ajouterTest(exerciceId, "extraireNoms", {
  entrees: ["nom:redocemia;prénom:tom,nom:dusse;prénom:jean-claude"],
  descriptionEntrees,
  sortie: "REDOCEMIA,DUSSE",
});
ajouterTest(exerciceId, "extraireNoms", {
  entrees: ["prénom:tom;nom:redocemia,nom:dusse;prénom:jean-claude"],
  descriptionEntrees,
  sortie: "REDOCEMIA,DUSSE",
});

// Exercice 51
exerciceId++;
descriptionEntrees = ["liste"];
ajouterTest(exerciceId, "tableur", {
  entrees: ["Tom REDOCEMIA,Jean-Claude DUSSE"],
  descriptionEntrees,
  sortie: `     Prénom         NOM
        Tom   REDOCEMIA
Jean-Claude       DUSSE`,
});
ajouterTest(exerciceId, "tableur", {
  entrees: ["Linus TORVALDS,Bill GATES,Ada LOVELACE"],
  descriptionEntrees,
  sortie: `Prénom        NOM
 Linus   TORVALDS
  Bill      GATES
   Ada   LOVELACE`,
});

// Exercice 52
exerciceId++;
descriptionEntrees = ["liste"];
ajouterTest(exerciceId, "villeOuPays", {
  entrees: ["parIS, royaume-UNI,ITALIE ,berlin,franCE"],
  descriptionEntrees,
  sortie: "VILLE:Paris,PAYS:Royaume-Uni,PAYS:Italie,VILLE:Berlin,PAYS:France",
});
ajouterTest(exerciceId, "villeOuPays", {
  entrees: ["roME, AlleMagne , londres, BERLIN"],
  descriptionEntrees,
  sortie: "VILLE:Rome,PAYS:Allemagne,VILLE:Londres,VILLE:Berlin",
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
  return valeur;
}

function comparerSimplement(valeur1, valeur2) {
  if (typeof valeur1 !== typeof valeur2) return false;

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