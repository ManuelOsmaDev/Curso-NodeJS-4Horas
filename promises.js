const { readFile } = require("fs");

function getText(pathFile) {
  new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

getText("./data/second.txt")
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
