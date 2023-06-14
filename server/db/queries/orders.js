const db = require("../../configs/db.config");


const getOrders = () => {
  return db.query("SELECT * FROM orders ORDER BY created_at DESC;").then(data => {
    return data.rows;
  });
}


const getOrdersByUserId = (id) => {
  return db.query("SELECT * FROM orders JOIN users on orders.user_id = users.id WHERE user_id = $1 ORDER BY orders.created_at DESC;", [id]).then(data => {
    return data.rows;
  });
};

const getOrderByOrderId = (id) => {
  return db.query("SELECT * FROM orders WHERE orders.id = $1;", [id]).then(data => {
    return data.rows;
  });
};


module.exports = { getOrders, getOrdersByUserId, getOrderByOrderId };