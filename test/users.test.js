// test/users.test.js

const request = require('supertest');
const app = require('../server/server');

describe('User API Endpoints', () => {
  it('should fetch all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should fetch a single user by ID', async () => {
    const res = await request(app).get('/api/users/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBeDefined();
  });

  it('should return 404 for a missing user', async () => {
    const res = await request(app).get('/api/users/999');
    expect(res.statusCode).toEqual(404);
  });

  it('should add a new user', async () => {
    const newUser = { name: 'Charlie' };
    const res = await request(app).post('/api/users').send(newUser);
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toBe('Charlie');
  });
});
