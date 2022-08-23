//esto es un objeto que le defines propiedades
let objeto = { 
    numero: 1, 
    texto: "texto",
    lista: [0, 1, 2, 3],
    boolean: true,
    objeto: {}
};
console.log(objeto.lista)

//para borrar una propiedad
delete objeto.objeto
console.log(objeto)

let persona = {
    nombre: ",Alvaro",
    apellidos: "Acuña Marcos",
    tfno: 601732989,
    direccion: "Calle Rododendro 21"

}

console.log(persona)
console.log(persona.apellidos, persona.nombre)
