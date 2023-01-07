const fs = require('fs');
const crearArchivo = async(base) => {
   
    try {
        console.log('========================================')
        console.log('           Tabla del:',base            )
        console.log('========================================')
        
    
        let salida = '';
        for(let index = 1; index <=10; index++){
            let result = base * index;
            console.log(`${base} x ${index} = ${result}`);
            salida += `El resultado de ${base} * ${index} es: ${result}\n`;
        }
    
        const fileName =`tabla-${base}.txt`
        fs.writeFileSync(fileName, salida);
    
        // console.log(`tabla-${base}.txt creado`)
    
       return fileName;
    } catch (error) {
      throw error;  
    } 
}

module.exports = {
    crearArchivo
}