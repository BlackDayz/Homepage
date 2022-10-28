const nconf = require('nconf');

module.exports = ({app}) => {
    app.get(nconf.get('routing:impressum:path'), async (req, res) => {
        res.render('legal/impressum')
    });

    app.get(nconf.get('routing:privacy:path'), async (req, res) => {
        res.render('legal/privacy')
    });
}
