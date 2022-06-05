module.exports = (app) => {
    require('./sideroute/homepage-route')(app);
    require('./sideroute/projects-route')(app);
    require('./sideroute/legal-route')(app);
    require('./sideroute/mittelbot-route')(app);
    require('./sideroute/blacklist-route')(app);
}