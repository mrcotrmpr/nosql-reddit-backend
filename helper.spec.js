// reads the .env file and stores it as environment variables, use for config
require('dotenv').config()

const connect = require('./connect')

const User = require('./src/models/user.model')

// connect to the databases
connect.mongo(process.env.MONGO_TEST_DB)

beforeEach(async () => {
    // drop all collections before each test
    await User.deleteMany()
});