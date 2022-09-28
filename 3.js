/*3. The products array has three elements and each of them has six properties. 
    a. Create a function called rateProduct which rates the product 
    b. Create a function called averageRating which calculate the average rating of a product 



*/

const products = [
    {
        _id: "eedfcf",
        name: "mobile phone",
        description: "Huawei Honor",
        price: 200,
        ratings: [
            { userId: "fg12cy", rate: 5 },
            { userId: "zwf8md", rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: "aegfal",
        name: "Laptop",
        description: "MacPro: System Darwin",
        price: 2500,
        ratings: [],
        likes: ["fg12cy"],
    },
    {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
    },
];

const rateProduct = (prodId, rating, userId) => {
    const product = products.find((product) => product._id === prodId);

    if (!product) return "No products found!";

    // if user has already rated this product then update the rating
    let isRated = product.ratings.find((rating) => rating.userId === userId);

    if (isRated) {
        isRated.rate = rating;
        console.log(`${product.name} rated ${rating}`);
        return;
    }

    product.ratings.push({ userId, rate: rating });

    console.log(`${product.name} rated ${rating}`);
};

const calculateAverageRating = (prodId) => {
    const prod = products.find((product) => product._id === prodId);

    if (!prod) {
        console.log(`Product with this id ${prodId} not found!`);
        return;
    }

    const { rate } = prod.ratings.reduce(
        (prev, curr) => {
            return { rate: prev.rate + curr.rate };
        },
        { rate: 0 }
    );
    return rate / prod.ratings.length;
};

const likeProduct = (prodId, userId) => {
    const product = products.find((prod) => prod._id === prodId);

    if (!product) {
        console.log("Product not found!");
        return;
    }

    if (product.likes.includes(userId)) {
        const prodIndex = product.likes.indexOf(userId);
        product.likes.slice(prodIndex, 1);
        console.log("Like removed");
        return;
    }

    product.likes.push(userId);
    console.log("Liked");
};

rateProduct("eedfcf", 4, "fg12cyy");
const avgRating = calculateAverageRating("eedfcf");
console.log(avgRating);
likeProduct("eedfc", "1");
