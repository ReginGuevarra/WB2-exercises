function calculateTip(billAmount, tipPercentage) {
  // Convert the percentage to a decimal by dividing by 100
  let tipDecimal = tipPercentage / 100;

  // Multiply the bill amount by the tip decimal to get the tip amount
  let tipAmount = billAmount * tipDecimal;

  // Return the tip amount
  return tipAmount;
}

// Example usage
let billAmount = 50; // $50
let tipPercentage = 15; // 15% tip
let tipAmount = calculateTip(billAmount, tipPercentage);

console.log("The tip amount is " + tipAmount.toFixed(2)); // The tip amount is: $7.50

  