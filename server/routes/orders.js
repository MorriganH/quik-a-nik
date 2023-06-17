const express = require("express");
const router = express.Router();
const orders = require("../db/queries/orders");
const line_items = require("../db/queries/line_items")

//GET all orders
router.get("/", function (req, res) {
  orders.getOrders().then((data) => {
    console.log(data);
    res.json({ orders: data });
  });
});

router.post("/", function (req, res) {
  const { userSession, locationInfo, cart, stripe_charge_id } = req.body;
  const total_price_cents = Math.round(
    cart.reduce(
      (sum, current) =>
        sum + (current.price_cents + 125) * current.default_quantity,
      0
    ) * 1.13
  );
  const order = {
    user_id: userSession.id,
    total_price_cents,
    stripe_charge_id,
    longitude: locationInfo.longitude,
    latitude: locationInfo.latitude,
    location_description: locationInfo.locationDetails,
  };

  console.log(order);
  orders.postOrder(order)
  .then((order_result) => {
    const order_id = order_result.rows[0].id    

    cart.forEach((item) => {
      const line_price_cents = (item.price_cents * item.default_quantity)
      const lineItem = {
        order_id,
        product_id: item.id,
        quantity: item.default_quantity,
        line_price_cents
      }

      line_items.postLineItem(lineItem)
    });
  })


});


//GET orders by user_id
router.get("/user/:id", function (req, res) {
  orders.getOrdersByUserId(req.params.id).then((data) => {
    console.log(data);
    res.json({ orders: data });
  });
});

//GET order by id
router.get("/:id", function (req, res) {
  orders.getOrderByOrderId(req.params.id).then((data) => {
    console.log(data);
    res.json({ orders: data });
  });
});

module.exports = router;
