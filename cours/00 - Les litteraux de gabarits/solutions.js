/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
function merci(prenom, nomSociete) {
  return `C'est ${prenom} qui m'a permis d'entrer dans ${nomSociete}`;
}

// Exercice 1
function formaterAdresse(prenom, nom, adresse, codePostal, ville) {
  return `===[ Destinataire ]===
${prenom} ${nom}
${adresse}
${codePostal} ${ville}`;
}

// Exercice 2
function convertirEnSemaines(nombreDeJours) {
  return `${nombreDeJours} jours sont équivalents à ${nombreDeJours / 7} semaines`;
}

// Exercice 3
function templateString() {
  return `Les template strings sont délimitées par des backticks \`\`.
Pour créer un espace réservé on utilise \${}.`;
}

// Exercice 4
function convertirEnSemainesEtJours(nombreDeJours) {
  let nombreDeSemaines = 0;
  let nombreDeJoursRestants = nombreDeJours;

  while(nombreDeJoursRestants >= 7) {
    nombreDeJoursRestants = nombreDeJoursRestants - 7;
    nombreDeSemaines = nombreDeSemaines + 1;
  }

  // Gestion des singuliers et pluriels
  let plurielNombreDeJours = "";
  if (nombreDeJours > 1) {
    plurielNombreDeJours = "s";
  }

  let plurielJoursRestants = "";
  if (nombreDeJoursRestants > 1) {
    plurielJoursRestants = "s";
  }

  let plurielNombreDeSemaines = "";
  if (nombreDeSemaines > 1) {
    plurielNombreDeSemaines = "s";
  }

  return `${nombreDeJours} jour${plurielNombreDeJours}, c'est équivalent à ${nombreDeSemaines} semaine${plurielNombreDeSemaines} et ${nombreDeJoursRestants} jour${plurielJoursRestants}`;
}

// Exercice 5
function retournerReference(numeroClient) {
  let typeCompte = "standard";
  if (numeroClient >= 5000 && numeroClient < 7000) {
    typeCompte = "premium";
  }
  return `N° de client : ${formaterNumeroClient(numeroClient)} (${typeCompte})`;
}