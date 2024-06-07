$(document).ready(function () {
  //preventing to show alert multiple times after once after 70.
  let isAllowedToShowAlert = true;

  $('#sylius_add_to_cart_cartItem_quantity').on('change', function () {
    const value = $(this).val()

    if (value >= 70 && isAllowedToShowAlert) {
      isAllowedToShowAlert = false;
      alert('Great choice!');
    }

    //reset after going below 70
    if (value < 70) {
      isAllowedToShowAlert = true;
    }
  });

});
