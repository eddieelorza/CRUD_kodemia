const fs = require('fs');

const deleteKoder = (id) => {
    fs.readFile('koder.json', 'utf8', (err, data) => {
        if(err){
            console.log('Hubo un error');
        }else{
            const kodersData = JSON.parse(data);
            const newKoders = kodersData.koders.filter(koder => koder.id !== id);
            kodersData.koders = newKoders;
            const kodersString = JSON.stringify(kodersData, null, "  ");
            fs.writeFile('koder.json', kodersString, (err) => {
                if(err){
                    console.log('Hubo un error');
                }else{
                    console.log('Archivo creado');
                }
            }
            )
           
        }
    })
}

exports.deleteKoder = deleteKoder;