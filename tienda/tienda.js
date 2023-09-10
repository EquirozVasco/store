const Producto = require('./Producto');

class Tienda {
  constructor() {
    this.productos = [];
  }

  agregar_producto(producto) {
    this.productos.push(producto);
  }

  total_ventas() {
    let total = 0;
    for (const producto of this.productos) {
      total += producto.precio_unitario;
    }
    return total;
  }
}

module.exports = Tienda;