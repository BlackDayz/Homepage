const refconfig = require('../js/config/getConfig').getConfig.refconfig();

/**
 * 
 * @param {boolean} type | 1 = web, 0 = video
 */
function isWebReferenz(type, cb) {
    let data = [];
    for (let key in refconfig) {
        if(refconfig[key].isWeb == "1" && type) {
            data.push(refconfig[key])
        }else if(refconfig[key].isWeb == "0" && !type) {
            data.push(refconfig[key])
        }else {
            //error
        }
    }
    return cb(data);
}

export {
    isWebReferenz,
}