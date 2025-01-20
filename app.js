// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//declaracion de variables
let amigos = [];
let inputUsuario = document.getElementById("amigo");
let nombreActual;

//Funcion para agregar amigos a la lista al presionar el boton
function agregarAmigo(){

    nombreActual = inputUsuario.value;
    console.log(nombreActual);

    if (nombreActual != ''){

        amigos.push(nombreActual);
        inputUsuario.value = '';
        console.log(amigos);

    } else{
        
        alert("Por favor, inserte un nombre");
        inputUsuario.innerHTML = '';
    }
}