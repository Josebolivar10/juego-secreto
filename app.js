let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
   let elementoHTML = document.querySelector(elemento); 
   elementoHTML.innerHTML = texto;
}

function verificarIntento (){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   if (numeroDeUsuario === numeroSecreto){ 
      asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);

      document.getElementById('reiniciar').removeAttribute('disabled');

   } else {
      //El usuario no acerto
      if (numeroDeUsuario > numeroSecreto) {
         asignarTextoElemento('p','El numero secreto es menor');
      } else {
         asignarTextoElemento('p','El numero secreto es mayor');
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
   let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);


   //Si el numero generado esta incluido en la lista 
   if(listaNumerosSorteados.include(numeroGenerado)){
      return generarNumeroSecreto();

   } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
   }
}

function condicionesIniciales(){
   asignarTextoElemento('h1', 'Juego del numero secreto!');
   asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
}


function reiniciarJuego(){
   //Limpiar la caja
   limpiarCaja();
   //Indicar mensaje de intervalo de numeros
   mensajesIniciales();
   //Deshabilitar el boton de nuevo juego 
   document.querySelector('#reiniciar').setAttribute('disabled','true');

}


