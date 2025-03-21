// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor inserta un nombre");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega nombres antes de sortear");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    document.getElementById("resultado").textContent = "El amigo secreto es: " + amigos[indice];
}