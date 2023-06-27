
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
      {
          "message": "what is your url name",
      "name":"URL"}
  ])
    .then((answers) => {
        const URL = answers.URL;
        console.log(URL);
        var qr_svg = qr.image(`${URL}`);
    qr_svg.pipe(fs.createWriteStream(`img.png`));
  })
  .catch((error) => {
    if (error.isTtyError) {
     
    } else {
     
    }
  });

 
