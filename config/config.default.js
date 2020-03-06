'use strict';

/**
 * **egg-nuonuo default config**
 *
 * **TIP**
 *
 * If isv is true,
 * PLEASE config `redirectUri`,
 * and add route to `app.nuonuo.isvAuthRedirect`,
 * like:
 *
 * ```js
 * router.get('/nuonuo/redirect', ctx => app.nuonuo.isvAuthRedirect(ctx));
 * ```
 *
 * @see https://open.nuonuo.com/#/api-doc/common-api?id=100007
 * @see https://open.nuonuo.com/#/dev-doc/sandbox-usage
 *
 * @member Config#nuonuo
 * @property {string}   authTokenUrl      url to get access token
 * @property {string}   authCodeUrl       open api url
 * @property {string}   appKey            appKey
 * @property {string}   appSecret         appSecret
 * @property {string}   userTax           user tax number
 * @property {string}   okCode            user tax number
 * @property {string}   accessTokenCache  user tax number
 * @property {boolean}  isv               ISV? (default to undefined)
 * @property {string}   redirectUri       url to isv auth code redirect (required if isv is true)
 */
exports.nuonuo = {
  default: {
    authTokenUrl: 'https://open.nuonuo.com/accessToken', // get access token
    authCodeUrl: 'https://open.nuonuo.com/authorize', // get auth code
    apiUrl: 'https://sdk.nuonuo.com/open/v1/services', // v2
    // apiUrl: 'https://sdk.nuonuo.com/openPlatform/services', // v1
    // apiUrl: 'https://sandbox.nuonuocs.cn/open/v1/services', // sandbox
    okCode: '0000',
    accessTokenCache: { // cache access token
      store: 'memory',
      prefix: 'nuonuo',
      ttl: 86400, // 24 hours
      quota: [ 50, 2592000 ], // 50 times / 30 days
    },
  },
  // Merchant
  // ===================================
  // client: {
  //   appKey: 'sandbox',
  //   appSecret: 'sandbox',
  //   userTax: 'taxcode',
  // },
  // ISV
  // ===================================
  // client: {
  //   isv: true,
  //   redirectUri: 'http://url-to-oauth-redirect',
  //   appKey: 'sandbox',
  //   appSecret: 'sandbox',
  // },
};
