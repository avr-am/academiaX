let num = 4;


//no es bueno declarar variables dentro de una función
function ejemplo() {
    let num = 10;
    console.log(num)
}

console.log(num)
ejemplo()