/*eslint-env node*/

//------------------------------------------------------------------------------
// hello world app is based on node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
const express = require('express'); 								// https://www.npmjs.com/package/express
const session = require('express-session');							// https://www.npmjs.com/package/express-session
const passport = require('passport');								// https://www.npmjs.com/package/passport
const WebAppStrategy = require('ibmcloud-appid').WebAppStrategy;	// https://www.npmjs.com/package/ibmcloud-appid

// create a new express server
const app = express();


const message = require('./utils');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');




// Warning The default server-side session storage implementation, MemoryStore, 
// is purposely not designed for a production environment. It will 
// leak memory under most conditions, it does not scale past a single process, 
// and is meant for debugging and developing.
// For a list of stores, see compatible session stores below
// https://www.npmjs.com/package/express-session#compatible-session-stores
app.use(session({
  secret: '123456',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((user, cb) => cb(null, user));

passport.use(new WebAppStrategy({
  clientId: "c3cc24d7-ec79-4b4c-8ecc-031550509bad",
  tenantId: "791292fb-11b7-4cef-a94c-fa9ead9f5f4e",
  secret: "MzVkYzQyYTktYTI0Zi00Njc5LTlkMGYtYzE3ODZmZGY5MWJi",
  oAuthServerUrl: "https://eu-gb.appid.cloud.ibm.com/oauth/v4/791292fb-11b7-4cef-a94c-fa9ead9f5f4e",
  redirectUri: "https://csamazons-toolchain.eu-gb.mybluemix.net/appid/callback"
}));


app.get('/appid/callback',passport.authenticate(WebAppStrategy.STRATEGY_NAME));

app.use(passport.authenticate(WebAppStrategy.STRATEGY_NAME));

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();


// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function () {

  // print a message when the server starts listening
  console.log(message.getWelcomeMessage() + appEnv.url);
});
