const nconf = require('nconf');

module.exports = (app) => {
    app.get('/'+nconf.get('routing:mittelbot:changelog'), async (req, res) => {
        res.redirect(nconf.get('external_links:mittelbot_changelog'));
    });
    app.get('/'+nconf.get('routing:mittelbot:homepage'), async (req, res) => {
        res.render('Mittelbot/Mittelbot', {
            invite: '/' + nconf.get('routing:mittelbot:invite'),
            support: '/' + nconf.get('routing:mittelbot:support'),
        })
    });

    app.get('/'+nconf.get('routing:mittelbot:support'), async (req, res) => {
        res.redirect(nconf.get('routing:mittelbot:support_link'));
    });

    app.get('/'+nconf.get('routing:mittelbot:invite'), async (req, res) => {
        res.send(`<h1>It's currently in closed Beta. Please join the Discord server: <a href="${nconf.get('routing:mittelbot:support')}">${nconf.get('routing:mittelbot:support')}</a> to get access to it.</h1>`);
    });
}