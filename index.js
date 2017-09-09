
// escribir reglas aca
// cambiar las rows ante media queries
// gitlab

// texto a escribir
var invocation = "Por favor, responde esta simple pregunta.";

// longitud de texto a escribir
var invocationLength = invocation.length;

// text area element
var textArea = document.querySelector('#text');

// respuesta
var showAnswer = document.querySelector('#answer');

// dimensiones, placeholder max de text area
textArea.setAttribute('cols', invocationLength);
textArea.setAttribute('maxlength', invocationLength);
textArea.setAttribute('placeholder', invocation);

// prevenir que se escriba en text area
textArea.addEventListener('keypress', function(e){ e.preventDefault(); })

//block inspect element
// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });
// document.addEventListener('keydown', function(ee){
//   if (ee.which == 123) {
//     ee.preventDefault();
//   }
// });

// escribir invocation
var counter = 0;
var show = new String;
console.log(show);
var noShow = 'No quiero responderte';
var tab = true;
var deleted = new String;
var caps = false;

document.addEventListener('keydown', function (e){
  if (e.which === 20) {
      caps = !caps;
      console.log ('caps are on')
  };
});

// borrar en texto falso y en string
textArea.addEventListener('keydown', function(event){
      if (event.code == 'Backspace') {
        event.preventDefault();
        if (counter >= 1) {
          counter--;
          deleted = textArea.textContent.slice(0, counter);
          textArea.innerHTML = deleted;
        };
        if (tab == false) {
          show = show.slice(0, -1);
        };
        if (counter < 1) {
          location.reload();
        }
        console.log(tab);
        console.log(show);
        console.log(typeof show);
        console.log(counter);
      }
});

// tab
textArea.addEventListener('keydown', function(ee){
      if (ee.which === 9) {
        ee.preventDefault();
        supo = true;
        counter++;
        textArea.innerHTML += invocation.slice(counter-1, counter);
        tab = !tab;
        console.log(counter);
      } else if (tab == false && event.code !== 'Backspace' && ee.which !== 13) {
        if (ee.which == 49) {
          var res = '!';
        } else if (ee.which == 49){
          var res = '?';
        } else if (ee.which == 49){};
          if (ee.shiftKey) {
            if (ee.which == 49) {
              var res = '!';
            } else {
              var res = '?';
            };
          } else if (ee.which !== 20){
            if (caps == true){
              var res = String.fromCharCode(ee.which).toUpperCase();
            } else {
              var res = String.fromCharCode(ee.which).toLowerCase();
            };
          } else {
            var res = '';
          };
          show += res;
          console.log(show);
      }
});

// escribir texto falso
textArea.addEventListener('keypress', function(ee){
      if (ee.which !== 13 && tab == false) {
        counter++;
        textArea.innerHTML += invocation.slice(counter-1, counter);
        console.log(counter);
      } else {
        counter++;
        textArea.innerHTML += String.fromCharCode(ee.which);
        console.log(counter);
      };
});

// mostrar respuesta
var randomNumber1 = Math.floor(Math.random() * (8000 - 3000 + 1)) + 3000;
var randomNumber2 = Math.floor(Math.random() * (80 - 40 + 1)) + 80;
var enterBoolean = true;

textArea.addEventListener('keypress', function(ee){
  if (ee.which === 13 && enterBoolean == false) {
    ee.preventDefault();
    enterBoolean = !enterBoolean;
    location.reload();
  };
  setTimeout(function(){
    if (ee.which === 13 && enterBoolean == true) {
      ee.preventDefault();
      enterBoolean = !enterBoolean;
      var digits = show.length;
      var x = 0;
      function start(){
        if (x < digits || show == ''){
          setTimeout(function(){
            x++;
            if (show == '') {
              showAnswer.innerHTML = noShow.slice(0,x);
            } else {
              showAnswer.innerHTML = show.slice(0,x);
            };
            start();
          }, randomNumber2);
        };
      }
      start(0);
    }
  }, randomNumber1);
});
