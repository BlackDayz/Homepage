const express = require('express');
const serverconfig = require('nconf');
const httpProxy = require('http-proxy');

const app = express();
app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

serverconfig.argv().env().file({file: './src/json/config/config.json'});

require('./server-init')(app, express);
require('./server/route/mainroute')(app)

httpProxy.createProxyServer({target: `http://${serverconfig.get('domain')}:${serverconfig.get('port')}`}).listen(8000);
app.listen(serverconfig.get('port'), serverconfig.get('domain'), () => {
    console.log(`${
        serverconfig.get('domain')
    } server started on ${
        serverconfig.get('port')
    }`);

    setInterval(() => {
        console.log('server check', app.name, app.url)
    }, 5000)
})