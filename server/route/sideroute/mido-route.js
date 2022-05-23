const nconf = require('nconf');

module.exports = (app) => {
    app.get('/'+nconf.get('routing:mido:changelog'), async (req, res) => {
        res.redirect(nconf.get('external_links:mido_changelog'));
    });
}