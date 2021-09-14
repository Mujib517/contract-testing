const newman = require('newman')

newman.run({
    collection: require('./ApiContractTests.postman_collection.json'),
    environment: require('./env.json'),
    reporters: 'cli',
});
