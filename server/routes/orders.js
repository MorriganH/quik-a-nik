const express = require("express");
const router = express.Router();
const orders = require("../db/queries/orders");

//GET all orders
router.get("/", function (req, res, next) {
  orders.getOrders().then((data) => {
    res.json({ orders: data });
  })
  .catch(err => console.log(err));
});

router.get('/count/:id', function (req, res) {
  orders.getOrderCountByUserId(req.params.id)
    .then(result => {
      res.json(result)
    })
    .catch(err => console.log(err))
})

//GET order by id
router.get("/:id", function (req, res, next) {
  orders.getOrderByOrderId(req.params.id).then((data) => {
    res.json({ orders: data });
  })
  .catch(err => console.log(err));
});

//GET orders by user_id
router.get("/user/:id", function (req, res, next) {
  orders.getOrdersByUserId(req.params.id).then((data) => {
    res.json({ orders: data });
  })
  .catch(err => console.log(err));
});

module.exports = router;
