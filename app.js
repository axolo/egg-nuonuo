'use strict';

const Nuonuo = require('../node-nuonuo');

const createNuonuo = config => {
  const nuonuo = new Nuonuo(config);
  return nuonuo;
};

module.exports = app => {
  app.addSingleton('nuonuo', createNuonuo);
};
