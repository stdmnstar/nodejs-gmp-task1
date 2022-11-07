import csv  from 'csvtojson';
import path from 'path';
import  { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from'fs';

pipeline(
  createReadStream(path.join('src', 'csv', 'nodejs-hw1-ex1.csv')),
  csv(),
  createWriteStream(path.join('src', 'csv', 'nodejs-hw1-ex1.txt')),
 )
  .then(() => {
    console.log('CSV converted to json successfully');
  })
  .catch((err) => {
    console.error(err.message);
  });
