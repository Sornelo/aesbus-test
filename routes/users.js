var express = require('express');
const createHttpError = require('http-errors');
var router = express.Router();

const users = [{
  id: "1",
  name: "Justin"
}, {
  id: "2",
  name: "Count Markula"
}, {
  id: "3",
  name: "Sir Daniel"
}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});


router.get('/protected1', function(req, res, next) {
  throw createHttpError(401)
});

router.get('/protected3', function(req, res, next) {
  throw createHttpError(403)
});

/* GET user. */
router.get('/:id', function(req, res, next) {
  const user = users.find(u => u.id === req.params.id)
  if (!user)
    throw createHttpError(404)
  res.send(user);
});

module.exports = router;
