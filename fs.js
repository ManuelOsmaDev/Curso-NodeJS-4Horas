const fs = require("fs");
// console.log(fs.readFileSync('./data/first.txt', 'utf-8'));
// console.log(fs.readFileSync('./data/second.txt').toString());

// fs.writeFileSync('./data/Third.txt', 'este es un tercer archivo creado con fs')

// const title = 'este es el contenido del archivo'

// fs.writeFileSync('./data/Four.txt',title,{
//     flag: 'a'
// })

fs.readFile("./data/first.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());

  fs.readFile("./data/second.txt", (err, data) => {
    if (err) {
      console.log(err);
    }

    console.log(data.toString());
    fs.writeFile('./data/newFile.txt', "nuevo archivo en el new file");
  });
});
