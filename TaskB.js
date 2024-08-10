"use strict";
// 100 Days Of Coding Challenge!
/** Question 38:
Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country.*/
//-------------------------------------------------------------------------------------------------------------------------------
// Using Function: describe_city
function describe_city(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
} // Unknown = default country
// Values for describe_city function for three different cities
describe_city("Istanbul", "Turkey");
describe_city("Berlin", "Germany");
describe_city("Baku"); // Using the default country value
