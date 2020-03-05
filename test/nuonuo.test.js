'use strict';

const mock = require('egg-mock');

describe('test/nuonuo.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/nuonuo-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, nuonuo')
      .expect(200);
  });
});
