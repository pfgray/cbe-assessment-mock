
exports.assess = function(req, res){
  if (!req.session){
    res.status(401).json({
      message: "Who are you?"
    });
  } else {
    console.log('going to submit', req.body, ' assessment for: ', req.session.lti);
    res.status(200).json({
      message: "whut whut"
    });
  }
}
