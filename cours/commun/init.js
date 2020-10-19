/*
 * N'hésitez pas à jeter un oeil 👁 sur ce code et à me prévenir
 * si vous rencontrez un bogue !
 *
 * Vous pouvez me joindre par email sur jeremy@javascriptdezero.com
 *
 * Merci 👍
 */

/* globals enonces,document */

// On récupère les blocs d'énoncés dans un tableau
{
  let numeroEnonce = 0;
  let enonce;
  do {
    enonce = document.getElementById(`enonce-${numeroEnonce}`);
    if (enonce !== null) {
      enonces.liste.push(enonce);
      numeroEnonce += 1;
    }
  } while (enonce);
}

// On initialise le statut des énoncés
function initialiserEnonces() {
  enonces.liste.forEach((enonce, i) => {
    enonces.definirAttente(enonces.liste[i]);
  });
}
initialiserEnonces();
