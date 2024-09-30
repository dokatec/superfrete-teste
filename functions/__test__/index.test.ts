const functions = require("firebase-functions");
const test = require("firebase-functions-test")();

const myFunction = require('./index.js');

describe('myFunction', () => {
  it('should handle a hello world request', async () => {
    const wrapped = test.wrap(myFunction);
    const response = await wrapped({ query: { text: 'hello' } });
    expect(response.data).toBe('Hello, World!');
  });
});