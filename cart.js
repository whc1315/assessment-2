///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((total, amount) => total + amount.price, 0);

console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
  let grandTotal = cartTotal * tax + cartTotal;
  let finalTotal = grandTotal - couponValue;
  console.log(finalTotal);
}
calcFinalPrice(20, 4, 0.06);

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    A customer object needs a few things, name so we know the name, card info so we can receive payment, billing address to charge the card, email for an e receipt and offers, phone number to call if an error occurs.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer = {
  name: "Tim Jones", //its a Name so its a string
  cardInfo: 837982, //its a Number for the Card number
  billingAddress: "12343 W Jones Rd", // its a string due to the combo of words and numbers
  email: "tj789@gsnail.com", //String due to potential of numbers and letters
  phoneNumber: 83823456578, //lastly a number for the phone number
};
