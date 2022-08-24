let traductor = {
    bucle: 'loop',
    lista: 'list',
    declaración: 'declaration',
    objeto: 'object'
};

//el bucle for in se emplea para objetos y por tanto no estan ordenados

for (let key in traductor) {
    console.log(key + ' en inglés es ' + traductor[key])
}