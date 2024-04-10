document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/productos')
        .then(response => response.json())
        .then(data => {
            const productosBody = document.getElementById('productosBody');

            data.forEach(producto => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${producto.id_producto}</td>
                    <td>${producto.descripcion}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.fk_categoria}</td>
                    <td>${formatearFecha(producto.fecha_creacion)}</td>
                    <td>${formatearFecha(producto.fecha_actualizacion)}</td>
                    <td>${producto.fk_creado_por}</td>
                    <td>${producto.fk_actualizado}</td>
                    <td>${formatearFecha(producto.fecha_eliminacion)}</td>
                    <td>${producto.fk_eliminado_por}</td>


                    
                `;
                productosBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener productos:', error));
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
