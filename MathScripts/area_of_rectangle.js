//input
let length = 10;
let width = 20;
let surface = length * width // 200
let amountFeetPerBox = 12;


//Algorithm // Can't be half and should add 10% rest boxes
let amountOfBoxes = (totalSurfaceFeet / amountFeetPerBox) * 1.1;

//Calculate 10% extra

console.log("Amount of boxes; " + Math.ceil(amountOfBoxes));




//output
