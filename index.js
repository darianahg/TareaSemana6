const RepositorioAutos = require("./RepositorioAutos");
const ServicioAutos = require("./ServicioAutos");

const servicio = new ServicioAutos(new RepositorioAutos());
servicio.suscribir(msg=> console.log("[EVENTO]", msg));

servicio.registrar("Toyota", "Corolla", "HBC-123", "estandar");
servicio.registrar("Nissan", "Sentra", "HBD-456", "premium");
servicio.registrar("Kia", "Rio", "HBE-789", "semanal");

servicio.alquilar(1,3);
servicio.alquilar(2,5);
servicio.alquilar(3,7);

try {
  servicio.alquilar(1, 2);          //ya está alquilado
} catch (e) {
  console.log("[ERROR]", e.message);
}

try {
  servicio.registrar("Honda", "Civic", "HBC-123", "estandar");   //placa repetida
} catch (e) {
  console.log("[ERROR]", e.message);
}