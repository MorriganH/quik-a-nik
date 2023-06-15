const express = require("express");
const router = express.Router();
const users = require("../db/queries/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  users.getAllUsers().then(data => {
    res.json({ users: data });
  });
});

// verify users credentials and return their data on success
router.post("/", function (req, res) {
  users.getUserByEmail(req.body.email).then(data => {
    if (data && data.password === req.body.password) {
      const {
        id,
        first_name,
        last_name,
        email,
        is_employee,
        phone,
        profile_img,
      } = data;

      const user = {
        id,
        first_name,
        last_name,
        email,
        is_employee,
        phone,
        profile_img,
      };
      res.json(user);
    } else {
      res.json("");
    }
  });
});

// check if new user's email already exists before registering new user
router.post("/register", function (req, res) {
  users.getUserByEmail(req.body.email).then(data => {
    if (data) {
      res.json(false);
    }
    if (!data) {
      users.addUser(req.body).then(data => {
        console.log(data);
        res.json(data);
      });
    }
  });
});

module.exports = router;
