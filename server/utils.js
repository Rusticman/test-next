const { mapToProps, isObject, flatten } = require('deeps');
const { Logger, transports } = require('winston');

// setup logger global
global.Log = new Logger({
  transports: [new transports.Console(require('./config/logger'))],
});

// setup brand global
let brand = process.env.BRAND;
if (!brand) {
  brand = 'cm';
  Log.warn(
    `'BRAND' environment variable was not specified, defaulting to 'cm'.`
  );
}
global.BRAND = brand;

/**
 * Async/Await to Array [error, result]
 *
 * Examples:
 *
 *    // 0 - standard usage
 *
 *        const [dbError, dbResult] = await A2A(TodoModel.find({ id: 1 }));
 *
 *    // 1) if an error isn't needed:
 *
 *        const [ , dbResult ] = await A2A(TodoModel.find({ id: 1 }));
 *        // if (!dbResult) return somethingSomethingHandleResult();
 *
 *    // 2) if a result isn't needed:
 *
 *        const [ dbError ] = await A2A(TodoModel.destroy({ id: 1 }));
 *        if (dbError) return somethingSomethingHandleError();
 *
 *    // 3) if neither error or result are needed:
 *
 *        await A2A(TodoModel.destroy({ id: 1 }));
 *
 *    // 4) multiple promises
 *
 *        const promises = [];
 *
 *        promises.push(Promise.resolve(1));
 *        promises.push(Promise.resolve(2));
 *        promises.push(Promise.resolve(3));
 *
 *        const [ , results ] = await A2A(promises);
 *
 *    // 5) non promise values
 *
 *        const [ error, nothingHere ] = await A2A(new error('Just a foo in a bar world'));
 *        if (error) profit(); // ?
 *
 *        const [ nothingHere, myThing ] = await A2A('A thing string');
 *
 *
 * @param oOrP Object or Primitive
 * @returns {*} Promise<Array>
 * @constructor
 */
function A2A(oOrP) {
  if (!oOrP) return Promise.resolve([null, oOrP]);

  // single promise
  if (oOrP.then) {
    return oOrP.then(r => [null, r]).catch(e => [e, undefined]);
  }

  // array of promises
  if (Array.isArray(oOrP) && oOrP.length && oOrP[0].then) {
    return Promise.all(oOrP)
      .then(r => [null, r])
      .catch(e => [e, undefined]);
  }

  // non promise values - error
  if (oOrP instanceof Error) return Promise.resolve([oOrP, undefined]);

  // non promise values - any other value
  return Promise.resolve([null, oOrP]);
}

global.A2JS = A2A;
global.A2A = A2A;
global.isObject = isObject;

/**
 *
 * @param string
 * @returns {string}
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

global.capitalizeFirstLetter = capitalizeFirstLetter;

/**
 * Old style defered promise shim - for niceness :P
 * @returns {{resolve: null, reject: null}}
 */
Promise.defer = function defer() {
  const deferred = {
    resolve: null,
    reject: null,
  };

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  return deferred;
};

/**
 *
 * @param array
 * @param map
 */
global.arrayMapToProps = function arrayMapToProps(array, map) {
  if (!Array.isArray(array)) return;

  for (let i = 0, len = array.length; i < len; i++) {
    array[i] = mapToProps(map, array[i]);
  }
};

/**
 *
 * @param array
 * @returns {boolean}
 */
String.prototype.endsWithOneOf = function endsWithOneOf(array) {
  for (let i = 0; i < array.length; i++) {
    if (this.endsWith(array[i])) return true;
  }
  return false;
};
