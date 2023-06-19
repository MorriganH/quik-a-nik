const express = require("express");
const router = express.Router();
const products = require("../db/queries/products");

// router.get("/test", function(req, res) {
//   res.json({ msg: "Products test route." });
// });

/* GET products listing. */
router.get("/", function (req, res) {
  products.getAllProducts().then(data => {
    res.json({ products: data });
  });
});

router.get("/deluxe", function (req, res) {
  products.getDeluxeProducts().then(data => {
    res.json({ products: data });
  });
});

router.get("/addons", function (req, res) {
  products.getIndividualProducts().then(data => {
    res.json({ products: data });
  });
});

router.get("/party", function (req, res) {
  products.getPartyProducts().then(data => {
    res.json({ products: data });
  });
});

router.get("/potato", function (req, res) {
  products.getPotatoes().then(data => {
    res.json({ products: data });
  });
});

router.get("/drinks", function (req, res) {
  products.getDrinks().then(data => {
    res.json({ products: data });
  });
});

router.get("/:portion", function (req, res) {
  products.getProductsByPortions(req.params.portion).then(data => {
    res.json({ products: data });
  });
});

module.exports = router;
