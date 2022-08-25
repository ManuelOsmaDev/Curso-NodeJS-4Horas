const {createReadStream} = require('fs');

//crea un archivo llamado bigfile
// async function bigFile() {
//     await writeFile('./data/bigFile.txt', "hello world".repeat(10000))
// }

// bigFile()

const stream = createReadStream('./data/bigFile.txt','utf8');

stream.on('data', (chunk) => {
    console.log(chunk);
})

stream.on('end', () => {
    console.log("ye termine de leer el archivo");
})


stream.on('error', (error)  =>{
    console.log(error);
})



