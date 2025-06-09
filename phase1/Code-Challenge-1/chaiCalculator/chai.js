function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200; // ml
  const milkPerCup = 50;   // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2;     // teaspoons

  const water = numberOfCups * waterPerCup;
  const milk = numberOfCups * milkPerCup;
  const teaLeaves = numberOfCups * teaLeavesPerCup;
  const sugar = numberOfCups * sugarPerCup;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons\n`);
  console.log("Enjoy your Chai Bora!");
}

// Prompt user for input
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);
if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter a valid number of cups.");
}
