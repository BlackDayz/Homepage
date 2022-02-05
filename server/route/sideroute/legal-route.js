const nconf = require('nconf');

module.exports = (app) => {
    app.get('/'+nconf.get('routing:impressum'), async (req, res) => {
        res.render('legal/' + nconf.get('routing:impressum'))
    });

    app.get('/'+nconf.get('routing:privacy'), async (req, res) => {
        res.render('legal/' + nconf.get('routing:privacy'))
    });
}