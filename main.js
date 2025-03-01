let userName = prompt("Welcome to EatNow Cafe! Please enter your first name:");
if (!userName) {
    userName = "Guest";
}

alert(`Hello, ${userName}! Welcome to EatNow Cafe.`);

let menu = [
    "Grilled Chicken",
    "Pasta Primavera",
    "Margherita Pizza",
    "Caesar Salad",
    "Beef Burger"
];

console.log("Here is our menu:");
menu.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});


let newDish = prompt("Would you like to suggest a new dish for our menu?");
if (newDish && newDish.trim() !== "") {
    menu.push(newDish.trim());
    console.log("Thank you for your suggestion! Here is the updated menu:");
    menu.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
} else {
    console.log("No dish was added. Please provide a valid dish name next time!");
}
