const parent = document.querySelector('.parent');
const enfant = document.querySelector('.enfant');

parent.addEventListener('click', function(e) {
  console.log("Le parent a été cliqué");
  console.log("e.target", e.target);
  console.log("e.currentTarget", e.currentTarget);
});

enfant.addEventListener('click', function(e) {
  console.log("L'enfant a été cliqué");
});

document.body.addEventListener('click', function(e) {
  console.log("Le body a été cliqué");
});