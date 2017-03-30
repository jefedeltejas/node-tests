const expect = require('expect'),
      utils = require('./utils');

describe('Utils', () => {
  it('should add 2 nums', () => {
    var res = utils.add(33, 4);

    expect(res).toBe(37).toBeA('number');
    // if (res !== 37) {
    //   throw new Error(`Expected 37, but got ${res}.`)
    // }
  });

  it('should async add 2 nums', (done) => {
    utils.asyncAdd(3, 34, (sum) => {
      expect(sum).toBe(37).toBeA('number');
      done();
    });
  });

  it('should square some num', () => {
    var res = utils.square(9);

    expect(res).toBe(81).toBeA('number');
  });

  it('should square some num and wait 777ms to fire', (done) => {
    utils.asyncSquare(6, (res) => {

      expect(res).toBe(36).toBeA('number');
      done();
    });
  });
});



// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
  var user = {location: 'Talladega', age: 33};
  var res = utils.setName(user, 'Ricky Bobby');

  expect(res).toInclude({
    firstName: 'Ricky',
    lastName: 'Bobby'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Ricky'}).toNotEqual({name: 'Bobby'});
//   // expect([3,37,137]).toInclude(37);
//
// });
