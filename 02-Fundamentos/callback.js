
// setTimeout( () => {
//     console.log('Hola mundo');
// }, 1000);

const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Juan'
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500);
}

getUsuarioByID(10, () => {
    console.log('hola mundo')
})