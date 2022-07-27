module.exports = ({app}) => {
    const routes = app.settings.config.routing;
    for(let i in routes) {
        let name = routes[i].name;
        require(`./sideroute/${name}/${name}-route`)({app});
    }

    const utils = app.settings.config.utils;

    for(let i in utils) {
        let name = utils[i].name;
        require(`./sideroute/utils/${name}/${name}-utils`)({app});
    }

    app.get('*', (req, res) => {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    })
}