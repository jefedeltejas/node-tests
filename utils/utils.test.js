const utils = require('./utils');

it('should add 2 nums', () => {
  var res = utils.add(33, 4);

  if (res !== 37) {
    throw new Error(`Expected 37, but got ${res}.`)
  }
});
