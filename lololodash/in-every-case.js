const _ = require("lodash");

const worker = (objects) => {
    return _.forEach(objects, (city) => {
      if (city.population > 1) {
        city.size = 'big'
      } else if (city.population >= .5) {
        city.size = 'med'
      } else {
        city.size = 'small'
      }
    })
};

module.exports = worker;
