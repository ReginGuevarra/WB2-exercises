let payRate = 25.00;
let hoursWorked = 40;

if (hoursWorked <= 40) {
  let grossPay = payRate * hoursWorked;
  console.log("Gross Pay: " + grossPay.toFixed(2));
} else {
  let regularHours = 40;
  let overtimeHours = hoursWorked - regularHours;
  let regularPay = payRate * regularHours;
  let overtimePay = payRate * 1.5 * overtimeHours;
  let grossPay = regularPay + overtimePay;
  console.log("Gross Pay: " + grossPay.toFixed(2));
}
