var puntos = parseInt('00');
var tiempo = parseInt('00');

/* PUNTOS */

$('.fa-bomb').click(function(){
  if (puntos > 0) {
    puntos -= 1;
    document.getElementById("puntos").innerHTML="0" + puntos;
  } else {
    document.getElementById("puntos").innerHTML="00";
  }
})

$('.fa-trophy').click(function () {
  puntos += 1; // Suma un punto
  if (puntos < 10) {
    document.getElementById("puntos").innerHTML = "0" + puntos; // Agrega el 0 al puntaje
  } else if (puntos >= 10 && puntos < 20) {
    document.getElementById("smile").innerHTML = "<img src='img/256-Star-Wars-2.svg' />";
    document.getElementById("puntos").innerHTML = puntos;
  } else if (puntos >= 20 && puntos < 30) {
    document.getElementById("smile").innerHTML = "<img src='img/256-Star-Wars-3.svg' />";
    document.getElementById("puntos").innerHTML = puntos;
  } else if (puntos >= 30 && puntos < 40) {
    document.getElementById("smile").innerHTML = "<img src='img/256-Star-Wars-4.svg' />";
    document.getElementById("puntos").innerHTML = puntos;
  } else if (puntos >= 40 && puntos < 50) {
    document.getElementById("smile").innerHTML = "<img src='img/256-Star-Wars-5.svg' />";
    document.getElementById("puntos").innerHTML = puntos;
  } else if (puntos >= 50 && puntos < 60) {
    document.getElementById("smile").innerHTML = "<img src='img/256-Star-Wars-6.svg' />";
    document.getElementById("puntos").innerHTML = puntos;
  } else if (puntos >= 60 && puntos < 70) {
    document.getElementById("smile").innerHTML = "<img src='img/256-Star-Wars-7.svg' />";
    document.getElementById("puntos").innerHTML = puntos;
  } else if (puntos >= 70 && puntos < 80) {
    document.getElementById("smile").innerHTML = "<img src='img/256-Star-Wars-8.svg' />";
    document.getElementById("puntos").innerHTML = puntos;
  } else if (puntos >= 80 && puntos < 90) {
    document.getElementById("smile").innerHTML = "<img src='img/256-Star-Wars-9.svg' />";
    document.getElementById("puntos").innerHTML = puntos;
  } else {
    document.getElementById("smile").innerHTML = "<p>GOD!</p>";
    document.getElementById("puntos").innerHTML = puntos;
  }
})

/* TIEMPO */

var timerVar = setInterval(countTimer, 1000);

function countTimer() {
  ++tiempo;
  var hour = Math.floor(tiempo / 3600);
  var minute = Math.floor((tiempo - hour * 3600) / 6000);
  var seconds = tiempo - (hour * 3600 + minute * 6000);
  if (tiempo < 10) {
    document.getElementById("tiempo").innerHTML = "0" + seconds; // Agrega el 0 a los segundos
  } else {
    document.getElementById("tiempo").innerHTML = seconds;
  }
}