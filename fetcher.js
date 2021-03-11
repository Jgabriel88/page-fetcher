const request = require('request')
const fs = require('fs');

const url = process.argv[2]
const filePath = process.argv[3]



request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(filePath, body, (err) => {
    if (err) err
    console.log(`Downloaded and saved, ${fs.statSync(`${filePath}`).size} bytes to ${filePath}`)
  })
});

// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });


// http://www.example.edu/index.html