const nconf = require('nconf');

module.exports = (app) => {
    const project_routing = nconf.get('routing:projects')
    for(let i in project_routing) {
        app.get(nconf.get('routing:projects:projects_main') + '/' + project_routing[i], async (req, res) => {
            res.render('projects/'+ project_routing[i]);
        })
    }
}