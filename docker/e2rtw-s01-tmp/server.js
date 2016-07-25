// "Express.js"
const express = require('express'); 
//   tcp port
const PORT = 8080;
//   Express instance
const app = express();
// "public" 
app.use(express.static('public')); 
//   http get
app.get('/', function (req, res) {
    res.send('Hello world\n');
});
// tcp port request
app.listen(PORT);
//
console.log('Running on http://localhost:' + PORT);
