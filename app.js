// Inicializando Variables

const pi = document.getElementById('pi');
const pa = document.getElementById('pa');
const ti = document.getElementById('ti');
const la = document.getElementById('la');
const sp = document.getElementById('sp');


const resulPc = document.getElementById('resulPc');
const resulFinal = document.getElementById('resulFinal');

// Funciones

let ia = () => {
  let resultadoPc;
  let iaPc = Math.floor(Math.random() * 5); 

  if (iaPc === 0) {
    resultadoPc = "Piedra";
  } else if (iaPc === 1) {
    resultadoPc = "Papel";
  } else if (iaPc === 2) {
    resultadoPc = "Tijera";
  } else if (iaPc === 3) {
    resultadoPc = "Lagarto";
  } else {
    resultadoPc = "Spock";
  }


  return resultadoPc;
};

function presionoPiedra() {
  let resIA = ia();
  console.log(resIA);
  resulPc.innerHTML = resIA;

  if (resIA === 'Piedra') {
    console.log("Empate");
    resulFinal.innerHTML = '<strong>Empate</strong>'
  } else if (resIA === 'Tijera') {
    console.log("Ganaste");
    resulFinal.innerHTML = '<strong>Ganaste, Piedra aplasta Tijera</strong>'
  } else if (resIA === 'Lagarto') {
    console.log("Ganaste");
    resulFinal.innerHTML = '<strong>Ganaste, Piedra aplasta Lagarto</strong>'
  } else if (resIA === 'Spock') {
    console.log("Perdiste");
    resulFinal.innerHTML = '<strong>Perdiste, Spock desintegra a Piedra</strong>'
  }
  
  else {
    console.log("Perdiste");
    resulFinal.innerHTML = '<strong>Perdiste, Papel envuelve a Piedra</strong>'
  }
}

function presionoPapel() {
  let resIA = ia();
  console.log(resIA);
  resulPc.innerHTML = resIA;
  resulFinal.innerHTML = resIA

  if (resIA === 'Papel') {
    console.log("Empate");
    resulFinal.innerHTML = '<strong>Empate</strong>'
  } else if (resIA === 'Piedra') {
    console.log("Ganaste");
    resulFinal.innerHTML = '<strong>Ganaste, Papel envuelve Piedra</strong>'
  } else if (resIA === 'Spock') {
    console.log("Ganaste");
    resulFinal.innerHTML = '<strong>Ganaste, Papel desaprueba a Spock</strong>'
  } else if (resIA === 'Lagarto') {
    console.log("Perdiste");
    resulFinal.innerHTML = '<strong>Perdiste, Lagarto devora Papel</strong>'
  } 
  else {
    console.log("Perdiste");
    resulFinal.innerHTML = '<strong>Perdiste, Tijera corta Papel</strong>'

  }
}

function presionoTijera() {
  let resIA = ia();
  console.log(resIA);
  resulPc.innerHTML = resIA;

  if (resIA === 'Tijera') {
    console.log("Empate");
    resulFinal.innerHTML = '<strong>Empate</strong>'
  } else if (resIA === 'Papel') {
    console.log("Ganaste");
    resulFinal.innerHTML = '<strong>Ganaste, Tijera corta Papel</strong>'
  } else if (resIA === 'Lagarto') {
    console.log("Ganaste");
    resulFinal.innerHTML = '<strong>Ganaste, Tijera decapita Lagarto</strong>'
  } else if (resIA === 'Spock') {
    console.log("Perdiste")
    resulFinal.innerHTML = '<strong>Perdiste, Spock aplasta Tijeras</strong>'
  }
  
  else {
    console.log("Perdiste");
    resulFinal.innerHTML = '<strong>Perdiste, Piedra aplasta Tijeras</strong>'
  }
}

function presionoLagarto() {
  let resIA = ia();
  console.log(resIA);
  resulPc.innerHTML = resIA;

  if (resIA === 'Lagarto') {
    console.log("Empate");
    resulFinal.innerHTML = '<strong>"Empate"</strong>'
  } else if (resIA === 'Papel') {
    console.log("Ganaste");
    resulFinal.innerHTML = '<strong>Ganaste, Lagarto devora papel</strong>'
  } else if (resIA === 'Spock') {
    console.log("Ganaste");
    resulFinal.innerHTML = '<strong>Ganaste, Lagarto envenena a Spock</strong>'
  }
  
  else if (resIA === 'Tijera') {
    console.log("Perdiste")
    resulFinal.innerHTML = '<strong>Perdiste, Tijera decapita a Lagarto</strong>'
  }
  else {
    console.log("Perdiste");
    resulFinal.innerHTML = '<strong>Perdiste, piedra aplasta a Lagarto</strong>'
  }
}

function presionoSpock() {
  let resIA = ia();
  console.log(resIA);
  resulPc.innerHTML = resIA;

  if (resIA === 'Spock') {
    console.log("Empate");
    resulFinal.innerHTML = '<strong>"Empate"</strong>'
  } else if (resIA === 'Tijeras') {
    console.log("Ganaste");
    resulFinal.innerHTML = '<strong>Ganaste, Spock aplasta tijeras</strong>'
  } else if (resIA === 'Piedra') {
    console.log("Ganaste");
    resulFinal.innerHTML = '<strong>Ganaste, Spock desintegra piedra</strong>'
  }
  
  else if (resIA === 'Lagarto') {
    console.log("Perdiste")
    resulFinal.innerHTML = '<strong>Perdiste, Lagarto envenena a Spock</strong>'
  }
  else {
    console.log("Perdiste");
    resulFinal.innerHTML = '<strong>Perdiste, Papel desaprueba a Spock</strong>'
  }
}




// Eventos

pi.addEventListener('click', presionoPiedra);
pa.addEventListener('click', presionoPapel);
ti.addEventListener('click', presionoTijera);
la.addEventListener('click', presionoLagarto);
sp.addEventListener('click', presionoSpock);






