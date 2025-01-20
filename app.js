// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//declaracion de variables y constantes
let amigos = [];
let nombreActual;
const inputUsuario = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const amigoFinal = document.getElementById("resultado");

//funcion para elejir y mostrar al amigo aleatorio
function sortearAmigo(){

    //utiliza un numero random basado en el array, borra la lista y muestra al elejido
    if (amigos.length > 0){

        let indice = Math.floor(Math.random()*amigos.length);
        let amigoElejido = amigos[indice];
        listaAmigos.innerHTML = '';
        amigoFinal.innerHTML = amigoElejido;
        amigos = [];

    } else {

        alert("No hay amigos para sortear");

    }
}

//Funcion para mostrar la lista de amigos
function actualizarLista(){

    listaAmigos.innerHTML = '';

    //este bucle crea un elemento lista, le asigna como contenido el amigo de la iteracion y luego lo agrega a la lista
    for(let i = 0; i < amigos.length; i++){

        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);

    }
}

//Funcion para agregar amigos a la lista al presionar el boton, de estar vacio envia alerta
function agregarAmigo(){

    nombreActual = inputUsuario.value;
    console.log(nombreActual);

    if (nombreActual != ''){

        amigos.push(nombreActual);
        inputUsuario.value = '';
        console.log(amigos);
        actualizarLista();

    } else{

        alert("Por favor, inserte un nombre");

    }
}