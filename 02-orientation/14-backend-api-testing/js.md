# Testing API endpoints

In this workshop you can learn how to create functional tests that focus on the
HTTP endpoints of a REST application using the npm package `supertest`.

## Materials & Resources

### Material

| Material                                                                                               |    Time |
| :----------------------------------------------------------------------------------------------------- | ------: |
| [Unit test vs integration test](https://www.youtube.com/watch?v=vqAaMVoKz1c)                           |   28:03 |
| [Supertest intro](https://www.codementor.io/knownasilya/testing-express-apis-with-supertest-du107mcv2) | reading |

### Optional

| Material                                                                                                                  |    Time |
| :------------------------------------------------------------------------------------------------------------------------ | ------: |
| [Intro To JavaScript Unit Testing With Mocha JS & Chai](https://www.youtube.com/watch?v=MLTRHc5dk6s)                      |   17:50 |
| [SuperTest, Mocha, and Chai](https://www.codementor.io/olatundegaruba/integration-testing-supertest-mocha-chai-6zbh6sefz) | reading |
| [Chai.js cheatsheet](https://devhints.io/chai)                                                                            | reading |

## Material Review

- Why do we create automated tests?
  <!--
  - manual testing becomes longer and longer as the application grows,
    because you have to make sure the new code doesn't break existing features.
    Testing before a release can take up weeks slowing the whole process down.
    Automated tests are faster, more reliable, repeatable,
    and we can find bugs earlier in the process. -->
- What's a unit test?
  <!--
  - a test to make sure a small piece of code
    works as intended **in isolation** (i.e. separately) -->
- What's an integration test?
  <!--
  - a tests to make sure multiple components of
    the application work together correctly -->
- Why do we need both unit and integration tests?
  <!--
  - Unit tests are fast and cheap so they are
    good fit to test every possible scenario,
  - but with only unit tests you don't actually
    know anything about the app as a whole.  -->
- What's an endpoint test?
  <!--
  - A test which actually sends an HTTP request to an endpoint,
    and sets expectations for the response -->
- What's `supertest` and how to install it?
  <!--
  - It helps writing endpoint tests by starting
    the express app for a single test case -->
- How to write endpoint tests using `supertest`?
  <!--
  - see the example below -->

|             | Unit test                          | Integration test                                          |
| ----------- | ---------------------------------- | --------------------------------------------------------- |
| scope       | usually a single class or function | multiple layers of the application                        |
| speed       | fast (less than 50ms)              | slower, perhaps even seconds/minutes                      |
| count       | many (multiple thousands)          | fewer, order of magnitude fewer                           |
| build       | easy to create                     | takes longer to create                                    |
| debugging   | easy due to their small scope      | harder to figure out what is actually broken              |
| maintenance | cheap, easy to write/fix/change    | more expensive, breaks more often, takes more time to fix |

### Optional

- How to install mocha and chai?
  <!--
    `npm install --save-dev mocha chai` -->
- How to create and run test cases?
  <!--
   see below -->
- Why do you need to call `done()` at the end of the test?
  <!--
  - This is how mocha knows when the HTTP response arrived -->
- (optional++) How to replace the `done()` method call with async/await?
  <!--
   see below -->

## Workshop

Let's imagine the following express app (`app.js`):

```javascript
const express = require('express');

const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'tobi' });
});

module.exports = app;
```

With the following test (`test.js`):

```javascript
const request = require('supertest');
const app = require('./app');

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
```

## (Optional) with mocha and chai

Name the file after the endpoint under test, e.g. `user.test.js`.

```javascript
const request = require('supertest')
const app = require('./app')
const { expect } = require('chai');

describe('GET /user', () => {
  it('should return a valid user', (done) => {
    request(app)
      .get('/user')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;

        expect(res.body.name).to.equal('tobi');

        done();
      });
  })
})
```

Now run the test using `npx mocha user.test.js`.

### (Optional++) using async/await

```javascript
const request = require('supertest')
const app = require('./app')
const { expect } = require('chai');

describe('GET /user', () => {
  it('should return a valid user', async () => {
    let res = await request(app)
      .get('/user')
      .expect(200);

    expect(res.body.name).to.equal('tobi');
  })
})
```

### Exercises

- [Groot](iamgroot/js.md)
- Open your previous workshop project
- Create tests for all the endpoints
  - Use the frontend's checks for different test cases
  - Figure out similar test cases what the frontend does not cover

### Optional

- [Arrow](arrow/README.md)
- [💪Cargo](cargo/README.md)
- [💪💪Calorie Table](calorietable/README.md)
- [💪💪Awesome Mix](awesome/README.md)
