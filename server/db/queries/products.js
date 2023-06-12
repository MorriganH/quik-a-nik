const db = require("../../configs/db.config");

const getAllProducts = () => {
  return db.query("SELECT * FROM products;").then(data => {
    return data.rows;
  });
};

const getProductById = (id) => {
  return db.query("SELECT * FROM products WHERE id = $1;", [id]).then(data => {
    return data.rows;
  });
};

const getProductsByPortions = (portions) => {
  return db.query("SELECT * FROM products WHERE portions = $1 AND is_basket = true;", [portions]).then(data => {
    return data.rows;
  });
};

const getDeluxeProducts = () => {
  return db.query("SELECT * FROM products WHERE is_deluxe = TRUE;").then(data => 
    {
      return data.rows;
    })
};
const getIndividualProducts = () => {
  return db.query("SELECT * FROM products WHERE is_basket = false;").then(data => 
    {
      return data.rows;
    })
};

module.exports = { getAllProducts, getProductById, getProductsByPortions, getDeluxeProducts, getIndividualProducts };