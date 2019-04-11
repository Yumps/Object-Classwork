console.log("main.js");

const cupcake = {
  color: ["yellow", "white", "brown"],
  flavor: "chocolate",
  size: "small",
  calories: 0,
  icing: true,
  eatCupcake: () => {
    console.log("yum");
  }
};

console.log(cupcake);

console.log("What color do we have?", cupcake.color);

for (let i = 0; i < cupcake.color.length; i++) {
  console.log("cupcake colors", cupcake.color[i]);
}

cupcake.color.forEach(color => {
  console.log("what is color", color);
  //THIS IS THE LONG WAY v
  console.log("this is so cool I love learning this " + color + " YA YEET!");
  //THIS IS THE SHORT WAY, BETTER v
  console.log(`the color is ${color}`);
});

//object
const car = {
  year: 2015,
  color: "red",
  make: "Ford",
  model: "Mustang"
};
console.log(car);

//array
const names = ["Kip", "Jack", "Jim", "Aang", "Dale", "John"];
console.log(names);

//array inside object
const family = {
  sister: { name: "Kim", age: 20, married: false },
  brother: { name: "Jim", age: 23, married: true },
  father: { name: "Dale", age: 54, married: true },
  familyMembers: ["Kim", "Jack", "Jim", "Aang", "Dale", "John"]
};
console.log(family);
console.log(family.brother);
