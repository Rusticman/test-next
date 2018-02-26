const db = name =>
  `${name}_${'production' || process.env.NODE_ENV || 'development'}`;

const postgres = {
  host: '35.189.68.198',
  user: 'postgres',
  port: 5432,
  password: 'vIxcHfPbxpd79FIj',
  ssl: true,
  adapter: 'sails-postgresql',
};

module.exports = {
  datastores: {
    core: {
      ...postgres,
      database: db('core'),
    },
    [BRAND]: {
      ...postgres,
      database: db(BRAND),
    },
  },
  models: {
    content: {
      datastore: BRAND,
      ...require('./models/content'),
    },
  },
  // defaultModelSettings: {
  //   attributes: {
  //     created_at: { type: 'date' },
  //     updated_at: { type: 'date' },
  //   },
  // }
};
