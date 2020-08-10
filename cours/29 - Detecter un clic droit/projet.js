/* Détecter un clic droit */

// Documentation addEventListener, liste des évènements (en anglais)

/* Test : l'ordre d'exécution des évènements */

const zoneDeClic = document.querySelector('#zone-de-clic');

// zoneDeClic.addEventListener('auxclick', function(evenement) {
//   console.log("2️⃣ auxclick");
// });

// zoneDeClic.addEventListener('click', function(evenement) {
//   console.log("✅ click");
// });

// zoneDeClic.addEventListener('contextmenu', function(evenement) {
//   console.log("📕 contextmenu");
// });

// zoneDeClic.addEventListener('mousedown', function(evenement) {
//   console.log("⬇️ mousedown");
// });

// zoneDeClic.addEventListener('mouseup', function(evenement) {
//   console.log("⬆️ mouseup");
// });

/* Détecter le clic droit de différentes façons */

// Avec l'évènement "contextmenu"
// zoneDeClic.addEventListener('contextmenu', function(evenement) {
//   evenement.preventDefault();
//   console.log("🎉 clic droit détécté (📕 contextmenu)");
// });

// Avec l'évènement "mousedown"
// zoneDeClic.addEventListener('mousedown', function(evenement) {
//   if (evenement.button === 2) {
//     console.log("🎉 clic droit détécté (⬇️ mousedown)");
//   }
// });

// Avec l'évènement "auxclick"
// zoneDeClic.addEventListener('auxclick', function(evenement) {
//   console.log("🎉 clic droit détécté (2️⃣ auxclick)");
// });

/* Quelle méthode choisir ? */
// Direction : caniuse.com

/* Prochain exercice */