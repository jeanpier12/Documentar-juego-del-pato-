var Cronometro = document.getElementById("time");
var Puntos = document.getElementById("puntos");
var Rango = document.getElementById("rango");
var Final = document.getElementById("final");
var audio = null;
var audio2 = null;
var number = 30;
var puntos = 0;
var rango = "cadete";
var jugando = false;
var una = true;
var disparo=true;

//Audio de explosion inpacto por Jhonny Castillo
function enemigo() {
    //fileUrl guarda la el sonido de la exploción
    var fileUrl = "Sounds/impacto.wav";
    //aca se esta creando el objeto audio que va  a guardar el audio
    // de la varible url hereda todos lo metodos del objeto audio
    var audio = new Audio(fileUrl);
    //este metodo play() reproduce el audio
    audio.play();
    puntos += 100;
}



//Funcion de Restar tiempo por Juan Villegas

function RestarCronometro(){
    if(jugando && number > 0){
        console.log(jugando);
        Cronometro.innerHTML = "<p>"+ number+"</p>";
        number--;
        setTimeout("RestarCronometro()", 1000);
    }
    //si el tiempo llega a 0
    else if(number == 0){
        //se activa la función que manda el mensaje de mi puntuación
        if(una){MostrarDatos();una = false;}
    }
}



//Funcion Mostrar Datos Finales por Juan Villegas
function MostrarDatos(){
    Final.innerHTML = "<a href = '#centrado'><button id ='botonFinal'></button></a>";
    Cronometro.innerHTML = "<p>0</p>";
    Puntos.innerHTML = "<p>==== PUNTOS : "+ puntos+" ====</p>";
    MusicaVictoria();
    pauseInicio();
    if(puntos >= 1000){Rango.innerHTML = "<p>==== RANGO : CAPITAN ====</p>"
    var boton =document.getElementById("nuevo-button");
    boton.style.visibility = "visible";
                 }  

    else if(puntos >= 500){
        Rango.innerHTML = "<p>==== RANGO : OFICIAL ====</p>"
        var boton =document.getElementById("nuevo-button");
        boton.style.visibility = "visible"; 
     }

    else if(puntos >= 100 & puntos < 400){Rango.innerHTML = "<p>==== RANGO : CADETE ====</p>"

    var boton2 =document.getElementById("nuevo-button2");
    boton2.style.visibility="visible";
}
    

}
//supongo que setInterval llama a la funcionn RestarCronometro  cada segundo
// setInterval(RestarCronometro , 1000);

//Musica de fondo por Jhonny Castillo
 primero_audio=true;
 musica_audio=true;

function MusicaInicio() {
    if(musica_audio && primero_audio==true){
    var fileUrl = "Sounds/boss.mp3";
    //se esta creando un onjeto de tipo audio
    audio = new Audio(fileUrl);
    //se le pongo false una vez eliminado un pato se detien la musica 
    audio.loop = true;
    audio.volume = 0.5;
    primero_audio=false
    audio.play()
   }
}

// Botones para control de volumen
function restoreAudio(){
    MusicaInicio();
    audio.play();
    
}

function pauseInicio(){
    audio.pause();
    
}
function subirVol(){
    audio.volume = 0.8;
    
}
function bajarVol(){
    audio.volume = 0.2;
    
}
//botones de control de volumen
function MusicaVictoria(){
    var fileUrl = "Sounds/win.mp3";
    audio2 = new Audio(fileUrl);
    audio2.volume = 0.4;
    audio2.play();
}

function MouseSound() {
    var fileUrl = "Sounds/sonidopistola.wav";
    var audio = new Audio(fileUrl);
    audio.play();
}
//Eventos por Jhonny Castillo
document.getElementById('musica').addEventListener("click",MusicaInicio);
document.getElementById('musica2').addEventListener("click",MusicaInicio);
window.addEventListener('click', MouseSound , false);



// cuando hago clip sobre el elelemento patoroboxx se activa la funcion MoverPato
//la funcion enemigo tiene 2 audio el disparo y la destrucciom del enemigo 
//la destruccion del enemigo lo controla el settimeout
document.getElementById('patorobot').addEventListener("click",function(){setTimeout(enemigo, 20);});
document.getElementById('patorobot').addEventListener("click",function(){setTimeout(MoverPato, 880);});
//Sonido de pistola por Juan Villegas y Jhonny Castillo



//declarando e inicializando la fucnion de over pato 
//esta funcion la llama un evento clip
function MoverPato(){
    //juagando activa el cronometro
    jugando = true;
    console.log("primer"+jugando);
    //estas variable guardan un numero entero aleatorio
    //no fueron declarados las variables randnum , randNum2
    randNum  = Math.round(Math.random()*200); 
    randNum2 = Math.round(Math.random()*500);
    // se  creado variables que no se an estan utilizando 
    //documen modifica los elementos html de archivo index
     document.getElementById("patorobot").style.marginTop = randNum + "px";
     document.getElementById("patorobot").style.marginLeft = randNum2 + "px";

    //esta condicion es para que solo se llame una vez al metodo RestarCronometro
    if(jugando && disparo ==true){
        disparo=false;
        RestarCronometro();    
    }
}

//Movimiento del Arma por Juan Villegas
var miArma = document.getElementById("arma-box");


function ver(){
    clientWidth = document.getElementById('tamaño').clientWidth;
     clientHeight = document.getElementById('tamaño').clientHeight;
     
    };
setInterval(ver,1000)

function mousemove(event){
    console.log(clientWidth)
// esta propiedad hace que mi arma se salga de su contenedor 
    miArma.style.position = 'sticky';
    //con esto estoy moviendo la imagen de la pistola 
    if(clientWidth>1500){
    miArma.style.left = (event.clientX /22 ) + "%";
    }
    if(clientWidth>1250 && clientWidth <1500){
        miArma.style.left = (event.clientX /19 ) + "%";
        }
     if(clientWidth>1200 && clientWidth <1250){
        miArma.style.left = (event.clientX /17 ) + "%";

     }
     if(clientWidth>1100 && clientWidth <1200){
        miArma.style.left = (event.clientX /16 ) + "%";

     }
     if(clientWidth>1000 && clientWidth <1100){
        miArma.style.left = (event.clientX /15 ) + "%";

     }
     if(clientWidth>900 && clientWidth <1000){
        miArma.style.left = (event.clientX /14 ) + "%";

     }

     if(clientWidth>800 && clientWidth <900){
        miArma.style.left = (event.clientX /13 ) + "%";

     }
     if(clientWidth>700 && clientWidth <800){
        miArma.style.left = (event.clientX /12 ) + "%";

     }
     if(clientWidth>600 && clientWidth <700){
        miArma.style.left = (event.clientX /11 ) + "%";

     }
     if(clientWidth>500 && clientWidth <600){
        miArma.style.left = (event.clientX /10 ) + "%";

     }
     if(clientWidth>400 && clientWidth <500){
        miArma.style.left = (event.clientX /9 ) + "%";

     }


   

   
}
//Animacion de Disparo por Juan Villegas
function Shoot(){
    miArma.style.animationName = "armAnim"
    miArma.style.animationPlayState = "running";
    setTimeout(function(){miArma.style.animationPlayState = "paused";
    miArma.style.animationName = "none"} , 430);
}

var recargar = document.getElementById('caja_recarga');
//Eventos por Juan Villegas
//evento que se activa cuando el puntero se mueva sobre un determinado elemento
//y llama a la función muosemove
window.addEventListener('mousemove', mousemove);

window.addEventListener('click',Shoot);

// evento que se activa cuando se hace clip sobre el elementi recargar
recargar.addEventListener('mousedown', function() {
    location.reload();  
    
});
