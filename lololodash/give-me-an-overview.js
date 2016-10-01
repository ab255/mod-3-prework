const _ = require('lodash');

const worker = (objects) => {
  return _.chain(objects)
         _.groupBy('article')
};

module.exports = worker;
