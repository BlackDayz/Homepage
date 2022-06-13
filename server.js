const express = require('express');
const serverconfig = require('nconf');
const subdomain = require('express-subdomain');

const app = express();
app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

serverconfig.argv().env().file({file: './src/json/config/config.json'});

const mainroute = express.Router();
const midoroute = express.Router()

require('./server-init')(app, express);
require('./subdomains')(app, midoroute);
require('./server/route/mainroute')(app, express);

app.use(subdomain('mido', midoroute));

app.listen(serverconfig.get('port'), serverconfig.get('domain'), () => {
    console.log(`http://${
        serverconfig.get('domain')
    }:${serverconfig.get('port')} server started on ${
        serverconfig.get('port')
    }`);
});