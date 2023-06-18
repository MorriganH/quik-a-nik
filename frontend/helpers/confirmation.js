export const trackDelivery = (setDeliveryStatus, setDeliveryString) => {

  // return setInterval to call setDeliveryStatus every 4.5 sec to update string
  return setInterval(() => {

    
    setDeliveryStatus((prevDeliveryStatus) => {
      
      // Stop condition for interval set to 6 (5 messages to display)
      if (prevDeliveryStatus === 6) {
        clearInterval(intervalId);
        return prevDeliveryStatus;
      } else {

        //Switch through delivery strings
        switch (prevDeliveryStatus) {
          case 1:
            setDeliveryString("Thanks for your order!");
            break;
          case 2:
            setDeliveryString("Order Status: Basket being prepped ...");
            break;
          case 3:
            setDeliveryString("Order Status: Basket out for delivery ...");
            break;
          case 4:
            setDeliveryString("Order Status: Your Certified Quik-a-nik Specialist will be in touch soon ... ");
            break;
          case 5:
            setDeliveryString("Order Status: Delivered. Enjoy!!");
            break;
          default:
            break;
        }

        // Increment the deliveryStatus state by one.
        return prevDeliveryStatus + 1;
      }
    });
  }, 4500);  //Time interval
};
