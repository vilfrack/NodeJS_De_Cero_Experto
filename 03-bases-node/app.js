
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs').argv

console.clear()

console.log(process.argv)
console.log(argv)

// const [, , arg3 = 'base=5'] = process.argv
// const [ , base = 5] = arg3.split('=')




// const base = 5;

// crearArchivo(base)
// .then(file => console.log(file,'Creado'))
// .catch(err=> console.log(err));

