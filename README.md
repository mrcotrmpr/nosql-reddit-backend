# MongoDB / Mongoose backend

### About

This is a reddit-like backend which uses a combination of MongoDB and Neo4j. 
Users can be created which can create threads, which can have comments. Comments can also have subcomments, up- and downvotes.
Users are also saved in a Neo4J database in which they can follow and unfollow eachother.

### Installing

Run `npm install` in the root directory.

### Running the app

Copy `.env.dist` to a `.env` file and set the variables
The backend can be started with `npm start`. It will start listening and serve your requests.

### Running the tests

To run all tests use `npm test`. There are three kinds of tests:
- unit tests on the schemas
- integration tests on the endpoints
- system tests by walking through a 'user journey'

### TODO:

- Set up neo4j tests
- Show up- and downvotes as a count
- Filter (up- and downvotes, amount of comments)
- Remove subcomments when removing a thread along with its comments
- Be able to query threads your friends liked (depth 1 and 2)
- Richardson maturity level 2
- Test endpoints don't always work
