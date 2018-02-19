const waterline = require('waterline');
const SQLAdapter = require('sails-postgresql');

const config = require('./../config/waterline');

// todo f-u sails..
module.exports = {
  initializeWaterline() {
    const deferred = Promise.defer();

    waterline.start({
      ...config,
      adapters: {
        'sails-postgresql': SQLAdapter,
      },
      defaultModelSettings: {
        primaryKey: 'id',
        datastore: 'core',
        attributes: {
          id: { type: 'number', autoMigrations: { autoIncrement: true } },
        },
      },
    }, (err, orm) => {
      if (err) deferred.reject(err);
      else {
        global.Waterline = orm;
        deferred.resolve(orm);
      };
    });

    return deferred.promise;
  }
};
