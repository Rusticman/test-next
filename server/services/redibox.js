const RediBox = require('redibox').default;
const config = require('./../config/redibox');

let ready = false;
let instance = null;

module.exports = {
  initializeRediBox() {
    if (instance && ready) return Promise.resolve(instance);
    if (!instance) instance = new RediBox(config);

    const deferred = Promise.defer();
    instance = new RediBox(config);

    process.once('SIGTERM', module.exports.quit);
    process.once('SIGINT', module.exports.quit);

    instance.on('ready', () => {
      const hooks = Object.keys(instance.hooks);
      global.RediBox = instance;
      for (let i = 0, iLen = hooks.length; i < iLen; i++) {
        const key = hooks[i];
        global[capitalizeFirstLetter(key)] = instance.hooks[key];
      }

      ready = true;
      deferred.resolve();
      Log.info('-----------------------');
      Log.info(' RediBox initialised: ');
      Log.info(`  - ${instance._hooksCount} hooks.`);
      Log.info(`  - ${instance._allClientCount} client(s).`);
      Log.info('-----------------------\n');
    });

    return deferred.promise;
  },

  quit() {
    instance.disconnect();
    process.exit();
  },
};
