const nconf = require('nconf');

module.exports = (app, midoroute) => {
    midoroute.get('/', (req, res) => {
        res.send('API - version 1');
    })
}