'use strict';
module.exports = function(app) {
  const home = require('../controllers/homeController');
  app.route('/')
    .get(home.get);
};