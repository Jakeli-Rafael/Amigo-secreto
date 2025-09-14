
let amigos = [];

// Obtenemos una referencia al elemento de la lista para mostrar los nombres.
const listaAmigosElement = document.getElementById('listaAmigos');
const amigoInput = document.getElementById('amigo');
const resultadoElemento = document.getElementById('resultado');

function agregarAmigo() {
    // Capturar el valor del campo de entrada.
    let nombreAmigo = amigoInput.value.trim();

    // Validar la entrada para que no esté vacía.
    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución si el campo está vacío.
    }

    // Actualizar el array de amigos.
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada.
    amigoInput.value = '';

    // Llamamos a la función para actualizar la lista en la interfaz.
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    // Limpiar la lista existente para evitar duplicados.
    listaAmigosElement.innerHTML = '';

    // Iterar sobre el arreglo de amigos.
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista (<li>) para cada amigo.
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = amigos[i];

        // Agregar el nuevo elemento a la lista HTML.
        listaAmigosElement.appendChild(nuevoLi);
    }
}

function sortearAmigo() {
    // Validar que haya al menos un amigo disponible.
    if (amigos.length === 0) {
        alert("Aún no hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado.
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento <p> del HTML.
    resultadoElemento.innerHTML = `¡El amigo sorteado es: **${amigoSorteado}**!`;
}


function sortearAmigo() {
    // Validar que haya al menos un amigo disponible.
    if (amigos.length === 0) {
        alert("Aún no hay amigos en la lista para sortear.");
        return;
    }


    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    resultadoElemento.innerHTML = `¡El amigo sorteado es: **${amigoSorteado}**!`;
    listaAmigosElement.innerHTML = ''; 
}