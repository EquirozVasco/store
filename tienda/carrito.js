const Producto = require('./Producto')
const Item = require('./item')
class Carrito {
    constructor() {
      this.items = [];
    }
  
    agregar_producto(producto, cantidad) {
      if (producto.hay_unidades(cantidad)) {
        const item = new Item(producto, cantidad);
        this.items.push(item);
      } else {
        console.log("No hay suficientes unidades disponibles de " + producto.nombre);
      }
    }
  
    calcular_total() {
      let total = 0;
      for (const item of this.items) {
        total += item.calcular_total();
      }
      return total;
    }
  }
  
  module.exports = Carrito;