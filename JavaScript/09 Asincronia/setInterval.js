let i = 0;
console.log('antes')

let interval = setInterval(() => {
    console.log(i++)
},1000)

console.log('despues')
console.log('despues')
console.log('despues')
console.log('despues')
console.log('despues')
console.log('despues')
console.log('despues')
console.log('despues')

setTimeout(() => {
    clearInterval(interval)
},6500)