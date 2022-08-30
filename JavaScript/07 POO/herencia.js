class Padre {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    saludo() {
        console.log('Soy ' + this.name + ' ' + this.surname + ' y tengo ' + this.age + ' años ')
    }

}

class Hijo extends Padre {
    constructor(name, surname, age, tengo) {
        super(name, surname, age);
        this.tengo = tengo;
    }

    saludoHijo() {
        console.log ('Soy ' + this.name + ' ' + this.surname + ' y tengo ' + this.age + ' años ' + 'y tengo ' + this.tengo)
    }
}

let padre = new Padre('Jesús', 'Acuña', 49)
let hijo = new Hijo('Guillén', padre.surname, 11, 'el culo gordo')


console.log(padre.saludo())
console.log(hijo.saludoHijo())

