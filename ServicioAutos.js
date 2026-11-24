const tarifas = require("./tarifas");

class ServicioAutos {
  constructor(repositorio) {
    this.repositorio = repositorio;
    this.observadores = []; 
    this.contador = 1;
  }

  suscribir(fn) {
    this.observadores.push(fn);
  }
  notificar(mensaje){
    this.observadores.forEach(fn => fn(mensaje));
  }

  crearAuto(marca, modelo, placa, tarifa) {
    if (!marca || !modelo || !placa) throw new Error("Faltan datos del auto");
    if (!tarifas[tarifa]) throw new Error(`Tarifa desconocida: ${tarifa}`);
    return { id: this.contador++, marca, modelo, placa, tarifa, disponible: true };
  }

  registrar(marca, modelo, placa, tarifa) {
    const repetido = this.repositorio.obtenerTodos().some(a => a.placa === placa);
    if (repetido) throw new Error(`La placa ${placa} ya está registrada`);

    const auto = this.crearAuto(marca, modelo, placa, tarifa);
    this.repositorio.guardar(auto);
    this.notificar(`Auto registrado: ${marca} ${modelo} (${placa})`);
    return auto;
  }

  alquilar(id, dias){
    const auto = this.repositorio.buscarPorId(id);
    if (!auto) throw new Error(`No existe el auto con id ${id}`);
    if (!auto.disponible) throw new Error(`${auto.marca} ${auto.modelo} no está disponible`);
    if (dias <1) throw new Error("Los días deben ser al menos 1");

    const total= tarifas[auto.tarifa](dias); 
    auto.disponible = false;
    this.notificar(`Alquilado: ${auto.marca} ${auto.modelo} por ${dias} días, total $${total}`);
    return total;
  }
}
module.exports = ServicioAutos;