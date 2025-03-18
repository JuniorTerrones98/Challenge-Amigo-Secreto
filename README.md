Challenge Amigo Secreto:
Este es un sencillo proyecto en JavaScript que permite agregar nombres de amigos a una lista y luego realizar un sorteo aleatorio para elegir a uno de ellos.

Características:
Agregar amigos a una lista evitando duplicados.
Mostrar la lista de amigos agregados.
Realizar un sorteo aleatorio entre los amigos de la lista.

Tecnologías utilizadas
HTML: Para la estructura del proyecto.
CSS: Para el diseño y la apariencia visual.
JavaScript: Para la lógica del sorteo y manipulación del DOM.

Código principal

Array de almacenamiento
let amigos = [];
Este array almacena los nombres de los amigos ingresados por el usuario.
------------------------------------------------------
Función para agregar un amigo:
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
        return;
    }
    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    actualizarLista();
}
Esta función permite agregar un amigo a la lista. Primero verifica que el campo de entrada no esté vacío y que el nombre no esté duplicado antes de añadirlo al array.
---------------------------------------------------------
Función para actualizar la lista de amigos en la interfaz:
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
Esta función limpia la lista en la interfaz y la vuelve a generar con los nombres almacenados en el array amigos.
--------------------------------------------------------
Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear. Agrega al menos uno.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ` El Amigo secreto sorteado es: <strong>${amigoSorteado}</strong> `;
}
Esta función selecciona un nombre aleatorio de la lista de amigos y lo muestra en la interfaz. Si la lista está vacía, muestra una alerta.
------------------------------------------------------------------
*Estos fueron los pasos que yo seguí, estructurandolo de  esta forma no me indico ningún error en el código
