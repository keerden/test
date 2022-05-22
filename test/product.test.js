// tests/product.test.js

const mongoose = require('mongoose');

const dbHandler = require('./db-handler');
const productService = require('../lib/services/product');
const productModel = require('../lib/models/product');


var expect = require("chai").expect;

describe("Testing", function () {

    it("should pass", function () {
        expect(true).to.equal(true);
    });

    it("should not pass", function () {
        expect(true).to.equal(false);
    });


});



describe("mongodb tests", function () {
/**
 * Connect to a new in-memory database before running any tests.
 */
before(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
after(async () => await dbHandler.closeDatabase());



    /**
     * Tests that a valid product can be created through the productService without throwing any errors.
     */
    it('can be created correctly', async () => {
        expect(async () => await productService.create(productComplete)).not.to.throw();
    });

});

/**
 * Complete product example.
 */
const productComplete = {
    name: 'iPhone 11',
    price: 699,
    description: 'A new dual‑camera system captures more of what you see and love. '
};
