'use strict';

/**
 * **egg-nuonuo default config**
 *
 * @see https://open.nuonuo.com/#/api-doc/common-api?id=100007
 * @see https://open.nuonuo.com/#/dev-doc/sandbox-usage
 *
 * @member Config#nuonuo
 * @property {String}   authUrl   auth url (access token)
 * @property {String}   apiUrl    open api url
 * @property {Boolean}  isv       ISV? (default to undefined)
 * @property {String}   appKey    appKey
 * @property {String}   appSecret appSecret
 * @property {String}   userTax   user tax number (ISV required)
 */
exports.nuonuo = {
  default: {
    authUrl: 'https://open.nuonuo.com/accessToken',
    apiUrl: 'https://sdk.nuonuo.com/open/v1/services', // v2
    // url: 'https://sdk.nuonuo.com/openPlatform/services', // v1
    // url: 'https://sandbox.nuonuocs.cn/open/v1/services', // sandbox
    accessTokenCache: { // cache access token
      store: 'memory',
      prefix: 'nuonuo_',
      ttl: 86400, // 24 hours
      quota: [ 50, 2592000 ], // 50 times / 30 days
    },
  },
  // client: {
  //   isv: false,
  //   appKey: 'sandbox',
  //   appSecret: 'sandbox',
  //   userTax: 'taxcode',
  // },
};
