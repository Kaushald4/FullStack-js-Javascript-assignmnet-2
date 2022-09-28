const users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
    },
    {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
    },
];

// helper function to check if user is already present in array
const checkIfUserExist = (email, username) => {
    return users.find((user) => {
        if (user.email === email || user.username === username) {
            return true;
        } else {
            return false;
        }
    });
};

const signUp = (id, username, email, password) => {
    if (checkIfUserExist(email, username)) {
        console.log(`User already exist with this username and email`);
    } else {
        users.push({
            _id: id,
            username,
            email,
            password,
            createdAt: new Date(),
            isLoggedIn: false,
        });
        console.log("Account created successfully..");
    }
};

const signIn = (usernameOrEmail, password) => {
    if (!password) {
        console.log("Enter password!");
        return;
    }
    if (!usernameOrEmail) {
        console.log("Enter uername!");
        return;
    }

    let isEmail = false;
    if (usernameOrEmail.includes("@")) {
        isEmail = true;
    }

    const user = users.find((user) => {
        if (isEmail && user.email === usernameOrEmail) {
            return true;
        } else if (!isEmail && user.username.toLowerCase() === usernameOrEmail.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    });

    if (!user) {
        console.log("User doesn't exist with this username or email!");
        return;
    }

    if (user.password !== password) {
        console.log("Invalid Password!");
        return;
    }

    user.isLoggedIn = true;
    console.log("User Logged In");
};

signUp("12", "Marthaa", "marth@martha.com", "12345678");
signIn("Marthaa", "12345678");
