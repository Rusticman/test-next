const adapter = require('sails-postgresql');

const db = name => `${name}_${'production' || process.env.NODE_ENV || 'development'}`;

const postgres = {
  host: '35.189.68.198',
  user: 'postgres',
  port: 5432,
  password: 'vIxcHfPbxpd79FIj',
  ssl: true,
  adapter,
};

const TYPES = ['page', 'post', 'category'];

module.exports = {
  datastores: {
    core: {
      ...postgres,
      database: db('core'),
    },

    cm: {
      ...postgres,
      database: db('cm'),
    },
  },
  models: {
    content: {
      schema: true,
      datastore: ['cm'],
      attributes: {
        title: {
          type: 'string',
          defaultsTo: '',
        },
        slug: {
          type: 'string',
          defaultsTo: '',
        },
        parent: {
          type: 'number',
          defaultsTo: 0,
        },
        parent_type: {
          type: 'string',
          defaultsTo: 'none',
          isIn: ['none', ...TYPES],
        },
        status: {
          type: 'string',
          isIn: ['inherit', 'draft', 'publish'],
          required: true,
        },
        type: {
          type: 'string',
          isIn: ['revision', ...TYPES],
          required: true,
        },
        meta: {
          type: 'json',
          required: true,
        },
      },
    }
  }
};
