const _ = require('lodash');

const worker = (objects) => {
   let users= _.groupBy(objects, 'username');
   let count = [];
   _.forEach(users, (comment, name) => {
       count.push({
           username: name,
           comment_count: _.size(comment)
       });
   });

   return _.sortBy(count, "comment_count").reverse();

};

module.exports = worker;

/*
Alternative solution with use of 'chain':

var commentcount = function(comments) {

    return _.chain(comments)
    .groupBy("username")
    .map(function(item, name) {
        return {username: name, comment_count: _.size(item)};
    })
    .sortBy(function(counted) {
        return -counted["comment_count"];
    });
};
*/
