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

module.exports = router;
