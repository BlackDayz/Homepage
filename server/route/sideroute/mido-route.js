const nconf = require('nconf');

module.exports = (app) => {
    app.get('/'+nconf.get('routing:mido:changelog'), async (req, res) => {
        res.redirect(nconf.get('routing:mido:support'));
    });

    app.get('/'+nconf.get('routing:mido:support'), async (req, res) => {
        res.redirect(nconf.get('routing:mido:support_link'));
    });

    app.get('/'+nconf.get('routing:mido:homepage'), async (req, res) => {
        res.render('Mido/Mido', {
            invite: '/' + nconf.get('routing:mido:invite'),
            support: '/' + nconf.get('routing:mido:support'),
        })
    });

    app.get('/'+nconf.get('routing:mido:invite'), async (req, res) => {
        res.send(`<h1>It's currently in closed Beta. Please join the Discord server: <a href="${nconf.get('routing:mittelbot:support')}">${nconf.get('routing:mittelbot:support')}</a> to get access to it.</h1>`);
    });
}