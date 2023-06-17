const db = require("../../configs/db.config");

//Queries product data, line item data, and order data based on order.id and then orders results so baskets show at the top of line_items list

const getLineItemsByOrderId = (id) => {
  return db.query("SELECT * FROM line_items JOIN orders ON orders.id = line_items.order_id JOIN products ON products.id = line_items.product_id WHERE orders.id = $1 ORDER BY is_basket DESC;", [id]).then(data => {
    return data.rows;
  });
};

const postLineItem = (lineItem) => {
  
  return db.query("INSERT into line_items (order_id, product_id, quantity, line_price_cents) values ($1, $2, $3, $4);", [lineItem.order_id, lineItem.product_id, lineItem.quantity, lineItem.line_price_cents]);
};


module.exports = { getLineItemsByOrderId, postLineItem };