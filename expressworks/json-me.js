var express = require('express');
var app = express();
var fs = require('fs');
app.get('/books', function(req, res){
    var item = process.argv[3];
    fs.readFile(item, function(err, data) {
      try {
        books = JSON.parse(data);
      } catch(err) {
        res.sendStatus(500);
      }
      res.json(books);
    });
});
app.listen(process.argv[2]);
