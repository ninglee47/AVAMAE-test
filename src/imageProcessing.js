const sharp = require('sharp');
const fs = require('fs');
const directory = './pics';
file = 'shutterstock_1302552622.webp'

//fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize({ height: 600 } ) // width, height
    .toFile(`${directory}/${file}-mobile.webp`);
  //});