const fs = require('fs');
const readFiles = require('./readFile');

const addKoder = (id,name, lastName, Age, favoriteFood) => {
    fs.readFile('koder.json', 'utf8', (err, data) => {
        if(err){
            console.log('Hubo un error');
        }else{
            const kodersData = JSON.parse(data);
            kodersData.koders.push({id, name, lastName, Age, favoriteFood});
            const kodersString = JSON.stringify(kodersData, null, "  ");
            fs.writeFile('koder.json', kodersString, (err) => {
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
