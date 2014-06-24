module.exports = function(domain) {
  return function(req, res, next) {
    if (domain === req.host) {
      next();
    } else {
      res.redirect(301, req.protocol + '://' + domain + req.url);
    }
  };
}