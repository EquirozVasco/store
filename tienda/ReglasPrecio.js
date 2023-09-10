const InterfazReglaPrecio = require('./InterfazReglaPrecio');

// Clase base que implementa la interfaz ReglaPrecio
function BaseReglaPrecio() {}

BaseReglaPrecio.prototype = Object.create(InterfazReglaPrecio);

// Clase ReglaNormal que hereda de BaseReglaPrecio
function ReglaNormal() {}

ReglaNormal.prototype = Object.create(BaseReglaPrecio.prototype);

ReglaNormal.prototype.es_aplicable = function (sku) {
  return sku.startsWith('EA'); // Ejemplo de lógica de aplicabilidad
};

ReglaNormal.prototype.calcular_total = function (cantidad, precio) {
  // Implementa el cálculo del precio total
  return cantidad * precio;
};

// Clase ReglaPeso que hereda de BaseReglaPrecio
function ReglaPeso() {}

ReglaPeso.prototype = Object.create(BaseReglaPrecio.prototype);

ReglaPeso.prototype.es_aplicable = function (sku) {
  return sku.startsWith('WE'); // Ejemplo de lógica de aplicabilidad
};

ReglaPeso.prototype.calcular_total = function (cantidad, precio) {
  // Implementa el cálculo del precio total
  const precioPorKilogramo = precio / 1000;
  return cantidad * precioPorKilogramo;
};

// Clase ReglaEspecial que hereda de BaseReglaPrecio
function ReglaEspecial() {}

ReglaEspecial.prototype = Object.create(BaseReglaPrecio.prototype);

ReglaEspecial.prototype.es_aplicable = function (sku) {
  return sku.startsWith('SP'); // Ejemplo de lógica de aplicabilidad
};

ReglaEspecial.prototype.calcular_total = function (cantidad, precio) {
  // Implementa el cálculo del precio total
  // (Incluyendo la lógica de descuento especial, si es necesario)
};

module.exports = {
  ReglaNormal,
  ReglaPeso,
  ReglaEspecial,
};