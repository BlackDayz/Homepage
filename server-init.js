const nconf = require('nconf');
const cors = require('cors');
const session = require('express-session')

module.exports = (app) => {
    nconf.argv().env().file({file: './src/json/config/config.json'});

    app.use(cors());
    app.use(session({
        secret: nconf.get('sessionSecret'),
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 600000,
            SameSite: true,
            secure: true
        }
    }));
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", nconf.get('cors:headers:Access-Control-Allow-Origin'));
        res.header("Access-Control-Allow-Methods", nconf.get('cors:headers:Access-Control-Allow-Methods'));
        res.header("Access-Control-Allow-Headers", nconf.get("cors:headers:Access-Control-Allow-Headers"));
        res.header("Access-Control-Max-Age", nconf.get('cors:headers:Access-Control-Max-Age'));

        res.header("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")

        res.header("Content-Security-Policy", "default-src https:");
        res.header("Content-Security-Policy", "img-src *");
        res.header("Content-Security-Policy", "style-src *")
        res.header("Content-Security-Policy", "script-src *")

        res.header("withCredentials", nconf.get('cors:headers:withCredentials'));
        res.header("Content-Type", nconf.get('cors:headers:Content-Type'));
        next();
    });
}