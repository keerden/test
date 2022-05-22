const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

var mongod;

/**
 * Connect to the in-memory database.
 */
module.exports.connect = async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    console.log(`URI: ${uri}\n`);

    const mongooseOpts = {

    };

    await mongoose.connect(uri);
}

/**
 * Drop database, close the connection and stop mongod.
 */
module.exports.closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}

/**
 * Remove all the data for all db collections.
 */
module.exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}