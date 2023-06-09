DROP TABLE IF EXISTS line_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone VARCHAR,
  is_employee BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  profile_img VARCHAR(255)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  total_price_cents INTEGER,
  stripe_charge_id VARCHAR(255) NOT NULL,
  longitude DECIMAL,
  latitude DECIMAL,
  location_description VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL, 
  price_cents INTEGER,
  description VARCHAR(255) NOT NULL,
  is_basket BOOLEAN,
  portions INTEGER,
  is_deluxe BOOLEAN,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE line_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER,
  line_price_cents INTEGER
);
