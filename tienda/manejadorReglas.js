const Item = require('./item');
const { ReglaNormal, ReglaPeso, ReglaEspecial } = require('./ReglasPrecio');

class ManejadorReglas {
    constructor() {
      this.reglas = [
        new ReglaNormal(),
        new ReglaPeso(),
        new ReglaEspecial(),
      ];
    }
  
    aplicarRegla(item) {
      for (const regla of this.reglas) {
        if (regla.es_aplicable(item.producto.sku)) {
          return regla.calcular_total(item.cantidad, item.producto.precio_unitario);
        }
      }
      throw new Error('No se encontró una regla aplicable para el producto.');
    }
  }
  
  module.exports = ManejadorReglas;