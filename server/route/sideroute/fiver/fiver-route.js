const nconf = require('nconf');

module.exports = ({ app }) => {
    app.get(nconf.get('routing:fiver:path'), async (req, res) => {
        res.redirect(nconf.get('routing:fiver:redirect'));
    });
};
