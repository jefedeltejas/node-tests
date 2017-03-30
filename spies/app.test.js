const expect = require('expect'),
      rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });

  it('should call saveUser with user object', () => {
    var email = 'rick.ross@boss.com';
    var password = 'thirsty123';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
