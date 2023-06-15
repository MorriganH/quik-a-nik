const db = require("../../configs/db.config");

const getOrders = () => {
  return db
    .query(
      "SELECT orders.id, orders.user_id, orders.total_price_cents, orders.longitude, orders.latitude, orders.created_at, line_items.quantity, line_items.line_price_cents, products.name, users.first_name, users.email FROM orders JOIN line_items ON orders.id = line_items.order_id JOIN products ON line_items.product_id = products.id JOIN users ON users.id = orders.user_id ORDER BY orders.created_at DESC;"
    )
    .then((data) => {
      return data.rows;
    });
};

const getOrdersByUserId = (id) => {
  return db
    .query(
      "SELECT * FROM orders JOIN users on orders.user_id = users.id WHERE user_id = $1 ORDER BY orders.created_at DESC;",
      [id]
    )
    .then((data) => {
      return data.rows;
    });
};

const getOrderByOrderId = (id) => {
  return db
    .query("SELECT * FROM orders WHERE orders.id = $1;", [id])
    .then((data) => {
      return data.rows;
    });
};

module.exports = { getOrders, getOrdersByUserId, getOrderByOrderId };
