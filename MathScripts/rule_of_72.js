function yearsToDouble(initialValue, interestRate) {
  if (initialValue <= 0 || interestRate <= 0) {
    throw new Error("Initial value and interest rate must be greater than 0.");
  }

  let years = 72 / interestRate;
  return years;
}

// Usage example:
let initialValue = 1000; // Replace X with the actual amount.
let interestRate = 5; // Replace IR with the actual interest rate in percentage.

try {
  let result = yearsToDouble(initialValue, interestRate);
  console.log(`It will take approximately ${result.toFixed(2)} years to double the value of the savings account.`);
} catch (error) {
  console.error(error.message);
}

