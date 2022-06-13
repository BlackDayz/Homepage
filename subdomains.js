const vhost = require('vhost');
const nconf = require('nconf');

module.exports = (app) => {
    app.use(vhost(nconf.get('domains:mido'), (req, res) => {
        res.json({
            message: 'Hello from Mido'
        })
    }))
}