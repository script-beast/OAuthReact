const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./passport');
const authRoute = require('./routes/auth');
const cors = require('cors');
const app = express();

app.use(cookieSession(
    {
        name: 'session',
        keys: ['key1'],
        maxAge: 24 * 60 * 60 * 1000
    }
))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: 'GET,POST,PUT,DELETE',
        credentials: true
    }
))

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.use('/auth', authRoute);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})