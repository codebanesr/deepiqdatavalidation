// run this file in a new terminal using node getaxios.js after starting your server to check
// and post requests, alternatively you can use postman
var axios = require('axios')

axios.get('http://localhost:3000/products')
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  