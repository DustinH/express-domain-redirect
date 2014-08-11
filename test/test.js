var redirect = require('..');

describe('redirect', function() {
  it('should not redirect requests from the same domain', function(done) {
    var req = {
      host: 'foo.bar',
      url: '/foobar?foo=bar',
      protocol: 'http'
    };
    var res = {
      redirect: function(code, uri) {
        throw new Error('Redirected!');
      }
    };
    redirect('foo.bar')(req, res, function next() {
      done();
    });
  });

  it('should not redirect https requests from the same domain when forced to https', function(done) {
    var req = {
      host: 'foo.bar',
      url: '/foobar?foo=bar',
      protocol: 'https'
    };
    var res = {
      redirect: function(code, uri) {
        throw new Error('Redirected!');
      }
    };
    redirect('foo.bar', true)(req, res, function next() {
      done();
    });
  });

  it('should redirect requests from different domain', function(done) {
    var req = {
      host: 'foo.bar',
      url: '/foobar?foo=bar',
      protocol: 'http'
    };
    var res = {
      redirect: function(code, uri) {
        done();
      }
    };
    redirect('foo.bar.baz')(req, res, function next() {
      throw new Error('Didn\'t redirect!');
    });
  });

  it('should redirect requests from different protocol', function(done) {
    var req = {
      host: 'foo.bar',
      url: '/foobar?foo=bar',
      protocol: 'http'
    };
    var res = {
      redirect: function(code, uri) {
        done();
      }
    };
    redirect('foo.bar', true)(req, res, function next() {
      throw new Error('Didn\'t redirect!');
    });
  });

  it('should keep protocol the same', function(done) {
    var req = {
      host: 'foo.bar',
      url: '/foobar?foo=bar',
      protocol: 'http'
    };
    var res = {
      redirect: function(code, uri) {
        if (uri.indexOf(req.protocol + '://') === 0)
          done();
        else
          throw new Error('Protocol is different');
      }
    };
    redirect('foo.bar.baz')(req, res, function next() {
      throw new Error('Didn\'t redirect!');
    });
  });

  it('should set protocol to https', function(done) {
    var req = {
      host: 'foo.bar',
      url: '/foobar?foo=bar',
      protocol: 'http'
    };
    var res = {
      redirect: function(code, uri) {
        if (uri.indexOf(req.protocol + '://') === 0)
          throw new Error('Protocol is the same');
        else
          done();
      }
    };
    redirect('foo.bar.baz', true)(req, res, function next() {
      throw new Error('Didn\'t redirect!');
    });
  });

  it('should keep protocol as https', function(done) {
    var req = {
      host: 'foo.bar',
      url: '/foobar?foo=bar',
      protocol: 'https'
    };
    var res = {
      redirect: function(code, uri) {
        if (uri.indexOf(req.protocol + '://') === 0)
          done();
        else
          throw new Error('Protocol is different');
      }
    };
    redirect('foo.bar.baz', true)(req, res, function next() {
      throw new Error('Didn\'t redirect!');
    });
  });

  it('should keep url the same', function(done) {
    var req = {
      host: 'foo.bar',
      url: '/foobar?foo=bar',
      protocol: 'http'
    };
    var res = {
      redirect: function(code, uri) {
        if (uri.match(req.url.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")))
          done();
        else
          throw new Error('Protocol is different');
      }
    };
    redirect('foo.bar.baz')(req, res, function next() {
      throw new Error('Didn\'t redirect!');
    });
  });
});