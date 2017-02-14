function addButtonSounds(i) {
  var button = document.getElementById('b0'.concat(i.toString()));
  var clickAudio = new Audio('public/audio/click0'.concat(i.toString()).concat('.wav'));
  button.addEventListener('click', function () {
    clickAudio.play();
  });
  var mouseenterAudio = new Audio('public/audio/hover0'.concat(i.toString()).concat('.wav'));
  button.addEventListener('mouseenter', function () {
    mouseenterAudio.play();
  });
}

for (i = 0; i < 3; i++) {
  addButtonSounds(i);
}
