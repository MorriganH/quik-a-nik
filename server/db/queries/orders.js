const db = require("../../configs/db.config");

const getOrdersByUserId = () => {
  return db.query("SELECT * FROM orders JOIN users on orders.user_id = users.id WHERE user_id = $1 ORDER BY orders.created_at DESC;").then(data => {
    return data.rows;
  });
};


module.exports = { getOrdersByUserId };