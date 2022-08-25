const { readFile  } = require("fs/promises");


// function getText(pathFile) {
//   new Promise((resolve, reject) => {
//     readFile(pathFile, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// }


async function read() {
    try {
        const result = await (await readFile("./data/Four.txt")).toString();
        const result2 = await (await readFile("./data/first.txt")).toString();
        console.log(result);
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
}

read()