// main.js
document.addEventListener("DOMContentLoaded", function() {
    const modElements = document.querySelectorAll('.mod');
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Actualizar botones según los mods guardados en favoritos
    favoriteBtns.forEach((btn, index) => {
        const modId = modElements[index].getAttribute('data-mod-id');
        if (favoritos.includes(modId)) {
            btn.textContent = 'Eliminar de Favoritos';
        }
    });

    // Añadir o eliminar de favoritos
    favoriteBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const modId = modElements[index].getAttribute('data-mod-id');
            
            if (favoritos.includes(modId)) {
                // Eliminar de favoritos
                favoritos.splice(favoritos.indexOf(modId), 1);
                btn.textContent = 'Agregar a Favoritos';
            } else {
                // Añadir a favoritos
                favoritos.push(modId);
                btn.textContent = 'Eliminar de Favoritos';
            }

            // Guardar en localStorage
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
        });
    });

    // Mostrar mods favoritos en favoritos.html
    const favoritosList = document.getElementById('favoritos-list');
    if (favoritosList) {
        if (favoritos.length === 0) {
            favoritosList.innerHTML = '<p>No tienes mods favoritos aún.</p>';
        } else {
            favoritos.forEach(modId => {
                if (modId == 1) {
                    favoritosList.innerHTML += `
                        <div class="mod">
                            <h2>Actions and Stuff</h2>
                            <img src="actionsandstuff.webp" alt="Actions and Stuff">
                        </div>`;
                } else if (modId == 2) {
                    favoritosList.innerHTML += `
                        <div class="mod">
                            <h2>Bedrock Customize</h2>
                            <img src="bedrockcustomize.jpg" alt="Bedrock Customize">
                        </div>`;
                } else if (modId == 3) {
                    favoritosList.innerHTML += `
                        <div class="mod">
                            <h2>Chunk Visualizer</h2>
                            <img src="chunkvisualizer.png" alt="Chunk Visualizer">
                        </div>`;
                }
            });
        }
    }
});

<script>
// Función para obtener los favoritos desde localStorage
function obtenerFavoritos() {
    return JSON.parse(localStorage.getItem('favoritosMods')) || [];
}

// Función para guardar favoritos en localStorage
function guardarFavoritos(favoritos) {
    localStorage.setItem('favoritosMods', JSON.stringify(favoritos));
}

// Función para agregar un mod a favoritos
function agregarAFavoritos(mod) {
    let favoritos = obtenerFavoritos();
    if (!favoritos.includes(mod)) {
        favoritos.push(mod);
        guardarFavoritos(favoritos);
        mostrarFavoritos();
    }
}

// Función para eliminar un mod de favoritos
function eliminarDeFavoritos(mod) {
    let favoritos = obtenerFavoritos();
    favoritos = favoritos.filter(fav => fav !== mod);
    guardarFavoritos(favoritos);
    mostrarFavoritos();
}

// Función para mostrar los mods favoritos en la lista
function mostrarFavoritos() {
    const listaFavoritos = document.getElementById('lista-favoritos');
    listaFavoritos.innerHTML = '';
    const favoritos = obtenerFavoritos();
    
    if (favoritos.length === 0) {
        listaFavoritos.innerHTML = '<li>No tienes mods favoritos aún.</li>';
    } else {
        favoritos.forEach(mod => {
            const li = document.createElement('li');
            li.textContent = mod;
            li.innerHTML += ` <button onclick="eliminarDeFavoritos('${mod}')">Eliminar</button>`;
            listaFavoritos.appendChild(li);
        });
    }
}

// Ejemplo de cómo agregar mods específicos a favoritos
document.addEventListener('DOMContentLoaded', () => {
    mostrarFavoritos(); // Mostrar favoritos cuando cargue la página

    // Ejemplo de cómo agregar mods a favoritos (cambia estos nombres por los de tus mods)
    document.getElementById('agregar-actions-stuff').addEventListener('click', () => {
        agregarAFavoritos('Actions and Stuff');
    });

    document.getElementById('agregar-bedrock-customize').addEventListener('click', () => {
        agregarAFavoritos('Bedrock Customize');
    });

    document.getElementById('agregar-chunk-visualizer').addEventListener('click', () => {
        agregarAFavoritos('Chunk Visualizer');
    });
});
</script>

document.addEventListener('DOMContentLoaded', function () {
    // Al cargar la página, obtener los mods favoritos desde localStorage
    let favoritos = JSON.parse(localStorage.getItem('favoritosMods')) || [];

    // Función para actualizar la visualización de mods favoritos
    function actualizarVisualizacionFavoritos() {
        document.querySelectorAll('.boton-favorito').forEach(function (boton) {
            const mod = boton.dataset.mod;
            if (favoritos.includes(mod)) {
                boton.textContent = 'Eliminar de Favoritos';
                boton.classList.add('favorito-activado');
            } else {
                boton.textContent = 'Añadir a Favoritos';
                boton.classList.remove('favorito-activado');
            }
        });
    }

    // Asignar el evento de click a todos los botones de favoritos
    document.querySelectorAll('.boton-favorito').forEach(function (boton) {
        boton.addEventListener('click', function () {
            const mod = this.dataset.mod;

            // Comprobar si el mod ya está en favoritos
            if (favoritos.includes(mod)) {
                // Eliminar de favoritos
                favoritos = favoritos.filter(fav => fav !== mod);
            } else {
                // Añadir a favoritos
                favoritos.push(mod);
            }

            // Guardar los favoritos en localStorage
            localStorage.setItem('favoritosMods', JSON.stringify(favoritos));

            // Actualizar la visualización
            actualizarVisualizacionFavoritos();
        });
    });

    // Actualizar la visualización inicial de los favoritos
    actualizarVisualizacionFavoritos();
});


