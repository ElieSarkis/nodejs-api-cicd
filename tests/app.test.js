const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return: This API endpoint is tested with each code push to GitHub.', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe(
      'This API endpoint is tested with each code push to GitHub.'
    );
  });
});
