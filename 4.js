/**
 * ---
- 1. Explain the difference between forEach, map, filter, and reduce.
- 2. Define a callback function before you use it in forEach, map, filter or reduce.
- 3. Use forEach to console.log each name in the names array.
- 4. Use forEach to console.log each country in the countries array.
- 5. Use forEach to console.log each number in the numbers array.
- 6. Use map to create a new array by changing each country to uppercase in the countries array.
- 7. Use map to create an array of countries length from countries array.
- 8. Use map to create a new array by changing each number to square in the numbers array
- 9. Use map to change to each name to uppercase in the names array
- 10. Use map to map the products array to its corresponding prices.
- 11. Use filter to filter out countries containing land.
- 12. Use filter to filter out countries having six character.
- 13. Use filter to filter out countries containing six letters and more in the country array.
- 14. Use filter to filter out country start with 'E';
- 15. Use filter to filter out only prices with values.
- 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
- 17. Use reduce to sum all the numbers in the numbers array.
- 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
- 19. Explain the difference between some and every
- 20. Use some to check if some names' length greater than seven in names array
- 21. Use every to check if all the countries contain the word land
- 22. Explain the difference between find and findIndex.
- 23. Use find to find the first country containing only six letters in the countries array
- 24. Use findIndex to find the position of the first country containing only six letters in the countries array
- 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
- 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

 */

const countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];

// forEach is used to simply loop and perform some task on array. it will accept callback as first argument but in forEach we can not return anything from forEach
// map will always return new modifed array based on given condition it will also accept callback fn as first argument

//3.
names.forEach((name) => {
    console.log(name);
});
console.log("\n");

//4.
countries.forEach((country) => {
    console.log(country);
});
console.log("\n");

//5.
numbers.forEach((number) => {
    console.log(number);
});
console.log("\n");

//6.
const newCountries = countries.map((country) => {
    return country.toUpperCase();
});
console.log(newCountries);
console.log("\n");

//7.
const countriesLength = countries.map((country) => country.length);
console.log("countries length ", countriesLength);
console.log("\n");

//8.
const newSqNumbers = numbers.map((number) => Math.pow(number, 2));
console.log(newSqNumbers);
console.log("\n");

//9.
const newNames = names.map((name) => name.toUpperCase());
console.log(newNames);
console.log("\n");

//10. Use map to map the products array to its corresponding prices.

// 11. Use filter to filter out countries containing land.
const filteredCountries = countries.filter((country) => !country.toLowerCase().includes("land"));
console.log(filteredCountries);
console.log("\n");

//12. Use filter to filter out countries having six character.
const notSixDigitCountries = countries.filter((country) => country.length !== 6);
console.log("not six digits country ", notSixDigitCountries);
console.log("\n");

//13. Use filter to filter out countries containing six letters and more in the country array.
const newCountries2 = countries.filter((country) => country.length >= 6);
console.log("six or more than digits country ", newCountries2);
console.log("\n");

//14. Use filter to filter out country start with 'E';
const countriesNotStartWithE = countries.filter((country) => !country.startsWith("E"));
console.log("Country which not start with E ", countriesNotStartWithE);
console.log("\n");

//15. Use filter to filter out only prices with values.
const productWithPrices = products.filter((product) => {
    if (typeof product.price === "number") {
        return true;
    } else if (typeof product.price === "string") {
        // if number is in string and string is empty
        if (product.price.trim().length === 0) {
            return false;

            // if number is in string but not a valid number
        } else if (isNaN(product.price.trim())) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
});
console.log("Product with prices", productWithPrices);
console.log("\n");

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringLists = (heros) => {
    return heros.filter((hero) => typeof hero === "string");
};

const myArray = [
    true,
    "Ironman",
    "Thor",
    "Hulk",
    "Caption America",
    98,
    { isActive: false },
    false,
    null,
];
console.log("array with only strings", getStringLists(myArray));
console.log("\n");

// 17. Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((prev, curr) => prev + curr, 0);
console.log("sum of all number in numbers array: ", sum);
console.log("\n");

// 18. Use reduce to concatenate all the countries and to produce this sentence:
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const sentance = countries.reduce((prev, curr) => {
    if (prev.length === 0) {
        return curr;
    }

    if (curr === countries.at(-1)) {
        return `${prev}, and ${curr} are north European countries`;
    }

    return `${prev}, ${curr}`;
}, "");
console.log("18.", sentance);
console.log("\n");

// 19. Explain the difference between some and every

// 20. Use some to check if some names' length greater than seven in names array
const isNamesLengthGtTanSeven = names.some((name) => name.length > 7);
console.log("Is some names are greater than seven:", isNamesLengthGtTanSeven);
console.log("\n");

// 21. Use every to check if all the countries contain the word land
const isAllCountriesContainLand = countries.every((country) =>
    country.toLowerCase().includes("land")
);
console.log("Is all countryies contain land:", isAllCountriesContainLand);
console.log("\n");

// 22. Explain the difference between find and findIndex.

// 23. Use find to find the first country containing only six letters in the countries array
const firstCountryWithSixLetters = countries.find((country) => country.length === 6);
console.log(
    "First country in the country array that is six character long:",
    firstCountryWithSixLetters
);
console.log("\n");

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
const firstCountryIndexWithSixLetters = countries.findIndex((country) => country.length === 6);
console.log(
    "First country Index in the country array that is six character long:",
    firstCountryIndexWithSixLetters
);
console.log("\n");

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const positionOfNorway = countries.findIndex((country) => country === "Norway");
console.log("position of Norway in countries array:", positionOfNorway);
console.log("\n");

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const positionOfRussia = countries.findIndex((country) => country === "Russia");
console.log("position of Russia in countries array:", positionOfRussia);
console.log("\n");
