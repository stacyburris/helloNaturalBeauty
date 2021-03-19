const express = require('express');
const cors = require('cors');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys = require('../configs/index');
const { Strategy } = require('passport');
let user = {};

passport.serializeUser( fn: (user, cb) => {
    cb(null, user);
});
passport.deserializeUser( fn: (user, cb) => {
    cb(null, user);
});
// facebook strategy 
passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret: keys.FACEBOOK.clientSecret,
    callbackUrl: '/auth/facebook/callback'
},

(accessToken, refreshToken, profile, cb) => {
    console.log(JSON.stringify(profile));
    user = {...profile};
    return cb(null, profile);
}));

const app = express();
app.use(cors());
app.use(passport.initialize());

app.get('/auth/facebook', passport.authenticate( strategy: 'facebook'));
app.get('/auth/facebook/callback')

// min 25.50 video login authentication with react (passport.js) ryanMichael Hirst