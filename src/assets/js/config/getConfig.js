const routerconfig = require('../../../../config-router.json');
const refconfig = require('../../json/ref-config.json');

export const getConfig = {
    router: () => {
        return routerconfig;
    },
    refconfig: () => {
        return refconfig;
    }
}