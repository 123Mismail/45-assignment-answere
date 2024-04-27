"use strict";
//Cities: Write a function called describe_city() 
//that accepts the name of a city and its country
function describe_city(nameCity, nameCountry = "pakistan ") {
    // The function should print a simple sentence,
    // such as Karachi is in Pakistan
    console.log(` ${nameCity} is in ${nameCountry}`);
}
// Call your function for three different cities
describe_city("karachi");
describe_city("peshawar");
//at least one of which is not in the default country.
describe_city("rom", "italy");
// more practicing same concept 
function promotion_inSalary(name, salary) {
    console.log(` possition in company is ${name} and salary is ${salary} lack per month.`);
}
promotion_inSalary("developper", 10); //10 lack per month
promotion_inSalary("cloud engineer", 15);
promotion_inSalary("AI expert ", 20);
