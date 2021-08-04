let balance = 1000;

class Item {
    constructor(itemName, count, price) {
        this.name = itemName;
        this.count = count;
        this.price = price;
    }
}

export let beer = new Item('beer', 100, 10);
export let wine = new Item('wine', 50, 100);
export let pepsi = new Item('pepsi', 80, 5);

export function checkBalance() {
    return `Баланс: ${balance} грн`;
}

export function buyItem(item, count) {
    if (item.count > 0 && item.count >= count) {
        item.count -= count;
        balance += item.price * count;
        return `Покупка совершена`;
    } else {
        return `Недостаточно товара ${item.name}`;
    }
}