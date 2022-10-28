const nconf = require('nconf');

module.exports = ({ app }) => {
    app.get('/' + nconf.get('routing:mido:homepage'), async (req, res) => {
        res.redirect('https://mido.blackdayz.de');
    });
};
