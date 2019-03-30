const request = require('request-promise');

describe('Auto Test', () => {
  test('auth_fail', () => {
    const options = {
      uri: 'http://localhost:3000/api/users',
      qs: {
        auth: '123',
      },
    };
    return request(options)
      .then((res) => {
        expect(res).toBe('Nono!!');
      });
  });
  test('auth_success', () => {
    const options = {
      uri: 'http://localhost:3000/api/users',
      qs: {
        token: '123',
      },
    };
    return request(options)
      .then((res) => {
        console.log(res);
        expect(typeof res).toBe('string')
        expect(typeof JSON.parse(res)).toBe('object')        
        expect(Array.isArray(JSON.parse(res))).toBe(true);
        const data = JSON.parse(res);

        expect(data.length).toBeGreaterThan(0);
      });
  });
});
