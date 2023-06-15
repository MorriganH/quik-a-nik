const db = require("../../configs/db.config");

const getAllUsers = () => {
  return db.query("SELECT * FROM users;").then(data => {
    return data.rows;
  });
};

const getUserById = id => {
  return db.query("SELECT * FROM users WHERE id = $1", [id]).then(data => {
    return data.rows;
  });
};

const getUserByEmail = email => {
  return db
    .query("SELECT * FROM users WHERE email = $1", [email])
    .then(data => {
      return data.rows[0];
    });
};

const addUser = userInfo => {
  const { firstName, lastName, email, password } = userInfo;
  return db
    .query(
      `INSERT INTO users (first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING id, first_name, last_name, email, is_employee, phone, profile_img`,
      [firstName, lastName, email, password]
    )
    .then(response => response.rows[0]);
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  addUser,
};
