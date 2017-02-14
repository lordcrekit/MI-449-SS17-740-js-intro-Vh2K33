for (i = 0; i < 3; i++) {
  var button = document.getElementById('b0'.concat(i.toString()));
  var clickAudio = new Audio('/public/audio/click0'.concat(i.toString()).concat('.wav'));
  var mouseenterAudio = new Audio('/public/audio/hover0'.concat(i.toString()).concat('.wav'));
  button.addEventListener('click', function () {
    clickAudio.play();
  });
  button.addEventListener('mouseenter', function () {
    mouseenterAudio.play();
  });
}
