const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');
const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


const PORT = process.env.PORT || 3001;

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
// 	res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


app.use(routes);

const server = app.listen(PORT, function () {

	console.log(` API server now listning on port ${PORT}!`);


});


