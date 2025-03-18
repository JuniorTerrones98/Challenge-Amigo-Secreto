//Array para almacenar los nombres de amigos
let amigos = [];

//Función para agregar un amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    //validar que el campo no este vacio
    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre.");
        return 
    }

    //validar que el nombre  no este duplicado
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
        return;
    }
    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo)

    //Limpiar campo de entrada
    inputAmigo.value = "";

    //Actualizar la lista HTML
    actualizarLista();

}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos')
    //Limpiar contenido actual de la lista
    listaAmigos.innerHTML = ""; //Borra cualquier contenido previo dentro del contenedor de la lista

    //recorrer el array con un ciclo for

    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Funcion para seleccionar un amigo aleatorio
function sortearAmigo() {
    //Validar que haya amigos disponibles
    if(amigos.length === 0) {
        alert('No hay amigos disponibles para sortear, Agregar al menos uno');
        return;
    }

    //generar un indice aleatorio

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Genera un numero aleatorio entre 0 y la longitud del array

    // obtener el nombre sorteado

    const amigoSorteado = amigos[indiceAleatorio]; //Usa el indice aleatorio para obtener un nombre del array

    const resultado = document.getElementById ('resultado');
    
    resultado.innerHTML = `El Amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
}