const express = require('express');
const serverconfig = require('nconf');
const subdomain = require('express-subdomain');

const config = require('./src/json/config/config.json');

require('dotenv').config();

const app = express();
app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.set('config', config);

serverconfig.argv().env().file({ file: './src/json/config/config.json' });

const mainroute = express.Router();
const midoroute = express.Router();

require('./server-init')(app, express);
require('./subdomains')(app, midoroute);
require('./server/route/mainroute')({ app });

app.use(subdomain('mido', mainroute));

app.listen(process.env.APP_PORT, serverconfig.get(process.env.APP_DOMAIN), () => {
    console.log(
        `http://${process.env.APP_DOMAIN}:${process.env.APP_PORT} server started on ${process.env.APP_PORT}`
    );
});
