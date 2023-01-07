const empleados = [
    {
        id:1,
        nombre: 'Fernando'
    },
    {
        id:2,
        nombre: 'Susanita'
    },
    {
        id:3,
        nombre: 'Susanito'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];

const getEmpleado = (id) => {

    const empleado = empleados.find(e => e.id===id)?.nombre
    return new Promise((resolve,reject) => {
        (empleado) ? resolve(empleado) : reject(`No existe empleado con id ${id}`); ;
    });

}

const getSalario = (id) =>{

    const salario = salarios.find(e => e.id===id)?.salario
    return new Promise((resolve,reject) => {
        (salario) ? resolve(salario) : reject(`No existe salario con id ${id}`); ;
    });

}

const id = 1;
// getEmpleado(id).then(empleado => console.log(empleado))
//                 .catch(err => console.log(err));

// getSalario(id).then(salario => console.log(salario))
//                 .catch(err => console.log(err));

//promesa en cadena

let nombre;
getEmpleado(id)
    .then(empleado =>{
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado: ${nombre} tiene un salario de: ${salario}`))
    .catch(err=> console.log(err))