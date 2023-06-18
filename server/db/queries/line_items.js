const db = require("../../configs/db.config");

//Queries product data, line item data, and order data based on order.id and then orders results so baskets show at the top of line_items list

const postLineItem = lineItem => {
  return db.query(
    `INSERT INTO line_items (order_id, product_id, quantity, line_price_cents)
    VALUES ($1, $2, $3, $4);
    `,
    [
      lineItem.order_id,
      lineItem.product_id,
      lineItem.quantity,
      lineItem.line_price_cents,
    ]
  );
};

module.exports = { postLineItem };
