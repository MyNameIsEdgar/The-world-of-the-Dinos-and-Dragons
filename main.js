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
