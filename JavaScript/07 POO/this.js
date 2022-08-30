let car = {
    modelo: 'Tesla XR',
    motor: 'A51-100c',
    color: 'negro',
    info: info
}

function info() {
    return 'Modelo: ' + this.modelo + ', Motor: ' + this.motor +  ', Color: ' + this.color
}


console.log(car.info())