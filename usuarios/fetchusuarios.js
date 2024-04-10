document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/usuarios')
        .then(response => response.json())
        .then(data => {
            const usuariosBody = document.getElementById('usuariosBody');

            data.forEach(usuario => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${usuario.id_usuario}</td>
                    <td>${usuario.nombre}</td>
                    <td>${formatearFecha(usuario.fecha_creacion)}</td>
                    <td>${formatearFecha(usuario.fecha_actualizacion)}</td>
                    <td>${usuario.fk_creado_por}</td>
                    <td>${usuario.fk_actualizado_por}</td>
                    <td>${formatearFecha(usuario.fecha_eliminacion)}</td>
                    <td>${formatearFecha(usuario.fecha_eliminado_por)}</td>


                    
                `;
                usuariosBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener usuarios:', error));
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
