/* Math */

/* Documentation MDN du type Math */

/* Méthodes simples à connaître, quelques exemples */
// Puissance : 5 à la puissance 3
console.log("5^3 =", Math.pow(5, 3));
console.log("5^3 =", 5 ** 3); // ES7

// Hypothénuse (et plus encore)
console.log("√(3² + 4²) =", Math.hypot(3, 4));
console.log("√(3² + 4² + 5² + 6²) =", Math.sqrt(3 ** 2 + 4 ** 2 + 5 ** 2 + 6 ** 2));
console.log("hypot(3, 4, 5, 6) =", Math.hypot(3, 4, 5, 6));

// Arrondi avec ceil ~= ciel ⛅️ (ciel, en haut, supérieur)
console.log("ceil(2.3) =", Math.ceil(2.3));

// Arrondi avec floor ~= Fleur 🌷 (sol, en bas, inférieur)
console.log("floor(2.3) =", Math.floor(2.3));

// Arrondi à l'entier le plus proche avec round
console.log("round(2.3) =", Math.round(2.3));
console.log("round(2.4999999) =", Math.round(2.4999999));
console.log("round(2.5) =", Math.round(2.5));
console.log("round(2.7) =", Math.round(2.7));

/* Exercices */

/* Prochaine leçon */