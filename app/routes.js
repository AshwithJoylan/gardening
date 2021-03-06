/**
 * Main application routes
 */

'use strict';

module.exports = function (app) {
  // Insert routes below
  app.use('/api/persons', require('./api/person'));
  app.use('/api/rdvs', require('./api/rdv'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  app.get('sadsa', (req, res) => {
    res.send({ s: 'dsdsf' });
  });
  // All undefined asset or api routes should return a 404
  // app
  //   .route('/:url(api|auth|components|app|bower_components|assets)/*')
  //   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*').get((req, res) => {
    res.send('HIHI');
  });
};
