function info(a) {
    console.log(this, a)
}

let car = {
    modelo: 'Tesla XR',
    motor: 'A51-100c',
    color: 'negro',
    info: info
}

//info.bind(car)()
//info.call(car, 10)
info.apply(car, [10])