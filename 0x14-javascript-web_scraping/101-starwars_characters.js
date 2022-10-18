#!/usr/bin/node
/* script that writes a string to a file
The first argument is the file path
The second argument is the string to write
The content of the file must be read in utf-8
If an error occurred during the reading, print the error object */

const request = require('request');

require('request').get('https://swapi-api.hbtn.io/api/films/' + process.argv[3] + '/', function (err, r, body) {
  if (err) {
    console.log(err);
  } else {
    let i = 0;
    const actors = JSON.parse(body).characters;
    for (i = 0; i < actors.length; i++) {
      request(actors[i], function (error, response, body) {
        if (error) {
          console.error('error:', error);
        }
        console.log(JSON.parse(body).name);
      });
    }
  }
});
