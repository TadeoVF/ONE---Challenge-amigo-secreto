// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//declaracion de variables y constantes
let amigos = [];
const inputUsuario = document.getElementById("amigo");
let nombreActual;
const listaAmigos = document.getElementById("listaAmigos");

//Funcion para mostrar la lista de amigos
function actualizarLista(){

    listaAmigos.innerHTML = '';

    //este bucle crea un elemento lista, le asigna como contenido el amigo de la iteracion y luego lo agrega a la lista
    for(let i = 0; i <= amigos.length; i++){
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