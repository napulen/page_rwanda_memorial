var express = require('express');
var router = express.Router();

/* GET victimelist. */
router.get('/victimelist', function(req, res) {
  var db = req.db;
  var collection = db.get('victimes');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

/* POST to addvictim. */
router.post('/addvictim', function(req, res) {
  var db = req.db;
  var collection = db.get('victimes');
  collection.insert(req.body, function(err, result){
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});

/* DELETE to deleteuser. */
router.delete('/deleteuser/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('victimes');
  var userToDelete = req.params.id;
  collection.remove({ '_id' : userToDelete }, function(err) {
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});

module.exports = router;
