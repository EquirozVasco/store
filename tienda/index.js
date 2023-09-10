const Producto = require('./Producto');
const Item = require('./item');
const Carrito = require('./carrito');
const Usuario = require('./usuario');
const Tienda = require('./tienda');
const { ReglaNormal, ReglaPeso, ReglaEspecial } = require('./ReglasPrecio');

// Crear productos y agregarlos a la tienda
const producto1 = new Producto('EA123', 'Producto 1', 'Descripción 1', 10, 5);
const producto2 = new Producto('WE456', 'Producto 2', 'Descripción 2', 5, 8);
const producto3 = new Producto('SP789', 'Producto 3', 'Descripción 3', 20, 10);

// Crear instancias de reglas de precio
const reglaNormal = new ReglaNormal();
const reglaPeso = new ReglaPeso();
const reglaEspecial = new ReglaEspecial();

// Agregar productos a la tienda
const tienda = new Tienda();
tienda.agregar_producto(producto1 );
tienda.agregar_producto(producto2 );
tienda.agregar_producto(producto3);

// Crear usuario y carrito
const usuario = new Usuario();
const carrito = usuario.carrito;

// Agregar productos al carrito del usuario
const item1 = new Item(producto1, 3);
const item2 = new Item(producto2, 2);

usuario.agregar_producto_a_carrito(item1);
usuario.agregar_producto_a_carrito(item2);

// Calcular el precio total del carrito
const precioTotalCarrito = carrito.calcular_total();

// Realizar la compra
try {
  usuario.comprar_carrito();
  console.log("Compra realizada con éxito. Precio total:" + precioTotalCarrito);
} catch (error) {
  console.error("Error al realizar la compra:" + error.message);
}