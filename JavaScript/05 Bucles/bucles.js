let animals = ['gato', 'perro', 'mono', 'dinosaurio', 'tortuga'];



for (i = 0; i < animals.length; i++) {

    animal = animals[i]
    if (animal === 'dinosaurio'){
        console.log(animal + 'es un animal extinto')
        break;
    } else {
    console.log(animals[i] + ' es un animal')
    }
}
console.log('Final')


for (i = 0; i < animals.length; i++) {

    animal = animals[i]
    if (animal === 'dinosaurio'){
        continue;
    } else {
    console.log(animals[i] + ' es un animal vivo')
    }
}
console.log('Final')