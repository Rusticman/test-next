const axios = require('axios');

const { get, post } = axios;

const DEFAULT_KEY = `0eea7578ff0cc6fc325d61dc726c2c88-us13`; // it@teamfa.com
const DEFAULT_LIST = '5ee97d225d'; // Checkd Media News List

module.exports = {
  /** ------------
   *   INTERNALS
   *  ----------- */

  /**
   *
   * @param apiKey
   * @returns {{auth: {username: string, password: *}}}
   */
  getAuthForKey(apiKey = DEFAULT_KEY) {
    return {
      auth: {
        username: 'checkd.media',
        password: apiKey,
      },
    };
  },

  /**
   * Returns data center prefixed api
   *
   * @param apiKey
   * @returns {string}
   */
  getUrlForKey(apiKey = DEFAULT_KEY) {
    const dc = apiKey.split('-')[1];
    return `https://${dc ? `${dc}.` : ''}api.mailchimp.com/3.0/`;
  },

  /** ------------
   *      API
   *  ----------- */

  /**
   * Get an individual lists
   *
   * @param apiKey
   * @param id
   */
  getList(id, apiKey = DEFAULT_KEY) {
    const auth = module.exports.getAuthForKey(apiKey);
    const baseUrl = module.exports.getUrlForKey(apiKey);

    return get(`${baseUrl}lists/${id}`, auth).then(r => r.data);
  },

  /**
   * Gets all lists
   *
   * @param apiKey
   */
  getLists(apiKey = DEFAULT_KEY) {
    const auth = module.exports.getAuthForKey(apiKey);
    const baseUrl = module.exports.getUrlForKey(apiKey);

    return get(
      `${baseUrl}lists?count=0&fields=lists.name,lists.id,lists.web_id`,
      auth
    ).then(r => (r.data ? r.data.lists || [] : []));
  },

  /**
   * Add an email to a list
   *
   * @param apiKey
   * @param email
   * @param id
   */
  addToList(email, id = DEFAULT_LIST, apiKey = DEFAULT_KEY) {
    const auth = module.exports.getAuthForKey(apiKey);
    const baseUrl = module.exports.getUrlForKey(apiKey);
    const url = `${baseUrl}lists/${id}/members/`;

    return post(
      url,
      {
        email_address: email,
        status: 'subscribed',
      },
      auth
    ).then(r => r.data);
  },
};
