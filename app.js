
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = "Adivina el número secreto";

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Elige un número del 1 al 10";

function intentoDeUsuario () {
    alert('Click desde el botón');
}
*/
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor.'); 
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    //si el número generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Adivina el número secreto');
    asignarTextoElemento('p', 'Elige un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio de intervalo de inicio
    //generar número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

mensajesIniciales();
