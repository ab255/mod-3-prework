const _ = require("lodash");

const worker = (objects) => {
    return _.filter(objects, { active: true })
};

module.exports = worker;
