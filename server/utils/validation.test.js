const expect = require('expect');

// import isRealString
const {isRealString} = require('./validation');

// isRealString
  // should reject non-string values
  // should reject strings with only spaces
  // should allow strings with nonspace characters

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    var res = isRealString('     ');
    expect(res).toBe(false);
  });

  it('should allow strings with nonspace characters', () => {
    var res = isRealString('  Andrew  ');
    expect(res).toBe(true);
  });
});
