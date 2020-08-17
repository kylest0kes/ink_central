// this module will check if a user is authenticated. 
    // if yes, run "next()" function, if no, send message and deny access

module.exports = function(req, res, next) {

    if (req.isAuthenticated()) {
      return next();
    }
  
    res.json({ message: "no auth" });
  };