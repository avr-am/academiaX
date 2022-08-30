let auto1 = {
    modelo: 'Modelo 3',
    año: 2021,
    marca:'Tesla'
}

let auto2 = {
    modelo: 'Modelo 3.1',
    año: 2022,
    marca:'Audi'
}

let servicio = {
    name: 'mayusculas',
    transformar: function(auto) {
        auto.modelo = auto.modelo.toUpperCase()
    }
}

servicio.transformar(auto1)
console.log(auto1)