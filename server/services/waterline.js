const waterline = require('waterline');

const config = require('./../config/waterline');

module.exports = {
  initializeWaterline() {
    const deferred = Promise.defer();

    waterline.start(
      {
        ...config,
        adapters: {
          'sails-postgresql': require('sails-postgresql'),
        },
        defaultModelSettings: {
          primaryKey: 'id',
          datastore: 'core',
          attributes: {
            id: { type: 'number', autoMigrations: { autoIncrement: true } },
          },
        },
      },
      (err, orm) => {
        if (err) {
          Log.error(err);
          deferred.reject(err);
        } else {
          // create global model refs
          global.ORM = orm;
          const models = Object.keys(orm.collections);
          for (let i = 0, len = models.length; i < len; i++) {
            const key = models[i];
            if (key === 'archive') continue;
            global[capitalizeFirstLetter(key)] = orm.collections[key];
          }

          Log.info('-----------------------');
          Log.info(' Waterline initialised: ');
          Log.info(`  - Models: ${Object.keys(config.models).join(',')}`);
          Log.info('-----------------------\n');

          deferred.resolve(orm);
        }
      }
    );

    return deferred.promise;
  },
};
