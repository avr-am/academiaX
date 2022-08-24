let user = {
    name: 'Alvaro',
    secondName: 'Acuña'
}

function changeName(object) {
    let copia = JSON.parse(JSON.stringify(object))
    copia.name = "Jesus"
    return copia
}

console.log(changeName(user))
console.log(user)