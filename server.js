const express = require('express');
const serverconfig = require('nconf');

const app = express();
app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

serverconfig.argv().env().file({file: './src/json/config/config.json'});

require('./server-init')(app, express);
require('./server/route/mainroute')(app);

app.listen(serverconfig.get('port'), serverconfig.get('domain'), () => {
    console.log(`http://${
        serverconfig.get('domain')
    }:${serverconfig.get('port')} server started on ${
        serverconfig.get('port')
    }`);
});