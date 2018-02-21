const TYPES = ['page', 'post', 'category'];

module.exports = {
  schema: true,
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
      validations: {
        in: ['none', ...TYPES],
      },
    },
    status: {
      type: 'string',
      required: true,
      validations: {
        isIn: ['inherit', 'draft', 'publish'],
      },
    },
    type: {
      type: 'string',
      required: true,
      validations: {
        isIn: ['revision', ...TYPES],
      },
    },
    meta: {
      type: 'json',
      required: true,
    },
  },
};
