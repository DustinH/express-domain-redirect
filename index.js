module.exports = function(domain, force_https) {
  return function(req, res, next) {
    var protocol = req.protocol;
    if (force_https === true) {
        protocol = 'https';
    }
    if (domain === req.host && req.protocol === protocol) {
      next();
    } else {
      res.redirect(301, protocol + '://' + domain + req.url);
    }
  };
}