var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
// Write a while loop that prints out the contents of ingredients:
while(i < ingredients.length) {
  // console.log(ingredients[i], i);
  i += 1;
}

// Write a for loop that prints out the contents of ingredients:
for ( let x = 0; x < ingredients.length ; x++) {
  // console.log(ingredients[x], x);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let y = ingredients.length - 1; y >= 0; y--) {
  console.log(y);
}