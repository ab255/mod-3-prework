const _ = require("lodash");

const worker = (objects) => {
  let template = ('Hello <%= name %> (logins: <%= login.length %>)');
  return _.template(template)(objects);
};

module.exports = worker;
