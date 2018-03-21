const cors = require('cors');
const http = require('http');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const logger = {
	format: 'dev', /* 'default', 'short', 'tiny', 'dev' */
	stream: {
		write: (message) => {
			console.log(message.slice(0, -1));
		}
	}
};

const app = express();

app.set('port', process.env.PORT || 8180);                      // Default 8180
app.use(morgan('dev', logger));                                 // Log all incoming requests
app.use(bodyParser.json());                                     // Parse the request body (json)
app.use(bodyParser.urlencoded({
	extended: true
}));                                                            // Parse the request body (url encoded)
app.use(methodOverride());                                      // Expose DELETE and PUT verbs
app.use(cors());                                                // Cross Origin Resource Sharing


// Static Assets
app.use('/', express.static(__dirname + '/public_html'));

http.createServer(app).listen(app.get('port'), () => {
	console.log("Readiness Platform API started on port: " + app.get('port'));
});
