const Carrito = require('./carrito');

class Usuario {
  constructor() {
    this.carrito = new Carrito();
  }

  agregar_producto_a_carrito(producto, cantidad) {
    this.carrito.agregar_producto(producto, cantidad);
  }
}

module.exports = Usuario;