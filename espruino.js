// Start at lightMode 1
var  lightMode = 1;

// Watch button on B5 (also connected to 3.3V)
setWatch(function() {
    lightOn();
}, B5, { repeat: true, debounce : 30, edge: "rising" });

var lightOn = function() {
  // Array of light combinations. 0 is off, 1 is 3.3V, 0.3 is 3.3*0.3 = 0.99V
  lightIntensity = [[0, 0, 0],
                    [0.3, 0, 0],
                    [0, 0.3, 0],
                    [0, 0, 0.3],
                    [0.3, 0.3, 0],
                    [0.3, 0, 0.3],
                    [0, 0.3, 0.3],
                    [0.3, 0.3, 0.3],
                    [1, 0, 0],
                    [0, 1, 0],
                    [0, 0, 1],
                    [1, 1, 0],
                    [1, 0, 1],
                    [0, 1, 1],
                    [1, 1, 1]];
  
  // Just checking where we are
  console.log('lightMode: ' + lightMode);
  console.log('lightMode details: ' + lightIntensity[lightMode]);
  
  // Writing lightIntensity to each light circuit for current lightMode.
  analogWrite(A5, lightIntensity[lightMode][0]);
  analogWrite(A6, lightIntensity[lightMode][1]);
  analogWrite(A7, lightIntensity[lightMode][2]);
  
  // Making next lightmode ready and modulo length of lightIntensity to start over when at the end.
  lightMode = (lightMode + 1) % lightIntensity.length;
};
