
class RepositorioAutos {
  constructor(){
    this.autos = [];
  }

  guardar(auto){
    this.autos.push(auto);
  }

  obtenerTodos() {
    return this.autos;
  }

  buscarPorId(id) {
    return this.autos.find(a => a.id === id);
  }
}
module.exports = RepositorioAutos;