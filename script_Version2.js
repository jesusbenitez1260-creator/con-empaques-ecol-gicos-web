// Carrito de compras simple
let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    lista.innerHTML = '';
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Confirmación de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensaje-confirmacion').textContent = '¡Gracias por contactarnos! Pronto te responderemos.';
    this.reset();
});