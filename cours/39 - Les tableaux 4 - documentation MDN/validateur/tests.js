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
let descriptionEntrees = ["tableau1", "tableau2"];
ajouterTest(0, "concat0", {
  entrees: [[4,5,6], [1,2,3]],
  descriptionEntrees,
  sortie: [4,5,6,1,2,3],
});
ajouterTest(0, "concat0", {
  entrees: [[1,2,3], [4,5,6]],
  descriptionEntrees,
  sortie: [1,2,3,4,5,6],
});

// Exercice 1
descriptionEntrees = ["tableau", "valeur1", "valeur2", "valeur3"];
ajouterTest(1, "concat1", {
  entrees: [[4,5,6], 1, 2, 3],
  descriptionEntrees,
  sortie: [4,5,6,1,2,3],
});
ajouterTest(1, "concat1", {
  entrees: [[1,2,3], "a", "b", "c"],
  descriptionEntrees,
  sortie: [1,2,3,"a","b","c"],
});
ajouterTest(1, "concat1", {
  entrees: [[1,2,3], ["bob", "jean"], 42, 10],
  descriptionEntrees,
  sortie: [1,2,3,"bob","jean",42,10],
});

// Exercice 2
descriptionEntrees = ["tableau", "valeur"];
ajouterTest(2, "fill0", {
  entrees: [[1,2,3], "a"],
  descriptionEntrees,
  sortie: ["a","a","a"],
});
ajouterTest(2, "fill0", {
  entrees: [[1,2,3], 0],
  descriptionEntrees,
  sortie: [0,0,0],
});

// Exercice 3
descriptionEntrees = ["tableau", "valeur", "index"];
ajouterTest(3, "fill1", {
  entrees: [[1,2,3], "a", 1],
  descriptionEntrees,
  sortie: [1,"a","a"],
});
ajouterTest(3, "fill1", {
  entrees: [["a","b","c","d","e"], "z", 3],
  descriptionEntrees,
  sortie: ["a","b","c","z","z"],
});

// Exercice 4
descriptionEntrees = ["tableau", "valeur", "debut", "fin"];
ajouterTest(4, "fill2", {
  entrees: [[1, 2, 3, 4, 5], 42, 1, 10],
  descriptionEntrees,
  sortie: [1, 42, 42, 42, 42],
});
ajouterTest(4, "fill2", {
  entrees: [[1, 2, 3, 4, 5], 0, 1, 3],
  descriptionEntrees,
  sortie: [1, 0, 0, 0, 5],
});

// Exercice 5
descriptionEntrees = ["tableau", "valeur"];
ajouterTest(5, "fill3", {
  entrees: [[1, 2, 3, 4, 5], 42],
  descriptionEntrees,
  sortie: [1, 2, 42, 42, 42],
});
ajouterTest(5, "fill3", {
  entrees: [['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'z'],
  descriptionEntrees,
  sortie: ['a', 'b', 'c', 'd', 'z', 'z', 'z'],
});

// Exercice 6
descriptionEntrees = ["tableau", "valeur"];
ajouterTest(6, "includes0", {
  entrees: [['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'z'],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(6, "includes0", {
  entrees: [[1, 2, 3, 4], 2],
  descriptionEntrees,
  sortie: true,
});

// Exercice 7
descriptionEntrees = ["tableau", "valeur", "debut"];
ajouterTest(7, "includes1", {
  entrees: [['a', 'b', 'c', 'd', 'e'], 'b', 2],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(7, "includes1", {
  entrees: [[1, 2, 3, 4], 3, 1],
  descriptionEntrees,
  sortie: true,
});

// Exercice 8
descriptionEntrees = ["tableau", "valeur"];
ajouterTest(8, "includes2", {
  entrees: [['a', 'b', 'c', 'd', 'e', 'f'], 'b'],
  descriptionEntrees,
  sortie: false,
});
ajouterTest(8, "includes2", {
  entrees: [[1, 2, 3, 4, 5, 6], 3],
  descriptionEntrees,
  sortie: true,
});

// Exercice 9
descriptionEntrees = ["tableau", "valeur"];
ajouterTest(9, "indexOf0", {
  entrees: [['a', 'b', 'c', 'd', 'e', 'f'], 'z'],
  descriptionEntrees,
  sortie: -1,
});
ajouterTest(9, "indexOf0", {
  entrees: [[1, 2, 3, 4, 5, 6], 5],
  descriptionEntrees,
  sortie: 4,
});

// Exercice 10
descriptionEntrees = ["tableau", "valeur", "debut"];
ajouterTest(10, "indexOf1", {
  entrees: [['a', 'b', 'c', 'd', 'e', 'f'], 'd', 4],
  descriptionEntrees,
  sortie: -1,
});
ajouterTest(10, "indexOf1", {
  entrees: [[1, 2, 3, 4, 5, 6], 3, 2],
  descriptionEntrees,
  sortie: 2,
});

// Exercice 11
descriptionEntrees = ["tableau", "valeur", "debut"];
ajouterTest(11, "indexOf2", {
  entrees: [['a', 'b', 'c', 'd', 'e', 'f'], 'd'],
  descriptionEntrees,
  sortie: -1,
});
ajouterTest(11, "indexOf2", {
  entrees: [[1, 2, 3, 4, 5, 6], 5],
  descriptionEntrees,
  sortie: 4,
});

// Exercice 12
descriptionEntrees = ["tableau"];
ajouterTest(12, "join0", {
  entrees: [[1,2,3,4]],
  descriptionEntrees,
  sortie: "1,2,3,4",
});
ajouterTest(12, "join0", {
  entrees: [["pierre", "papier", "ciseaux"]],
  descriptionEntrees,
  sortie: "pierre,papier,ciseaux",
});

// Exercice 13
descriptionEntrees = ["tableau", "separateur"];
ajouterTest(13, "join1", {
  entrees: [[1,2,3,4], " "],
  descriptionEntrees,
  sortie: "1 2 3 4",
});
ajouterTest(13, "join1", {
  entrees: [["pierre", "papier", "ciseaux"], " ou "],
  descriptionEntrees,
  sortie: "pierre ou papier ou ciseaux",
});

// Exercice 14
descriptionEntrees = ["tableau", "valeur"];
ajouterTest(14, "lastIndexOf0", {
  entrees: [[1,2,3,4,1,2,3,4], 12],
  descriptionEntrees,
  sortie: -1,
});
ajouterTest(14, "lastIndexOf0", {
  entrees: [[1,2,3,4,1,2,3,4], 2],
  descriptionEntrees,
  sortie: 5,
});
ajouterTest(14, "lastIndexOf0", {
  entrees: [['a','b','c','a','d'], 'a'],
  descriptionEntrees,
  sortie: 3,
});

// Exercice 15
descriptionEntrees = ["tableau", "valeur"];
ajouterTest(15, "lastIndexOf1", {
  entrees: [['a','b','c','a','a'], 'a'],
  descriptionEntrees,
  sortie: 3,
});
ajouterTest(15, "lastIndexOf1", {
  entrees: [[1,2,3,4,1,2,3,4], 12],
  descriptionEntrees,
  sortie: -1,
});
ajouterTest(15, "lastIndexOf1", {
  entrees: [[1,2,2,4,2,2,2], 2],
  descriptionEntrees,
  sortie: 2,
});

// Exercice 16
descriptionEntrees = ["tableau", "valeur"];
ajouterTest(16, "lastIndexOf2", {
  entrees: [['a','b','c','a','b'], 'a'],
  descriptionEntrees,
  sortie: 0,
});
ajouterTest(16, "lastIndexOf2", {
  entrees: [[1,2,3,4,1,2,3,4], 12],
  descriptionEntrees,
  sortie: -1,
});
ajouterTest(16, "lastIndexOf2", {
  entrees: [[1,2,2,4,2,2,2], 2],
  descriptionEntrees,
  sortie: 4,
});

// Exercice 17
descriptionEntrees = ["tableau"];
ajouterTest(17, "pop0", {
  entrees: [['a','b','c','d','e']],
  descriptionEntrees,
  sortie: 'e',
});
ajouterTest(17, "pop0", {
  entrees: [[1,2,3,4]],
  descriptionEntrees,
  sortie: 4,
});

// Exercice 18
descriptionEntrees = ["tableau"];
ajouterTest(18, "pop1", {
  entrees: [['a','b','c','d','e']],
  descriptionEntrees,
  sortie: ['a','b','c','d'],
});
ajouterTest(18, "pop1", {
  entrees: [[1,2,3,4]],
  descriptionEntrees,
  sortie: [1,2,3],
});

// Exercice 19
descriptionEntrees = ["tableau", "valeur"];
ajouterTest(19, "push0", {
  entrees: [['a','b','c','d','e'], 'f'],
  descriptionEntrees,
  sortie: ['a','b','c','d','e','f'],
});
ajouterTest(19, "push0", {
  entrees: [[1,2,3,4], 5],
  descriptionEntrees,
  sortie: [1,2,3,4,5],
});

// Exercice 20
descriptionEntrees = ["tableau", "valeur1", "valeur2"];
ajouterTest(20, "push1", {
  entrees: [['a','b','c','d','e'], 'f', 'g'],
  descriptionEntrees,
  sortie: ['a','b','c','d','e','f','g'],
});
ajouterTest(20, "push1", {
  entrees: [[1,2,3,4], 5, 6],
  descriptionEntrees,
  sortie: [1,2,3,4,5,6],
});

// Exercice 21
descriptionEntrees = ["tableau"];
ajouterTest(21, "reverse0", {
  entrees: [['a','b','c','d','e']],
  descriptionEntrees,
  sortie: ['e','d','c','b','a'],
});
ajouterTest(21, "reverse0", {
  entrees: [[1,2,3,4]],
  descriptionEntrees,
  sortie: [4,3,2,1],
});

// Exercice 22
descriptionEntrees = ["tableau"];
ajouterTest(22, "shift0", {
  entrees: [['a','b','c','d','e']],
  descriptionEntrees,
  sortie: 'a',
});
ajouterTest(22, "shift0", {
  entrees: [[1,2,3,4]],
  descriptionEntrees,
  sortie: 1,
});

// Exercice 23
descriptionEntrees = ["tableau"];
ajouterTest(23, "shift1", {
  entrees: [['a','b','c','d','e']],
  descriptionEntrees,
  sortie: ['b','c','d','e'],
});
ajouterTest(23, "shift1", {
  entrees: [[1,2,3,4]],
  descriptionEntrees,
  sortie: [2,3,4],
});

// Exercice 24
descriptionEntrees = ["tableau"];
ajouterTest(24, "slice0", {
  entrees: [['a','b','c','d','e'], 2],
  descriptionEntrees,
  sortie: ['c','d','e'],
});
ajouterTest(24, "slice0", {
  entrees: [[1,2,3,4], 2],
  descriptionEntrees,
  sortie: [3,4],
});

// Exercice 25
descriptionEntrees = ["tableau", "debut", "fin"];
ajouterTest(25, "slice1", {
  entrees: [['a','b','c','d','e'], 1, 4],
  descriptionEntrees,
  sortie: ['b','c','d'],
});
ajouterTest(25, "slice1", {
  entrees: [[1,2,3,4,5,6,7], 2, 5],
  descriptionEntrees,
  sortie: [3,4,5],
});

// Exercice 26
descriptionEntrees = ["tableau"];
ajouterTest(26, "slice2", {
  entrees: [['a','b','c','d','e']],
  descriptionEntrees,
  sortie: ['c','d','e'],
});
ajouterTest(26, "slice2", {
  entrees: [[1,2,3,4,5,6,7]],
  descriptionEntrees,
  sortie: [5,6,7],
});

// Exercice 27
descriptionEntrees = ["tableau"];
ajouterTest(27, "slice3", {
  entrees: [['a','b','c','d','e']],
  descriptionEntrees,
  sortie: ['c'],
});
ajouterTest(27, "slice3", {
  entrees: [[1,2,3,4,5,6,7]],
  descriptionEntrees,
  sortie: [3,4,5],
});

// Exercice 28
descriptionEntrees = ["tableau"];
ajouterTest(28, "splice0", {
  entrees: [['a','b','c','d','e']],
  descriptionEntrees,
  sortie: ['a','b','d','e'],
});
ajouterTest(28, "splice0", {
  entrees: [[1,2,3,4,5,6,7,8]],
  descriptionEntrees,
  sortie: [1,2,4,5,6,7,8],
});

// Exercice 29
descriptionEntrees = ["tableau"];
ajouterTest(29, "splice1", {
  entrees: [['a','b','c','d','e']],
  descriptionEntrees,
  sortie: ['a','e'],
});
ajouterTest(29, "splice1", {
  entrees: [[1,2,3,4,5,6,7,8]],
  descriptionEntrees,
  sortie: [1,5,6,7,8],
});

// Exercice 30
descriptionEntrees = ["tableau"];
ajouterTest(30, "splice2", {
  entrees: [['a','b','c','d','e']],
  descriptionEntrees,
  sortie: ['a','b','e'],
});
ajouterTest(30, "splice2", {
  entrees: [[1,2,3,4,5,6,7,8]],
  descriptionEntrees,
  sortie: [1,2,3,4,5,8],
});

// Exercice 31
descriptionEntrees = ["tableau", "debut", "valeur"];
ajouterTest(31, "splice3", {
  entrees: [['a','b','c','d','e'], 2, 'z'],
  descriptionEntrees,
  sortie: ['a','b','z','c','d','e'],
});
ajouterTest(31, "splice3", {
  entrees: [[1,2,3,4,5,6,7,8], 3, 42],
  descriptionEntrees,
  sortie: [1,2,3,42,4,5,6,7,8],
});

// Exercice 32
descriptionEntrees = ["tableau", "debut", "valeur1", "valeur2"];
ajouterTest(32, "splice4", {
  entrees: [['a','b','c','d','e'], 3, 'z', 'Z'],
  descriptionEntrees,
  sortie: ['a','b','c','z','Z','d','e'],
});
ajouterTest(32, "splice4", {
  entrees: [[1,2,3,4,5,6,7,8], 1, 42, 1337],
  descriptionEntrees,
  sortie: [1,42,1337,2,3,4,5,6,7,8],
});

// Exercice 33
descriptionEntrees = ["tableau", "valeur1", "valeur2"];
ajouterTest(33, "splice5", {
  entrees: [['a','b','c','d','e'], 'z', 'Z'],
  descriptionEntrees,
  sortie: ['a','b','c','z','Z','d','e'],
});
ajouterTest(33, "splice5", {
  entrees: [[1,2,3,4,5,6,7,8], 42, 1337],
  descriptionEntrees,
  sortie: [1,2,3,4,5,6,42,1337,7,8],
});

// Exercice 34
descriptionEntrees = ["tableau", "valeur1", "valeur2"];
ajouterTest(34, "splice6", {
  entrees: [['a','b','c','d','e'], 'z', 'Z'],
  descriptionEntrees,
  sortie: ['a','z','Z','e'],
});
ajouterTest(34, "splice6", {
  entrees: [[1,2,3,4,5,6,7,8], 42, 1337],
  descriptionEntrees,
  sortie: [1,42,1337,5,6,7,8],
});

// Exercice 35
descriptionEntrees = ["tableau", "valeur"];
ajouterTest(35, "unshift0", {
  entrees: [['a','b','c','d','e'], 'z'],
  descriptionEntrees,
  sortie: ['z','a','b','c','d','e'],
});
ajouterTest(35, "unshift0", {
  entrees: [[1,2,3,4,5,6,7,8], 42],
  descriptionEntrees,
  sortie: [42,1,2,3,4,5,6,7,8],
});

// Exercice 36
descriptionEntrees = ["tableau", "valeur1", "valeur2"];
ajouterTest(36, "unshift1", {
  entrees: [['a','b','c','d','e'], 'z', 'Z'],
  descriptionEntrees,
  sortie: ['z','Z','a','b','c','d','e'],
});
ajouterTest(36, "unshift1", {
  entrees: [[1,2,3,4,5,6,7,8], 42, 1337],
  descriptionEntrees,
  sortie: [42,1337,1,2,3,4,5,6,7,8],
});

/********************/
/* Exercices finaux */
/********************/

// Exercice 37
descriptionEntrees = ["tableau1", "tableau2"];
ajouterTest(37, "demitour", {
  entrees: [[], []],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(37, "demitour", {
  entrees: [['a'], [1]],
  descriptionEntrees,
  sortie: [1, 'a'],
});
ajouterTest(37, "demitour", {
  entrees: [[1,2,3], ["un", "deux", "trois"]],
  descriptionEntrees,
  sortie: ["trois", "deux", "un", 3, 2, 1],
});
ajouterTest(37, "demitour", {
  entrees: [[1,2,3], ['a','b','c']],
  descriptionEntrees,
  sortie: ['c','b','a',3,2,1],
});

// Exercice 38
descriptionEntrees = ["mot", "taille"];
ajouterTest(38, "remplissage", {
  entrees: [[], 3],
  descriptionEntrees,
  sortie: "###",
});
ajouterTest(38, "remplissage", {
  entrees: [['c','o','d','e'], 4],
  descriptionEntrees,
  sortie: "code",
});
ajouterTest(38, "remplissage", {
  entrees: [['c','o','d','e'], 5],
  descriptionEntrees,
  sortie: "#code",
});
ajouterTest(38, "remplissage", {
  entrees: [['c','o','d','e'], 8],
  descriptionEntrees,
  sortie: "####code",
});

// Exercice 39
descriptionEntrees = ["transmission", "sequence"];
ajouterTest(39, "extraction", {
  entrees: [['a','r','#','c','o','d','e','#','g','h','t'], '#'],
  descriptionEntrees,
  sortie: ['c','o','d','e'],
});
ajouterTest(39, "extraction", {
  entrees: [['#','c','o','d','e','#','g','h','t'], '#'],
  descriptionEntrees,
  sortie: ['c','o','d','e'],
});
ajouterTest(39, "extraction", {
  entrees: [['a','r','A','e','d','o','c','A','g','h','t'], 'A'],
  descriptionEntrees,
  sortie: ['e','d','o','c'],
});
ajouterTest(39, "extraction", {
  entrees: [['a','r','#','#','z'], '#'],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(39, "extraction", {
  entrees: [['a','r','#','c','o','d','e','#'], '#'],
  descriptionEntrees,
  sortie: ['c','o','d','e'],
});

// Exercice 40
descriptionEntrees = ["transmission", "sequence"];
ajouterTest(40, "camouflage", {
  entrees: [['a','r','#','c','o','d','e','#','g','h','t'], '#'],
  descriptionEntrees,
  sortie: ['a','r','#','#','#','#','#','#','g','h','t'],
});
ajouterTest(40, "camouflage", {
  entrees: [['#','c','o','d','e','#','g','h','t'], '#'],
  descriptionEntrees,
  sortie: ['#','#','#','#','#','#','g','h','t'],
});
ajouterTest(40, "camouflage", {
  entrees: [['a','r','A','e','d','o','c','A','g','h','t'], 'A'],
  descriptionEntrees,
  sortie: ['a','r','A','#','#','#','#','A','g','h','t'],
});
ajouterTest(40, "camouflage", {
  entrees: [['a','r','#','#','z'], '#'],
  descriptionEntrees,
  sortie: ['a','r','#','#','z'],
});
ajouterTest(40, "camouflage", {
  entrees: [['a','r','#','c','o','d','e','#'], '#'],
  descriptionEntrees,
  sortie: ['a','r','#','#','#','#','#','#'],
});

// Exercice 41
descriptionEntrees = ["transmission", "sequence"];
ajouterTest(41, "suppression", {
  entrees: [['a','r','#','c','o','d','e','#','g','h','t'], '#'],
  descriptionEntrees,
  sortie: ['a','r','#','#','g','h','t'],
});
ajouterTest(41, "suppression", {
  entrees: [['#','c','o','d','e','#','g','h','t'], '#'],
  descriptionEntrees,
  sortie: ['#','#','g','h','t'],
});
ajouterTest(41, "suppression", {
  entrees: [['a','r','A','e','d','o','c','A','g','h','t'], 'A'],
  descriptionEntrees,
  sortie: ['a','r','A','A','g','h','t'],
});
ajouterTest(41, "suppression", {
  entrees: [['a','r','#','#','z'], '#'],
  descriptionEntrees,
  sortie: ['a','r','#','#','z'],
});
ajouterTest(41, "suppression", {
  entrees: [['a','r','#','c','o','d','e','#'], '#'],
  descriptionEntrees,
  sortie: ['a','r','#','#'],
});

// Exercice 42
descriptionEntrees = ["tableau1", "tableau2"];
ajouterTest(42, "entrelacement", {
  entrees: [[], []],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(42, "entrelacement", {
  entrees: [['a'], [1]],
  descriptionEntrees,
  sortie: ['a',1],
});
ajouterTest(42, "entrelacement", {
  entrees: [['a','b','c'], [1,2,3]],
  descriptionEntrees,
  sortie: ['a',1,'b',2,'c',3],
});
ajouterTest(42, "entrelacement", {
  entrees: [[1,2,3], ["un", "deux", "trois"]],
  descriptionEntrees,
  sortie: [1,"un",2,"deux",3,"trois"],
});

// Exercice 43
descriptionEntrees = ["quantites", "valeurs"];
ajouterTest(43, "duplication", {
  entrees: [[0, 1], ['a','b']],
  descriptionEntrees,
  sortie: ['b'],
});
ajouterTest(43, "duplication", {
  entrees: [[2, 0], ['a','b']],
  descriptionEntrees,
  sortie: ['a','a'],
});
ajouterTest(43, "duplication", {
  entrees: [[1,0,3], ['a','b','c']],
  descriptionEntrees,
  sortie: ['a','c','c','c'],
});
ajouterTest(43, "duplication", {
  entrees: [[1,2,3], ['a','b','c']],
  descriptionEntrees,
  sortie: ['a','b','b','c','c','c'],
});

// Exercice 44
descriptionEntrees = ["selecteur", "liste"];
ajouterTest(44, "selection", {
  entrees: [[1,2,3,4,5], [10,20,30,40,50]],
  descriptionEntrees,
  sortie: [50,40,30,20,10],
});
ajouterTest(44, "selection", {
  entrees: [[1,2,3,4,5], [1,2,3,4,5]],
  descriptionEntrees,
  sortie: [1,2,3,4,5],
});
ajouterTest(44, "selection", {
  entrees: [[5,4,3,2,1], [1,2,3,4,5]],
  descriptionEntrees,
  sortie: [1,2,3,5,4],
});
ajouterTest(44, "selection", {
  entrees: [[1,2,3,4,5], [4,5,10,8,2,7]],
  descriptionEntrees,
  sortie: [7,4,2,8,5],
});
ajouterTest(44, "selection", {
  entrees: [[1,2,3,4,5], [10,20,3,6,70,50,4]],
  descriptionEntrees,
  sortie: [4,50,10,70,6],
});

// Exercice 45
descriptionEntrees = ["transmission", "sequence"];
ajouterTest(45, "extractionMultiple", {
  entrees: [[], '#'],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(45, "extractionMultiple", {
  entrees: [['#','#'], '#'],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(45, "extractionMultiple", {
  entrees: [['#','#','#','#'], '#'],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(45, "extractionMultiple", {
  entrees: [['a','r','c','o','d','e','t'], '#'],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(45, "extractionMultiple", {
  entrees: [['a','r','#','c','o','d','e','#','g','h','t'], '#'],
  descriptionEntrees,
  sortie: ['c','o','d','e'],
});
ajouterTest(45, "extractionMultiple", {
  entrees: [['#','c','#','z','#','o','#','a','#','d','#','t','#','e','#'], '#'],
  descriptionEntrees,
  sortie: ['c','o','d','e'],
});
ajouterTest(45, "extractionMultiple", {
  entrees: [['#','c','o','#','#','d','e','#'], '#'],
  descriptionEntrees,
  sortie: ['c','o','d','e'],
});
ajouterTest(45, "extractionMultiple", {
  entrees: [['A','c','o','A','A','d','e','A'], 'A'],
  descriptionEntrees,
  sortie: ['c','o','d','e'],
});
ajouterTest(45, "extractionMultiple", {
  entrees: [['#','J','a','v','a','S','c','r','i','p','t','#'], '#'],
  descriptionEntrees,
  sortie: ['J','a','v','a','S','c','r','i','p','t'],
});

// Exercice 46
descriptionEntrees = ["transmission", "sequence"];
ajouterTest(46, "extractionMultipleIncomplete", {
  entrees: [[], '#'],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(46, "extractionMultipleIncomplete", {
  entrees: [['#','#'], '#'],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(46, "extractionMultipleIncomplete", {
  entrees: [['#','#','#','#'], '#'],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(46, "extractionMultipleIncomplete", {
  entrees: [['a','r','c','o','d','e','t'], '#'],
  descriptionEntrees,
  sortie: [],
});
ajouterTest(46, "extractionMultipleIncomplete", {
  entrees: [['a','r','#','c','o','d','e','#','g','h','t'], '#'],
  descriptionEntrees,
  sortie: ['c','o','d','e'],
});
ajouterTest(46, "extractionMultipleIncomplete", {
  entrees: [['#','c','#','z','#','o','#','a','#','d','#','t','#','e','#'], '#'],
  descriptionEntrees,
  sortie: ['c','o','d','e'],
});
ajouterTest(46, "extractionMultipleIncomplete", {
  entrees: [['#','c','o','#','#','d','e','#'], '#'],
  descriptionEntrees,
  sortie: ['c','o','d','e'],
});
ajouterTest(46, "extractionMultipleIncomplete", {
  entrees: [['A','c','o','A','A','d','e','A'], 'A'],
  descriptionEntrees,
  sortie: ['c','o','d','e'],
});
ajouterTest(46, "extractionMultipleIncomplete", {
  entrees: [['#','J','a','v','a','S','c','r','i','p','t','#'], '#'],
  descriptionEntrees,
  sortie: ['J','a','v','a','S','c','r','i','p','t'],
});
ajouterTest(46, "extractionMultipleIncomplete", {
  entrees: [['a','#','c','o','d'], '#'],
  descriptionEntrees,
  sortie: ['c','o','d'],
});
ajouterTest(46, "extractionMultipleIncomplete", {
  entrees: [['a','#','c','o','#','g','#','d'], '#'],
  descriptionEntrees,
  sortie: ['c','o','d'],
});
ajouterTest(46, "extractionMultipleIncomplete", {
  entrees: [['a','#','c','o','#','r','#','d','e','#','#'], '#'],
  descriptionEntrees,
  sortie: ['c','o','d','e'],
});
ajouterTest(46, "extractionMultipleIncomplete", {
  entrees: [['#','c','o','#','r','#','d','e'], '#'],
  descriptionEntrees,
  sortie: ['c','o','d','e'],
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