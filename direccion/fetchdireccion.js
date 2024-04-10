document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/direccion')
        .then(response => response.json())
        .then(data => {
            const direccionBody = document.getElementById('direccionBody');

            data.forEach(direccion => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${direccion.id_direccion}</td>
                    <td>${direccion.CodigoPostal}</td>
                    <td>${direccion.Calle}</td>
                    <td>${direccion.Colonia}</td>
                    <td>${direccion.Num_ext}</td>
                    <td>${direccion.Num_int}</td>
                    <td>${direccion.Ciudad}</td>
                    <td>${formatearFecha(direccion.fecha_creacion)}</td>
                    <td>${formatearFecha(direccion.fecha_actualizacion)}</td>
                    <td>${direccion.fk_creado_por}</td>
                    <td>${direccion.fk_actualizado}</td>
                    <td>${formatearFecha(direccion.fecha_eliminacion)}</td>
                    <td>${direccion.fk_eliminado_por}</td>


                    
                `;
                direccionBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener direccion:', error));
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
