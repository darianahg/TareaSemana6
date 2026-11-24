let autos = [];

function registrarAuto(marca, modelo, placa, tarifa) {
  autos.push({ id: Date.now(), marca, modelo, placa, tarifa, disponible: true });
  console.log("Auto registrado");
}

function alquilar(placa, dias){
  for (const a of autos) {
    if (a.placa === placa) {
      a.disponible=false;
      let total;
      if (a.tarifa === "estandar") total = dias * 40;
      else if (a.tarifa === "premium") total = dias * 70 + 15;
      else total = dias * 40;
      console.log(`${a.marca} ${a.modelo} alquilado ${dias} días: $${total}`);
    }
  }
}

registrarAuto("Toyota", "Corolla", "HBC-123", "estandar");
registrarAuto("Nissan", "Sentra", "NBD-456", "premium");
alquilar("HBC-123", 3);
alquilar("HBC-123", 2); // error:cuando se alquila dos veces y nadie lo valida