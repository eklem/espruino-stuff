var  on = false;
console.log('this should only happen once');

setWatch(function() {
  if (on === false) {
    on = true;
    lightOn();
  } else {
    on = false;
    lightOff();
  }
}, B5, { repeat: true, debounce : 50, edge: "rising" });

var lightOn = function() {
    lightIntensity = [1, 0.02, 0.02];
    analogWrite(A5, lightIntensity[0]);
    analogWrite(A6, lightIntensity[1]);
    analogWrite(A7, lightIntensity[2]);
    console.log('light on!');
};

var lightOff = function() {
  analogWrite(A5, 0);
  analogWrite(A6, 0);
  analogWrite(A7, 0);
  console.log('light off!');
};
