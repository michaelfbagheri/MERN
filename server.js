const express = require('express');
const app = express();
const routes = require('./routes')
app.use(routes);

const PORT = process.env.PORT || 3001;


const server = app.listen(PORT, function() {
	
		console.log(` API server now listning on port ${PORT}!`);


});


