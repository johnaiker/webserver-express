const port = process.env.PORT ||  8080;
// Requires
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

app.use( express.static(__dirname + '/public') )

// Express hbs engine 
hbs.registerPartials( __dirname + "/views/partials" );
app.set('view engine', 'hbs');


app.get('/', (req, resp) => {
	resp.render('home', {
		name: "johnaiker arias"
	});
	
});

app.get('/about', (req, resp) => {

	resp.render('about');
	
});

app.listen(port, () => {
	console.log(`Listening at the port: ${port}`)
});
