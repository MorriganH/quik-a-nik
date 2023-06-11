const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["123", "456", "789"],
  })
  );
  app.use(express.static(path.join(__dirname, "public")));
  app.use(cors());
  
  const indexRouter = require("./routes/index");
  const usersRouter = require("./routes/users");
  const productsRouter = require("./routes/products");
  const mobileCheckout = require("./routes/mobile-checkout");
  
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use('/mobile-checkout', mobileCheckout);

module.exports = app;
