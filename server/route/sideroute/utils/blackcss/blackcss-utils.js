const nconf = require('nconf');
const path = require('path');
const fs = require('fs');

module.exports = ({ app }) => {
    app.get('/' + nconf.get('utils:blackcss:path'), (req, res) => {
        const filePath = path.join(__dirname, 'BlackCSS/lib/BlackCSS.css');
        const stat = fs.statSync(filePath);

        res.writeHead(200, {
            'Content-Type': 'text/css',
            'Content-Length': stat.size,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': '*',
        });

        const readStream = fs.createReadStream(filePath);
        return readStream.pipe(res);
    });
};
