const fruits = ["사과", "바나나", "오렌지"];
const moreFruits = [...fruits, "포도", "딸기"];
fruits.push("망고");

console.log(fruits);
console.log(moreFruits);

//---------------------

const product = { name: "노트북", price: 1000000, stock: 50 };

const updated1 = { price: 900000, ...product };
const updated2 = { ...product, price: 900000 };

console.log(updated1.price);
console.log(updated2.price);
