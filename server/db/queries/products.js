const db = require("../../configs/db.config");

const getAllProducts = () => {
  return db.query("SELECT * FROM products;").then(data => {
    return data.rows;
  });
};

const getProductById = id => {
  return db.query("SELECT * FROM products WHERE id = $1", [id]).then(data => {
    return data.rows;
  });
};

module.exports = { getAllProducts, getProductById };