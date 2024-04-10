document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/clientes')
        .then(response => response.json())
        .then(data => {
            const clientesBody = document.getElementById('clientesBody');

            data.forEach(cliente => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${cliente.id_cliente}</td>
                    <td>${cliente.nombre}</td>
                    <td>${cliente.apellido}</td>
                    <td>${formatearFecha(cliente.fecha_nacimiento)}</td>
                    <td>${cliente.fk_genero}</td>
                    <td>${cliente.telefono}</td>
                    <td>${cliente.correo}</td>
                    <td>${cliente.fk_direccion}</td>
                    <td>${formatearFecha(cliente.fecha_creacion)}</td>
                    <td>${formatearFecha(cliente.fecha_actualizacion)}</td>
                    <td>${cliente.fk_creado_por}</td>
                    <td>${cliente.fk_actualizado}</td>
                    <td>${formatearFecha(cliente.fecha_eliminado)}</td>
                    <td>${cliente.fk_eliminado}</td>


                    
                `;
                clientesBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener clientes:', error));
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
