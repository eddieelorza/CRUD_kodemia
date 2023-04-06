const fs = require('fs');

const twentyFiveKoders = () => {
    fs.readFile('./koder.json', 'utf8', (err, data) => {
        if(err){
            console.log('Hubo un error');
        }else{
            const kodersData = JSON.parse(data);
            const newKoders = kodersData.koders.filter(koder => koder.Age > 25);
            console.log(newKoders);
        }
    })
}

exports.twentyFiveKoders = twentyFiveKoders;
