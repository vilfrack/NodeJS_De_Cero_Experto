const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido}`
    }
}

const {nombre, apellido, poder} = deadpool;


console.log(nombre, apellido, poder)