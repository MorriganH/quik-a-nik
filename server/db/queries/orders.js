const db = require("../../configs/db.config");

const getOrders = () => {
  return db
    .query(
      "SELECT orders.id, orders.user_id, orders.total_price_cents, orders.longitude, orders.latitude, orders.created_at, line_items.quantity, line_items.line_price_cents, products.name, users.first_name, users.email FROM orders JOIN line_items ON orders.id = line_items.order_id JOIN products ON line_items.product_id = products.id JOIN users ON users.id = orders.user_id ORDER BY orders.created_at DESC;"
    )
    .then(data => {
      return data.rows;
    });
};

const getOrdersByUserId = id => {
  return db
    .query(
      "SELECT orders.id, orders.user_id, orders.total_price_cents, orders.longitude, orders.latitude, orders.created_at, line_items.quantity, line_items.line_price_cents, products.name, users.first_name, users.email FROM orders JOIN line_items ON orders.id = line_items.order_id JOIN products ON line_items.product_id = products.id JOIN users ON users.id = orders.user_id WHERE orders.user_id = $1 ORDER BY orders.created_at DESC;",
      [id]
    )
    .then(data => {
      return data.rows;
    });
};

const getOrderCountByUserId = id => {
  return db
    .query(
      `SELECT COUNT(*)
      FROM orders
      WHERE user_id = $1;
      `,
      [id]
    )
    .then(data => data.rows[0].count);
};

const getOrderByOrderId = id => {
  return db
    .query("SELECT * FROM orders WHERE orders.id = $1;", [id])
    .then(data => {
      return data.rows;
    });
};

module.exports = {
  getOrders,
  getOrdersByUserId,
  getOrderCountByUserId,
  getOrderByOrderId,
};
