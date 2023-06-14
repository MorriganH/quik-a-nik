const express = require("express");
const router = express.Router();
const users = require("../db/queries/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  users.getAllUsers().then(data => {
    console.log(data);
    res.json({ users: data });
  });
});

router.post('/', function(req, res) {
  console.log("req.body", req.body)
  users.getUserByEmail(req.body.email)
    .then(data => {
      console.log(data)
      res.json(data[0])
    })
})

module.exports = router;
