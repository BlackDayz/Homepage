const nconf = require('nconf');

module.exports = ({app}) => {
    app.get('/'+nconf.get('routing:mittelbot:homepag'), async (req, res) => {
        res.redirect('https://mittelbot.blackdayz.de');
    });
}