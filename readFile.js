const fs = require('fs');

const readFile = (fileName) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if(err){
            console.log('Hubo un error');
        }else{
            console.log(data);

        }
    }
    )
}

exports.readFile = readFile;



