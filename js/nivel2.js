function initCanvas(){




    
    //CTX contiene la caja de la etiqueta canvas
    var ctx = document.getElementById('my_canvas').getContext('2d');
     //new image es un objetos cn propiedades y metodos
    //en esta ocación las variables estan heredando 
    //las propiedades y metodos del objeto imagen()
    var backgroundImage = new Image();
    var naveImage = new Image(); // Nave
    var enemiespic1 = new Image(); // enemigo 1
    var enemiespic2 = new Image(); // enemigo 2



//funcion Cronometro
tiempo = document.getElementById("time");


number=20;
function RestarCronometro(){
          if(number>=0){
           
        tiempo.innerHTML = "<p>"+ number+"</p>";
        number--;
        
    }
}
setInterval(RestarCronometro, 1000); 





// musica

function MusicaInicio() {
    if(musica_audio && primero_audio==true){
    var fileUrl = "../Sounds/Shots.mp3";
    //se esta creando un objeto de tipo audio
    audio = new Audio(fileUrl);
    audio.loop = true;
    audio.volume = 0.4;
    // le pongo false una vez eliminado un pato se detiene la musica 
    audio.play()
    }
}

MusicaInicio();





     // Fondo del canvas
    //.src es atributo del objeto  Image
    backgroundImage.src = '../img/fondo duckhunt.jpg';
// pistola
    naveImage.src = '../img/frame_3.png'; 
    // Patos enemigas
    enemiespic1.src = '../img/patorobot.png';
    enemiespic2.src = '../img/patorobot.png';
 //capturan en ancho  y alto de la etiqueta camvas con variables CW Y CH
   //primero ctx que el la caja canvas 
   //invica a la etiqueta canvas 
   //luego ingreda a al atributo whidh 
   //tomo ese valor y se lo da a cW
    var cW = ctx.canvas.width; // 700px
     //capturan en largo que tien  la eqiqueta camvas
    var cH = ctx.canvas.height; // 600px

     //funcion que trae las naves enemigas para la
    //que aparescan cuando carge el juego
    var enemyTemplate = function(options){
        return {
            //retorna un objeto
            id: options.id || '',
            //x es la posición de la nave x si no recive ningum argumento 
            //eesta posición queda vacio
            x: options.x || '',
            //y es la posoción y de la ve 
            y: options.y || '',
            //este es el ancho de la imagen
            w: options.w || '',
            //este es la altura de la imgen
            h: options.h || '',
            //este toma la imagen de la nave enemiga 
            // si no le pasaramos ninguna imagen la imagen por defecto 
            //seria enemiespic1
            image: options.image || enemiespic1
        }
    }

  // lista que contien todos los grupos de naves 
  var enemies = [
    // Primer grupo naves enemigasargumentos 
    
    //aca se llama se mandar 
    //argumentos a la función enemyTempalte
    //para irle pasando todos las naves enemigas que se van 
    //a mostrar una vez inicalize el juego
    new enemyTemplate({id: '1', x: 100, y: -20, w: 80, h:50}),
    new enemyTemplate({id: '2', x: 225, y: -20, w: 80, h:50}),
    new enemyTemplate({id: '3', x: 350, y: -20, w: 88, h:50}),
    new enemyTemplate({id: '4', x: 100, y: -70, w: 80, h:50}),
    new enemyTemplate({id: '5', x: 225, y: -70, w: 80, h:50}),
    new enemyTemplate({id: '6', x: 350, y: -70, w: 80, h:50}),
    new enemyTemplate({id: '7', x: 475, y: -70, w: 80, h:50}),
    new enemyTemplate({id: '8', x: 600, y: -70, w: 80, h:50}),
    new enemyTemplate({id: '9', x: 475, y: -20, w: 80, h:50}),
    new enemyTemplate({id: '10', x: 600, y: -20, w: 80, h:50}),

    // Segundo grupo naves enemigas
    new enemyTemplate({id: '11', x: 100, y: -220, w: 80, h:50, image: enemiespic2}),
    new enemyTemplate({id: '12', x: 225, y: -220, w: 80, h:50, image: enemiespic2}),
    new enemyTemplate({id: '13', x: 350, y: -220, w: 80, h:50, image: enemiespic2}),
    new enemyTemplate({id: '14', x: 100, y: -270, w: 80, h:50, image: enemiespic2}),
    new enemyTemplate({id: '15', x: 225, y: -270, w: 80, h:50, image: enemiespic2}),
    new enemyTemplate({id: '16', x: 350, y: -270, w: 80, h:50, image: enemiespic2}),
    new enemyTemplate({id: '17', x: 475, y: -270, w: 80, h:50, image: enemiespic2}),
    new enemyTemplate({id: '18', x: 600, y: -270, w: 80, h:50, image: enemiespic2}),
    new enemyTemplate({id: '19', x: 475, y: -200, w: 80, h:50, image: enemiespic2}),
    new enemyTemplate({id: '20', x: 600, y: -200, w: 80, h:50, image: enemiespic2})
  ];


     //se declara la funcion la cual me permite mostar 
    //en pantalla a todos los enemigos de la lista 
   var  renderEnemies = function(enemyList) {
    //el for me perimite dibujaf als 20 naves enemigas
    for(var i=0; i<enemyList.length; i++){
        //con ctx estamos tomando el camvas y el metodo drawImagen nos va 
        //a ayudar a dibujar la imagen de los enemigos 
    //dentro de la funcion se llama 1 por un los valores de la lista
        ctx.drawImage(enemyList[i].image, enemyList[i].x, enemyList[i].y += .5, enemyList[i].w, enemyList[i].h);
        // Detecta colision de naves enemigas con nave aliada
        launcher.hitDetectLowerLevel(enemyList[i]);
    }
}

 //inicializando 
    //funcion contructoa 
    //cuando estamos trabajando con funciones constructoras 
    //tanto el atributo como el metodo tiene que colgar del objeto dis 
    //para que apunte a la función contructora
    function Launcher(){
        
        // Ubicación de misiles
        //this va a hacer referencia a la misma función constructora
        //declarando e inicializando los atributos 
        // y atributo que controla la posicion 
        //vertical del la nave
        this.y = 500,
        // el atributo x controla la posicion
        //orizontal de la nave
        this.x = cW*.5-25,
        //atrubuto W controla la pocicion 
        //orizontal de la bala 
        this.w = 100,

        this.h = 100,
        //este atributo va a capturar la dirección que le ayamos
        //dado a nuestra nave
        this.direccion,
        // Color del misil
        this.bg = 'white', 
        this.misiles = [];

        //objeto
        this.gameStatus = {
            //propiedades
            //over es el estado del juego lo vamos a iniciar con false 
            // y se podra jugar hasta que aya mos ganado o ayamos perdido 
            //este evento ata que se me lanze un true y termine eljuego
            over: false,
            //propieda que me sirve para mandar mensajes
            message: '',
            //nos sirve para darle color a lo que vienen  siendo los mensajes 
            fillStyle: 'white',
            //este sera caracterestisticas del las letras 
            font: 'italic bold 36px Arial, sans-serif',
        }

          //funcion 
         //funcion para pintar la nave alida y el fondo de pantalla
        this.render = function() {
            if(this.direccion === 'left'){
                 //con esto haremos que la nave se mueva hacia la izquierda
                this.x -= 5;
            }else if(this.direccion === 'right'){
                //con esto haremos que la nave se mueva a la derecha
                this.x += 5;
            }else if(this.direccion === 'downArrow'){
                //con esto haremos que la nave se mueva avajo
                this.y += 5;
            }else if(this.direccion === 'upArrow'){
                 //con esto aremos que la nave se mueva aarriba
                this.y -= 5;
            }

            ctx.fillStyle = this.bg;
            // Fondo del canvas
            //al metodo e estamos pasando la variable backgroundIMgen
            // y la posocion de la imegen en este caso es y=0 y x=0
            ctx.drawImage(backgroundImage, 0, 0); 
            // Nave aliada
            //al metodo drawImage le estamos pasando la variable naveimage 
            // las pociciones de la nave y los ultimos 2 valores son el tamño de la nave
            ctx.drawImage(naveImage, this.x, this.y, 100, 90); 

          //este ciclo for gace que los misiles salgan de varios cuando 
          //se presiona disparar 
          //aca la variable misil contien los valores que le emos
          //dado a la lista cuando se apriete en el boton disparar
            for(var i=0; i<this.misiles.length; i++){
                var m = this.misiles[i];
                //con esto se muestran los misiles sobre nuestro lienzo
                //atravez de la propiedad m le pasamos 
                //Dirección del misil y tamaño del misil
                ctx.fillRect(m.x, m.y-=5, m.w, m.h); 
  //aca se esta llamando a la funcion hitDectect
  // el primer argumento sera el misil y el segun d¿sera la nave enemiga 
                this.hitDetect(this.misiles[i], i);
                //condición que me indica si el misil a pasado la 
                //altura limite del canvas osea 0 se realiza lo siguiente
                if(m.y <= 0){
                    //es metodo splice lo que hace es eliminar ese misil 
                    //de nuestro lienzo o de nuestro cambas 
                    this.misiles.splice(i, 1);
                }
            }
      //condicion que me indican si los enemogos es igual a 0 
      //se ejecute la siguiente instrucción 
    
            if(enemies.length === 0){
                //la función clearInterval detiene el intervalo osea el jeugo
                //la variable animateInterval es la encargada de la animación 
                //los enemigos 
                clearInterval(animateInterval); 

                ctx.font = this.gameStatus.font;
                //la funcion fillText me permite mostrar un mensaje 
                //y tambien le doy los valores de para posicionar el mensaje 
                // valores de X y de Y 
                ctx.fillText('¡Tú ganas!', cW * .5 - 80, 50);
            }
        }

        // Función que detecta impacto de misil con nave enemiga
        this.hitDetect = function(m, mi) {
            for(var i=0; i<enemies.length; i++){
                var e = enemies[i];
                //condición que detecta la colicoón de un misil
                //con una nave enemiga
                if(m.x+m.w >= e.x &&
                   m.x <= e.x+e.w &&
                   m.y >= e.y &&
                   m.y <= e.y+e.h){
                    this.misiles.splice(this.misiles[mi], 1); // Eliminar misil
                    enemies.splice(i, 1); // Eliminar nave enemiga
                    document.querySelector('.barra').innerHTML = 'Enemigos destruidos ' + e.id + ' ';
                }
            }
        }

        //funcion que detecta el inpacto de uan nave con una nave enemiga
        this.hitDetectLowerLevel = function(enemy) {
            if(enemy.y > 550){
                this.gameStatus.over = true;
                this.gameStatus.message = '¡Los enemigos han pasado!';
            }

            if((enemy.y < this.y + 25 && enemy.y > this.y - 25) &&
                (enemy.x < this.x + 45 && enemy.x > this.x - 45)){
                    this.gameStatus.over = true;
                    this.gameStatus.message = '¡Moriste!';
            }

            if(this.gameStatus.over === true){
                clearInterval(animateInterval); // Se termina el juego
                ctx.fillStyle = this.gameStatus.fillStyle;
                ctx.font = this.gameStatus.font;
                // Mostrar mensaje al usuario
                ctx.fillText(this.gameStatus.message, cW * .5 - 140, 50); // Texto x, y
            }
        }
    }

 
    //este es una nueva forma de declarar una función
    //launcher sera un objeto de la funcion launcher
    
    var launcher = new Launcher();

    //funcion que inica el jueego que va a dibujar en el 
    //canvas lo que vienen siendo las naves enemigas
    function animate(){
        //aca se toma la caja del cambas 
        //y le damos las medidas correspondientes
        ctx.clearRect(0, 0, cW, cH);
        //aca estamos llamando la función render lo que hace 
        //es dibujar la imagen de fondo de la nave y la nave aliada  
        launcher.render();
        //aca estamos llamando la función renderEnemies
        // y le estamos pasando como argumentos
        //la lista de enemigos 
        renderEnemies(enemies);
    }
   //para que la funcion animate se ejecute al cargar
   //nuestra paguina la mandaremos a llamar 
   //con la función setinterval
   //6 = seismilesimas de segundo
    var animateInterval = setInterval(animate, 6);


    //aca se estan guardando todos los botones que tiene el 
    //juego en su respectiva variable con estas variables se 
    //podra manipular la nave aliada
    var left_btn = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    var fire_btn = document.getElementById('fire_btn');
    var reset_btn = document.getElementById('reset_btn');

    // Controles utilizando el teclado
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 37){ // Tecla posición izquierda
            launcher.direccion = 'left';
            if(launcher.x < cW*.2-130){
                launcher.x += 0;
                launcher.direccion = '';
            }
        }
    });

    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 37){
            launcher.x += 0;
            launcher.direccion = '';
        }
    });

    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 39){ // Tecla posición derecha
            launcher.direccion = 'right';
            if(launcher.x > cW-110){
                launcher.x -= 0;
                launcher.direccion = '';
            }
        }
    });

    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 39){  //teclado posición derecha
            launcher.x -= 0;
            launcher.direccion = '';

        }
    });

    // document.addEventListener('keydown', function(event) {
    //     if(event.keyCode == 38){ // Tecla posición arriba
    //         launcher.direccion = 'upArrow';
    //         if(launcher.y < cH*.2-80){
    //             launcher.y += 0;
    //             launcher.direccion = '';
    //         }
    //     }
    // });

    // document.addEventListener('keyup', function(event) {
    //     if(event.keyCode == 38){
    //         launcher.y += 0;
    //         launcher.direccion = '';
    //     }
    // });

    // document.addEventListener('keydown', function(event) {
    //     if(event.keyCode == 40){ // Tecla posición abajo
    //         launcher.direccion = 'downArrow';
    //         if(launcher.y > cH-110){
    //             launcher.y -= 0;
    //             launcher.direccion = '';
    //         }
    //     }
    // });

    // document.addEventListener('keyup', function(event) {
    //     if(event.keyCode == 40){
    //         launcher.y -= 0;
    //         launcher.direccion = '';
    //     }
    // });

    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 32){
            launcher.misiles.push({x: launcher.x + launcher.w*.5, y: launcher.y, w: 3, h: 10});
           MouseSound();
        }

        function MouseSound() {
            var fileUrl = "../Sounds/sonidopistola.wav";
            var audio = new Audio(fileUrl);
            audio.play();
        }
      

        
    });

    // Controles utilizando botones
    left_btn.addEventListener('mousedown', function(event) {
        launcher.direccion = 'left';
    });

    left_btn.addEventListener('mouseup', function(event) {
        launcher.direccion = '';
    });

    right_btn.addEventListener('mousedown', function(event) {
        launcher.direccion = 'right';
    });

    right_btn.addEventListener('mouseup', function(event) {
        launcher.direccion = '';
    });

//cuando hagamos clip al boton de disparar se va  ejecuar la siguiente funcion 
    fire_btn.addEventListener('mousedown', function(event) {
        //aca se esta llamando al objeto launcher y a sua atributo misiles
        //su atributo es un array por tal motivo le pasaremos valores 
        //los dos primeros valores que se le pasa es la psicion 
        //vertical del misil y la posción orizaontal del misil
        //sus 2 ultimos valores son el tamañp orizon tal y tamaño vertical del misil
        launcher.misiles.push({x: launcher.x + launcher.w*.5, y: launcher.y, w: 3, h: 10});
        MouseSound();
    });


    function MouseSound() {
        var fileUrl = "../Sounds/sonidopistola.wav";
        var audio = new Audio(fileUrl);
        audio.play();
    }

    reset_btn.addEventListener('mousedown', function(event) {
        location.reload();
    });

}
// esta linea de codigo lo que hace es ejecutar la funcion initCanvas 
//el evento de   cargar  la paguina se este realizando
window.addEventListener('load', function(event) {
    initCanvas();
});