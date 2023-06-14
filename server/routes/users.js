const express = require("express");
const router = express.Router();
const users = require("../db/queries/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  users.getAllUsers().then(data => {
    res.json({ users: data });
  });
});

router.post('/', function(req, res) {
  users.getUserByEmail(req.body.email)
    .then(data => {
      res.json(data[0])
    })
})

module.exports = router;
