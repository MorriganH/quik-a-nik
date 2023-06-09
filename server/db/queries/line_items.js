const db = require("../../configs/db.config");

//Queries product data, line item data, and order data based on order.id and then orders results so baskets show at the top of line_items list

const getLineItemsByOrderId = () => {
  return db.query("SELECT * FROM line_items JOIN orders ON orders.id = line_items.order_id JOIN products ON products.id = line_items.product_id WHERE orders.id = $1 ORDER BY is_basket DESC;").then(data => {
    return data.rows;
  });
};


module.exports = { getLineItemsByOrderId };