const express = require("express");
const router = express.Router();
const products = require("../db/queries/products");

// router.get("/test", function(req, res) {
//   res.json({ msg: "Products test route." });
// });


/* GET products listing. */
router.get("/", function (req, res, next) {
  products.getAllProducts().then(data => {
    console.log(data);
    res.json({ products: data });
  });
});


router.get("/deluxe", function (req, res, next) {
  products.getDeluxeProducts().then(data => {
    console.log(data);
    res.json({ products: data });
  });
});

module.exports = router;