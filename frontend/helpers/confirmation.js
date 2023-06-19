export const trackDelivery = (setDeliveryStatus, setDeliveryString) => {

  // Assign the ID returned by setInterval to a variable 'intervalStatus'
  const intervalStatus = setInterval(() => {
  
    // Call setDeliveryStatus every 4.5 sec to update the delivery string
    setDeliveryStatus((prevDeliveryStatus) => {
      
      // Stop condition for the interval is set to 6 (5 messages to display)
      if (prevDeliveryStatus === 6) {
        // Use the intervalStatus variable to clear the interval
        clearInterval(intervalStatus);
        return prevDeliveryStatus;
      } else {

        //Switch through delivery strings
        switch (prevDeliveryStatus) {
          case 1:
            setDeliveryString("Order received ...");
            break;
          case 2:
            setDeliveryString("Basket being prepped ...");
            break;
          case 3:
            setDeliveryString("Basket out for delivery ...");
            break;
          case 4:
            setDeliveryString("Certified Quik-a-nik Specialist arrived ... ");
            break;
          case 5:
            setDeliveryString("Delivered. Enjoy!!");
            break;
          default:
            break;
        }

        // Increment the deliveryStatus state by one.
        return prevDeliveryStatus + 1;
      }
    });
  }, 4500);  //Time interval

  // Return the intervalStatus so it can be used to clear the interval later
  return intervalStatus;
};

