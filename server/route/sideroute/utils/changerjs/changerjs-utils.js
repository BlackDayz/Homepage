const nconf = require('nconf');
const path = require('path');
const fs = require('fs');

module.exports = ({app}) => {
    app.get('/'+nconf.get('utils:changerjs:path'), (req, res) => {
        const filePath = path.join(__dirname, 'ChangerJs/lib/changer.js');
        const stat = fs.statSync(filePath);

        res.writeHead(200, {
            'Content-Type': 'application/javascript',
            'Content-Length': stat.size,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "Content-Type",
        });

        const readStream = fs.createReadStream(filePath);
        return readStream.pipe(res);
    });
}