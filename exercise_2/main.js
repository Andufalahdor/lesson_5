import * as shop from "./shop.js";

//test 
console.log(shop.buyItem(shop.beer, 100));
console.log(shop.checkBalance());

console.log(shop.buyItem(shop.beer, 10));
console.log(shop.checkBalance());

console.log(shop.buyItem(shop.wine, 50));
console.log(shop.checkBalance());

console.log(shop.buyItem(shop.wine, 1));
console.log(shop.checkBalance());

console.log(shop.buyItem(shop.pepsi, 80));
console.log(shop.checkBalance());

console.log(shop.buyItem(shop.pepsi, 1));
console.log(shop.checkBalance());