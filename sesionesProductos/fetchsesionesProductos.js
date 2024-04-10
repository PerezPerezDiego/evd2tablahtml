document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/sesionesProductos')
        .then(response => response.json())
        .then(data => {
            const sesionesProductosBody = document.getElementById('sesionesProductosBody');
            console.log(data)
            data.forEach(sesionProducto => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${sesionProducto.fk_sesion}</td>
                    <td>${sesionProducto.fk_producto}</td>
                    <td>${sesionProducto.cantidad}</td>
               
                `;
                sesionesProductosBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener sesionesProductos:', error));
});

