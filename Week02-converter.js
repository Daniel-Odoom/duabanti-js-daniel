// simple converter functions
function cedisToDollars(cedis){
    const rate = 0.085;
    return cedis * rate;
}// formula for converting cedis to dollars is cedis * 0.085
function KmToMiles(km){
    const rate = 0.621371;
    return km * rate;
    
}// formula for converting km to miles is km * 0.621371
function celsiusToFahrenheit(celsius){
    return celsius * 9/5 + 32;
}// formula for converting celsius to fahrenheit is (celsius * 9/5) + 32
let cedis= 100;// amount in cedis to convert
let km = 10;// amount in km to convert
let celsius = 25;// amount in celsius to convert

const dollars = cedisToDollars(cedis);
const miles =KmToMiles(km);
const fahrenheit = celsiusToFahrenheit(celsius);

console.log(`GH₵${cedis}=$${dollars.toFixed(2)}`);
console.log(`$(km) km= ${miles.toFixed(2)} miles`);
console.log(`${celsius}c = ${fahrenheit.toFixed(2)}`);