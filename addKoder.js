const fs = require('fs');
const readFiles = require('./readFile');

const addKoder = (name, lastName, Age, favoriteFood) => {
    fs.readFile('./koder.json', 'utf8', (err, data) => {
        if(err){
            console.log('Hubo un error');
        }else{
            const kodersData = JSON.parse(data);
            const newKoders = {
                id: kodersData.koders.length + 1,
                name: name,
                lastName: lastName,
                Age: Age,
                favoriteFood: favoriteFood
            }
            kodersData.koders.push(newKoders);
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
