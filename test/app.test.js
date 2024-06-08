const request = require('supertest');
const { startServer, stopServer } = require('../app');


let server;


beforeAll(() => {
   server = startServer();
});


afterAll(() => {
   stopServer();
});


describe('GET /', () => {
   it('should return Hello World!', async () => {
      const res = await request(server).get('/');
      expect(res.statusCode).toEqual(200);
      expect(res.text).toBe('Hello World!');
   });
});