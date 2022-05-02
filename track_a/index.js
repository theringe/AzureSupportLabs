const https = require('https');
module.exports = async function (context, req) {
    const options = {
        hostname: '0502lsecpriendplstoragea.blob.core.windows.net',
        port: 443,
        path: '/0502lsecpriendplbloba/test',
        method: 'GET',
    };
    const rr = https.request(options, ss => {
        ss.on('data', d => {
            console.log((Buffer.from(d)).toString());
        });
    });
    rr.on('error', error => {
        console.error(error);
    });
    rr.end();
    return context.res = { status: 200, body: 'OK' };
}

