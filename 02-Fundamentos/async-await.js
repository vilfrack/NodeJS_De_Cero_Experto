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

const getInfoUsuario = async(id) =>{
   const empleado = await getEmpleado(id);
   const salario =  await getSalario(id);
   return `El salario del empleado: ${empleado} es de ${salario}`
}

const id =100;

getInfoUsuario(id).then(msg => console.log(msg)).catch(err => console.log(err));