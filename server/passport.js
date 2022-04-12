const GOOGLE_CLIENT_ID = ID;
const GOOGLE_CLIENT_SECRET = KEY;

const GITHUB_CLIENT_ID = ID;
const GITHUB_CLIENT_SECRET = KEY;


var GoogleStrategy = require('passport-google-oauth20').Strategy;
var GitHubStrategy = require('passport-github2').Strategy;
var passport = require('passport');

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})
