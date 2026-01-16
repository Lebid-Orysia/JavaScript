let shopList = [
    { name: 'молоко', count: 2, buy: false, price: 50, sum: 100 },
    { name: 'хліб', count: 1, buy: false, price: 45, sum: 45 },
    { name: 'шоколадка', count: 2, buy: true, price: 40, sum: 80 },
    { name: 'букет', count: 1, buy: false, price: 900, sum: 900 },
    { name: 'сіль', count: 1, buy: true, price: 20, sum: 20 }
];
function allList(list) {
    const notBought = [];
    const bought = [];

    for (let item of list) {
        if (item.buy) {
            bought.push(item);
        } else {
            notBought.push(item);
        }

    }
    return notBought.concat(bought);
}
function addProduct(name) {
    const ul = document.getElementsByTagName('ul')[0]
    const li = document.createElement('li')
    const btn = document.createElement('button')
    ul.appendChild(li).append(name, ' ', btn)
    btn.append('Buy')
}
addProduct('масло')