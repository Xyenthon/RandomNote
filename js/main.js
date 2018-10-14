//create audio context and occillator node

var context = new (window.AudioContext || window.webkitAudioContext)();

var o = context.createOscillator();
var g = context.createGain();

var randNote = Math.floor(Math.random()*88)+1;

function setFreq(m) {
  o.frequency.value = Math.pow(2, (m-69)/12)*440;
}

o.type = 'sine';
setFreq(randNote)
o.connect(g);
g.connect(context.destination);
g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 3)
o.start();
