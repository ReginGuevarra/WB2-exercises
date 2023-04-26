//Inout
let amountOfPeople = 38;
let seatPerVans = 15;
let amountOfRentPerVan = 250;



//Algorithm
let amountOfVans = amountOfPeople / seatPerVans
amountOfVans = Math.ceil(amountOfVans);

//Calculate the total rent
let amountToPayPerPerson = (amountOfVans * amountOfRentPerVan) / amountOfPeople



//Output
console.log("We will need " + amountOfVans + " vans and that will cost " + amountToPayPerPerson.toFixed(2));