function sumar() {
    let suma = 0;
    for (let numero of arguments) {
        console.log(numero)
        suma += numero
    }

    return suma
}

console.log(sumar(1,2,3,4,5))


//Esto es una expresión por lo que si la ejecutas en lineas anteriores no funcionara

console.log(sumar2(1,1))

let sumar2 = function(a,b) {
    return a + b
}



