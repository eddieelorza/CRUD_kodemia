const fs = require('fs');
const readFiles = require('./readFile');

const addKoder = (id,name, lastName, Age, favoriteFood) => {
    fs.readFile('./koder.json', 'utf8', (err, data) => {
        if(err){
            console.log('Hubo un error');
        }else{
            const kodersData = JSON.parse(data);
            const newKoders = kodersData.koders.forEach(koder => {
                if(koder.id === id){
                    console.log('El id ya existe');
                    return;
                }else{
                    kodersData.koders.push({
                        id: id,
                        name: name,
                        lastName: lastName,
                        Age: Age,
                        favoriteFood: favoriteFood
                    })
                }
            })

            const kodersString = JSON.stringify(kodersData, null, "  ");
            fs.writeFile('./koder.json', kodersString, (err) => {
                if(err){
                    console.log('Hubo un error');
                }else{
                    console.log('Archivo creado');
                }
            })
        }
    })


}


exports.addKoder = addKoder;
