let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() => {
        reciboDatos('datos')
    },3000)
})

console.log('Imprimir esto rapidamente')


promesa
    
    .then(texto => texto.toUpperCase())
    .then(texto => texto + '!!!!')
    .then(texto => console.log(texto))
    .catch(problema => console.log('Error: ' + problema))
    .finally(() => console.log('Todo listo!'))