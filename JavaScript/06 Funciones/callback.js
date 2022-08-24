function llamar(callback, a) {
    callback(33 + a)
}

llamar(console.log, 10)