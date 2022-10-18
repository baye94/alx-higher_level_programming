#!/usr/bin/node
//gaggs hhjsjjsjjs skkkskks

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
