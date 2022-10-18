#!/usr/bin/node
// A script that reads and prints the content of a file


import { readFile } from 'fs';
const file = process.argv[2];
readFile(file, 'utf8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
