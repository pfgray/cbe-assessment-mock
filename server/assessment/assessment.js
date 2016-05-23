var request = require('superagent');

exports.assess = function(req, res){
  if (!req.session){
    res.status(401).json({
      message: "Who are you?"
    });
  } else {
    console.log('going to submit', req.body, ' assessment for: ', req.session.lti);

    if(!req.session.lti || !req.session.lti.custom_achievement_service){
      res.status(400).json({
        message: "The LTI launch didn't contain a custom_achievement_service parameter."
      });
    } else {
      // POST to that url...
      request
        .post(req.session.lti.custom_achievement_service)
        .send(req.body)
        .end(function(err, achievement){
          if(err){
            console.log(
              'ERROR from ',
              req.session.lti.custom_achievement_service,
              err
            );
            res.status(400).json({
              message: "got error from achievements endpoint.",
              error: err
            })
          } else {
            res.status(200).json(achievement);
          }
        });
    }
  }
}
