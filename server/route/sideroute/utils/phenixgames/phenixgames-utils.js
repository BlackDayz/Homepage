const nconf = require('nconf');
const fs = require('fs');
const path = require('path');

module.exports = ({ app }) => {
    app.get('/' + nconf.get('utils:phenixgames_logo:path'), (req, res) => {
        const filePath = path.join(__dirname, 'PhenixGames_Logo_no_text_transparent.png');
        const stat = fs.statSync(filePath);

        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': stat.size,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
        });

        const readStream = fs.createReadStream(filePath);
        return readStream.pipe(res);
    });
};
