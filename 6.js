// ---
// - 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
// - 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
// - 3. Destructure the rectangle object by its properties or keys.
// - 4. Iterate through the users array and get all the keys of the object using destructuring
// - 5. Find the persons who have less than two skills
// ---

// - 6. Create a closure which has one inner function
// - 7. Create a closure which has three inner functions

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60,
};
const users = [
    {
        name: "Brook",
        scores: 75,
        skills: ["HTM", "CSS", "JS"],
        age: 16,
    },
    {
        name: "Alex",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "David",
        scores: 75,
        skills: ["HTM", "CSS"],
        age: 22,
    },
    {
        name: "John",
        scores: 85,
        skills: ["HTML"],
        age: 25,
    },
    {
        name: "Sara",
        scores: 95,
        skills: ["HTM", "CSS", "JS"],
        age: 26,
    },
    {
        name: "Martha",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "Thomas",
        scores: 90,
        skills: ["HTM", "CSS", "JS"],
        age: 20,
    },
];

// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;

// 3. Destructure the rectangle object by its properties or keys.
const { area, height, perimeter, width } = rectangle;

// 4. Iterate through the users array and get all the keys of the object using destructuring
users.forEach((user) => {
    const { age, name, scores, skills } = user;
    console.log(age, name, scores, skills);
});
console.log("\n");

// 5. Find the persons who have less than two skills
const usersWithLessThanTwoSkills = users.filter((user) => user.skills.length <= 2);
console.log("user with less than two skills", usersWithLessThanTwoSkills);

// 6. Create a closure which has one inner function
const outerFunction = () => {
    let val = "Hello";
    const innerFn = () => {
        console.log(val);
    };
    innerFn();
};

// 7. Create a closure which has three inner functions
const outerFn = () => {
    const val1 = "IronMan";
    const innerFn = () => {
        let val2 = "Thor";
        console.log(val1);

        const innerFn2 = () => {
            let val3 = "Hulk";
            console.log(val2);
            console.log(val1);

            const innerFn3 = () => {
                let val4 = "Spidey";
                console.log(val3);
                console.log(val2);
                console.log(val1);
            };
            innerFn3();
        };
        innerFn2();
    };
    innerFn();
};
outerFn();
