class Producto {
    constructor(sku, nombre, descripcion, unidades_disponibles, precio_unitario) {
      this.sku = sku;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.unidades_disponibles = unidades_disponibles;
      this.precio_unitario = precio_unitario;
    }
  
    hay_unidades(cantidad) {
      return this.unidades_disponibles >= cantidad;
    }
  }
  
  module.exports = Producto;