/*eslint-env node*/

//------------------------------------------------------------------------------
// hello world app is based on node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
const express = require('express'); 								// https://www.npmjs.com/package/express
const passport = require('passport');								// https://www.npmjs.com/package/passport
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRoutes  = require('./routes/users');

// create a new express server
const app = express();
app.use(cors());

// enable parsing of http request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', usersRoutes);

const message = require('./utils');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');


// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function () {

  // print a message when the server starts listening
  console.log(message.getWelcomeMessage() + appEnv.url);
});
