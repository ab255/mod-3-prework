const _ = require("lodash");

const worker = (objects) => {
    return _.sortBy(objects, 'quantity').reverse()
};

module.exports = worker;
