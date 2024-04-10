document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/genero')
        .then(response => response.json())
        .then(data => {
            const generosBody = document.getElementById('generosBody');

            data.forEach(genero => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${genero.id_genero}</td>
                    <td>${genero.genero}</td>
                    <td>${formatearFecha(genero.fecha_creacion)}</td>
                    <td>${formatearFecha(genero.fecha_actualizacion)}</td>
                    <td>${genero.fk_creado_por}</td>
                    <td>${genero.fk_actualizado_por}</td>
                    <td>${formatearFecha(genero.fecha_eliminacion)}</td>
                    <td>${genero.fk_eliminado_por}</td>


                    
                `;
                generosBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener generos:', error));
});

function formatearFecha(fechaString) {
    console.log('Fecha recibida:', fechaString); // Agrega esta línea para depurar
    const fecha = new Date(fechaString);
    return fecha.toLocaleDateString('es-ES', {
        year: 'numeric', // año en formato numérico
        month: 'long', // nombre completo del mes
        day: 'numeric' // día del mes
    });
}
