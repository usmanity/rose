import fs from 'fs';

const dataDirectory = '../../content/projects';
const jsonData = {};

fs.readdirSync(dataDirectory).forEach((file) => {
  const filePath = `${dataDirectory}${file}`;
  const fileName = file.split('.')[0];
  jsonData[fileName] = require(filePath);
});

export default jsonData;
