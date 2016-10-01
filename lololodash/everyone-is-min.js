const _ = require("lodash");

const worker = (objects) => {
  let citytemps = { hot: [], warm: [] }

  let checkTemps = (citytemp) => {
    return citytemp > 19
  }

  _.forEach(objects, (city, town) => {
    if ( _.every(city, checkTemps)) {
      citytemps.hot.push(town)
    } else if ( _.some(city, checkTemps)) {
      citytemps.warm.push(town);
    }
  })

  return citytemps
};

module.exports = worker;
