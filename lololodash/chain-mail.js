const _ = require("lodash");

const worker = (array) => {
  return _.chain(array)
          .map((word) => {
            return (word + 'chained').toUpperCase()
          })
          .sortBy()
          .value()
};

module.exports = worker;
