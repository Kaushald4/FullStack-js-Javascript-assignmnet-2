// ---
// - create an empty set
// - Create a set containing 0 to 10 using loop
// - Remove an element from a set
// - Clear a set
// - Create a set of 5 string elements from array
// - Create a map of countries and number of characters of a country

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

const mySet = new Set();
for (let i = 0; i <= 10; i++) {
    mySet.add(i);
}

console.log(mySet.delete(9));
mySet.clear();
console.log(mySet);

const stringSet = new Set(["Ironman", "Thor", "Spiderman", "Hulk", "Jarvis"]);
console.log(stringSet);

const myMap = new Map();
countries.forEach((country) => {
    myMap.set(country, country.length);
});
console.log(myMap);
