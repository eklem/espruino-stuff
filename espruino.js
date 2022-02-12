var  on = false;
setInterval(function() {
  on = !on;
  LED2.write(on);
  LED1.write(!on);
  if (on === true) {
    analogWrite(A5, 1);
  }
  if (on === false) {
    analogWrite(A5, 0.4);
  }
}, 3000);
