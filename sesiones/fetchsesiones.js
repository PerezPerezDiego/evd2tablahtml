document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/sesiones')
        .then(response => response.json())
        .then(data => {
            const sesionesBody = document.getElementById('sesionesBody');

            data.forEach(sesion => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${sesion.id_sesion}</td>
                    <td>${sesion.fecha_sesion}</td>
                    <td>${sesion.hora_sesion}</td>
                    <td>${sesion.fk_cliente}</td>
                    <td>${formatearFecha(sesion.fecha_venta)}</td>
                    <td>${formatearFecha(sesion.fecha_creacion)}</td>
                    <td>${formatearFecha(sesion.fecha_actualizacion)}</td>
                    <td>${sesion.fk_creado_por}</td>
                    <td>${sesion.fk_actualizado_por}</td>
                    <td>${formatearFecha(sesion.fecha_eliminacion)}</td>
                    <td>${sesion.fk_eliminado_por}</td>
                    


                    
                `;
                sesionesBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener sesiones:', error));
});

function formatearFecha(fechaString) {
    const fecha = new Date(fechaString);
    return fecha.toLocaleDateString('es-ES', {
        year: 'numeric', // año en formato numérico
        month: 'long', // nombre completo del mes
        day: 'numeric' // día del mes
    });
}