const url = process.argv.slice(2)[0];
const path = process.argv.slice(2)[1];
const fs = require("fs");
const request = require("request");

request(url, (error, response, body) => {
  if (response.statusCode !== 200) throw new Error("invalid url");

  if (error) {
    throw new Error("error");
  } 
  fs.access(path,true)

  fs.writeFile(path, body, function (err) {
    if (err) throw new Error("invalid path");

    console.log("File created");
  });
});
