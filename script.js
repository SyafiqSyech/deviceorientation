// get html elements to append with event values
var orientationEl = document.getElementById('orientation'),
  accelerationEl = document.getElementById('acceleration'),
  accIncGravEl = document.getElementById('accincgrav'),
  rotationEl = document.getElementById('rotation'),
  intervalEl = document.getElementById('interval');
 
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', deviceOrientationHandler, false)
}

function deviceOrientationHandler(evt) {
  var orientationData = evt;
  // compass direction
  orientationEl.children[1].innerHTML = evt.alpha / 60;

  // vertical tilt
  orientationEl.children[3].innerHTML = evt.beta;

  // horizontal tilt
  orientationEl.children[5].innerHTML = evt.gamma;
}

if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', deviceMotionHandler, false);
}

function deviceMotionHandler(evt) {
  var motionData = evt;
  // acceleration
  var evAcceleration = evt.acceleration;

  accelerationEl.children[1].innerHTML = evAcceleration.x;
  accelerationEl.children[3].innerHTML = evAcceleration.y;
  accelerationEl.children[5].innerHTML = evAcceleration.z;

  // acceleration including gravity
  var accIncGravity = evt.accelerationIncludingGravity;

  accIncGravEl.children[1].innerHTML = accIncGravity.x;
  accIncGravEl.children[3].innerHTML = accIncGravity.y;
  accIncGravEl.children[5].innerHTML = accIncGravity.z;

  // rotation rate
  var rotationRate = evt.rotationRate;

  rotationEl.children[1].innerHTML = rotationRate.alpha;
  rotationEl.children[3].innerHTML = rotationRate.beta;
  rotationEl.children[5].innerHTML = rotationRate.gamma;

  // interval
  var interval = evt.interval;
  intervalEl.children[1].innerHTML = interval;
}