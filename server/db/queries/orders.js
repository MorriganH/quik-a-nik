const db = require("../../configs/db.config");

const getOrdersByUserId = (id) => {
  return db.query("SELECT * FROM orders JOIN users on orders.user_id = users.id WHERE user_id = $1 ORDER BY orders.created_at DESC;", [id]).then(data => {
    return data.rows;
  });
};

const getOrdersByOrderId = (id) => {
  return db.query("SELECT * FROM orders WHERE order.id = $1;", [id]).then(data => {
    return data.rows;
  });
};


module.exports = { getOrdersByUserId, getOrdersByOrderId };