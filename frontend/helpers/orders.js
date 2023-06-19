
const formatOrderId = (orderId) => {
  return`bsk000${orderId}`
}


const formatPrice = (priceInCents) => {
  return `$${(priceInCents / 100).toFixed(2)}`;
};

const formatDate = (timeStamp) => {
  const date = new Date(timeStamp);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${month}/${day}/${year}`;
};

const formatOrderData = (data) => {
  const ordersData = data.orders;
  const ordersById = {};

  for (let i = ordersData.length - 1; i > 0; i--) {
    const order = ordersData[i];

    if (!ordersById[order.id]) {
      // If this order id is not in ordersById, add new object for it
      ordersById[order.id] = {
        id: formatOrderId(order.id),
        user_id: order.user_id,
        first_name: order.first_name,
        email: order.email,
        total_price_cents: formatPrice(order.total_price_cents),
        longitude: order.longitude,
        latitude: order.latitude,
        created_at: formatDate(order.created_at),
        line_items: [],
      };
    }

    // Add the line item to the appropriate order
    ordersById[order.id].line_items.push({
      name: order.name,
      line_price_cents: formatPrice(order.line_price_cents),
      quantity: order.quantity,
    });
  }

  // Convert the data from an object to an array for FlatList to work
  return Object.values(ordersById);
};

export { formatOrderData, formatPrice, formatOrderId };
