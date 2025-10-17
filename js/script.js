let cantidad = 1;

function incrementar() {
    cantidad++;
    document.getElementById('cantidad').textContent = cantidad;
}

function decrementar() {
    if (cantidad > 1) {
        cantidad--;
        document.getElementById('cantidad').textContent = cantidad;
    }
}

function cambiarDetalles(event, detalleId) {
    // Ocultar todos los paneles
    const panels = document.querySelectorAll('.detalles-panel');
    panels.forEach(panel => panel.classList.remove('activo'));

    // Desactivar todos los botones
    const buttons = document.querySelectorAll('.detalles-btn');
    buttons.forEach(btn => btn.classList.remove('activo'));

    // Activar el panel y botón seleccionado
    document.getElementById(detalleId).classList.add('activo');
    event.currentTarget.classList.add('activo');
}