document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/categorias')
        .then(response => response.json())
        .then(data => {
            const categoriasBody = document.getElementById('categoriasBody');

            data.forEach(categoria => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${categoria.ID_Categoria}</td>
                    <td>${categoria.nombre}</td>
                    <td>${formatearFecha(categoria.fecha_creacion)}</td>
                    <td>${formatearFecha(categoria.fecha_actualizado)}</td>
                    <td>${categoria.fk_creado_por}</td>
                    <td>${categoria.fk_actualizado}</td>
                    <td>${formatearFecha(categoria.fecha_eliminacion)}</td>
                    <td>${categoria.fk_eliminado_por}</td>
                `;
                categoriasBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener categorias:', error));
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
