function addButtonSounds(i) {
  var button = document.getElementById('b0' + i);
  var clickAudio = document.getElementById('b0' + i + '-click-audio');
  button.addEventListener('click', function () {
    clickAudio.play();
  });
  var mouseenterAudio = document.getElementById('b0' + i + '-mouseenter-audio');
  button.addEventListener('mouseenter', function () {
    mouseenterAudio.play();
  });
}

for (i = 0; i < 3; i++) {
  addButtonSounds(i);
}
