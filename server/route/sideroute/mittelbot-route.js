const nconf = require('nconf');

module.exports = (app) => {
    app.get('/'+nconf.get('routing:mittelbot:changelog'), async (req, res) => {
        res.redirect(nconf.get('external_links:mittelbot_changelog'));
    });
}