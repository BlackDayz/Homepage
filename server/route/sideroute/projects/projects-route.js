const nconf = require('nconf');

module.exports = ({ app }) => {
    const project_routing = nconf.get('allprojects');
    for (let i in project_routing) {
        app.get(nconf.get('routing:projects:path') + '/' + project_routing[i], async (req, res) => {
            res.render('projects/' + project_routing[i]);
        });
    }
};
