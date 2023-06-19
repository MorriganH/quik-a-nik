const db = require("../../configs/db.config");

const getAllProducts = () => {
  return db.query("SELECT * FROM products;").then((data) => {
    return data.rows;
  });
};

const getProductById = (id) => {
  return db
    .query("SELECT * FROM products WHERE id = $1;", [id])
    .then((data) => {
      return data.rows;
    });
};

const getProductsByPortions = (portions) => {
  return db
    .query("SELECT * FROM products WHERE portions = $1 AND type = 'basket';", [
      portions,
    ])
    .then((data) => {
      return data.rows;
    });
};

const getPartyProducts = () => {
  return db
    .query("SELECT * FROM products WHERE portions > 4 AND type = 'basket';")
    .then((data) => {
      return data.rows;
    });
};

const getDeluxeProducts = () => {
  return db
    .query("SELECT * FROM products WHERE is_deluxe = TRUE;")
    .then((data) => {
      return data.rows;
    });
};
const getIndividualProducts = () => {
  return db
    .query("SELECT * FROM products WHERE type != 'basket';")
    .then((data) => {
      return data.rows;
    });
};

const getPotatoes = () => {
  return db
    .query(
      `SELECT *
    FROM products
    WHERE name LIKE 'Potato%'
    ;`
    )
    .then((data) => {
      return data.rows;
    });
};

const getDrinks = () => {
  return db
    .query(
      `SELECT *
    FROM products
    WHERE type = 'drink'
    ;`
    )
    .then((data) => {
      return data.rows;
    });
};

const getBaskets = () => {
  return db
    .query(
      `SELECT *
    FROM products
    WHERE type = 'basket'
    ;`
    )
    .then((data) => {
      return data.rows;
    });
};
const getSnacks = () => {
  return db
    .query(
      `SELECT *
    FROM products
    WHERE type = 'snack'
    ;`
    )
    .then((data) => {
      return data.rows;
    });
};

const getMerch = () => {
  return db
    .query(
      `SELECT *
    FROM products
    WHERE type = 'product'
    ;`
    )
    .then((data) => {
      return data.rows;
    });
};
const getRelish = () => {
  return db
    .query(
      `SELECT *
    FROM products
    WHERE type = 'condiment'
    ;`
    )
    .then((data) => {
      return data.rows;
    });
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByPortions,
  getDeluxeProducts,
  getIndividualProducts,
  getPartyProducts,
  getPotatoes,
  getDrinks,
  getBaskets,
  getSnacks,
  getMerch,
  getRelish
};
