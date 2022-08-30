function Auto(modelo, año, marca) {
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
}

Auto.prototype.info = function() {
    return 'Modelo: ' + this.modelo + ', Año: ' + this.año +  ', Marca: ' + this.marca
}

let auto1 = new Auto('Modelo v4.0', 2022, 'Tesla')

console.log(auto1.info())
