const GOOGLE_CLIENT_ID = "105703156926-jlpk731kpemflppe1e5n1t8kjdasgq2r.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "Iv1.e4ef3a0e0865e1ef";
const GITHUB_CLIENT_SECRET = "f2c45e33d178c2e122bd4f8289f9d5662d749a1c";


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
