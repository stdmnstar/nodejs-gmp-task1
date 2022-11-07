const csv = require('csvtojson');
const path = require('path');
const { pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

pipeline(
  createReadStream(path.join('src', 'csv', 'nodejs-hw1-ex1.csv')),
  csv(),
  createWriteStream(path.join('src', 'csv', 'nodejs-hw1-ex1.txt')),
  (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('CSV converted to json successfully.');
    }
  },
)
