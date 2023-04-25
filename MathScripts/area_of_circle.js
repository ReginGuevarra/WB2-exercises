function calculateCircleArea(radius) {
  let pi = Math.PI;
  let area = pi * Math.pow(radius, 2);
  return area;
}

let radius = 5;
let area = calculateCircleArea(radius);

console.log("The area of the circle with radius", radius, "is", area);
