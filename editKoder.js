const fs = require('fs')


const editKoder = (id,name, lastName, Age, favoriteFood) => {
    fs.readFile('./koder.json', 'utf8', (err, data) => {
        if(err){
            console.log('Hubo un error');
        }else{
            const kodersData = JSON.parse(data);
            const filterKoder = kodersData.koders.filter((koder) => {
                if(koder.id === id){
                    koder.name = name;
                    koder.lastName = lastName;
                    koder.Age = Age;
                    koder.favoriteFood = favoriteFood;
                }
                return koder;
              }
            )

            kodersData.koders = filterKoder;
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


exports.editKoder = editKoder
            