/**
 * Main application routes
 */
module.exports = function(app) {

  app.use('/api/assessment', require('./assessment'));
  app.use('/lti', require('./lti'));
  // app.use('/api/apps', require('./api/application'));


  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components)/*')
    .get(function(req, res){
      res.status(404).json({
        message: 'Resource not found'
      });
    });

  // All other routes should redirect to the index.ejs
  app.route(['/*'])
    .get(function(req, res) {
      console.log('showing the index file:');
      res.render('index.ejs', {
        lti: req.session.lti
      });
    });
};
