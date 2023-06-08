-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users, orders, line_items, baskets, products, basket_products CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone INTEGER,
  is_employee BOOLEAN,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  profile_img VARCHAR(255)
);


CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  total_price INTEGER,
  stripe_charge_id VARCHAR(255) NOT NULL,
  longitude DECIMAL,
  Latitude DECIMAL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE baskets (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
image VARCHAR(255),
created_at TIMESTAMP DEFAULT NOW(),
updated_at TIMESTAMP DEFAULT NOW(),
portions INTEGER,
deluxe BOOLEAN
);


CREATE TABLE products (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL, 
price_cents INTEGER,
description VARCHAR(255) NOT NULL,
image VARCHAR(255),
created_at TIMESTAMP DEFAULT NOW(),
updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE basket_products (
  basket_id INTEGER REFERENCES baskets(id),
  product_id INTEGER REFERENCES products(id)

);
CREATE TABLE line_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id),
  basket_id INTEGER REFERENCES baskets(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER,
  item_price INTEGER,
  total_price INTEGER
);