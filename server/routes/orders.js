const express = require("express");
const router = express.Router();
const orders = require("../db/queries/orders");

//GET all orders
router.get("/", function (req, res, next) {
  orders.getOrders().then((data) => {
    console.log(data);
    res.json({ orders: data });
  });
});

//GET order by id
router.get("/:id", function (req, res, next) {
  orders.getOrderByOrderId(req.params.id).then((data) => {
    console.log(data);
    res.json({ orders: data });
  });
});

//GET orders by user_id
router.get("/user/:id", function (req, res, next) {
  orders.getOrdersByUserId(req.params.id).then((data) => {
    console.log(data);
    res.json({ orders: data });
  });
});

module.exports = router;
