var lti = require('ims-lti');
var environment = require('../config/environment');

// todo: configurable?
var keypairs = [{
  key: 'ims-lti',
  secret: 'cbe-rocks'
}];

exports.lti = function(req, res){
  console.log("Got LTI launch...", req.body);

  var keypair = keypairs.find(pair => pair.key === req.body.oauth_consumer_key);

  if(!keypair){
    res.status(400).json({
      message: "Couldn't find key: <" + req.body.oauth_consumer_key + ">"
    });
  } else {
    var provider = new lti.Provider(keypair.key, keypair.secret, lti.MemoryStore, lti.HMAC_SHA1);
    provider.valid_request(req, function(err, isValid){
      if(!isValid){
        res.status(403).json({
          status: 403,
          message: "Problem verifying request: ",
          error: err
        });
      } else {
        console.log("successfully validated lti launch");
        // store information about this launch:
        req.session.lti = {
          resource_link_id: req.body.resource_link_id,
          user: {
            first: req.body.lis_person_name_given
          }
        };
        res.redirect(303, "/assessment");
      }
    });
  }
}
