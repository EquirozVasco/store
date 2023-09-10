class Item {
    constructor(producto, cantidad) {
      this.producto = producto;
      this.cantidad = cantidad;
    }
  
    calcular_total() {
      return this.producto.precio_unitario * this.cantidad;
    }
  }
  
  module.exports = Item;
  