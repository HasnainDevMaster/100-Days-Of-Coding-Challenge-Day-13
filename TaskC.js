"use strict";
// 100 Days Of Coding Challenge!
/** Question 39:
City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/
//----------------------------------------------------------------------------------------------------
// Using the Function: city_country
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Printing the city_country values function with three city-country pairs
console.log(city_country("Doha", "Qatar"));
console.log(city_country("Beirut", "Lebanon"));
console.log(city_country("Tehran", "Iran"));
