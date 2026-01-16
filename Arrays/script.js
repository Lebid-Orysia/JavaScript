// DATA (everything starts as NOT bought)
let shopList = [
    { name: 'молоко', count: 2, buy: false, price: 50 },
    { name: 'хліб', count: 1, buy: false, price: 45 },
    { name: 'шоколадка', count: 2, buy: false, price: 40 },
    { name: 'яблука', count: 5, buy: false, price: 15 },
    { name: 'сир', count: 1, buy: false, price: 120 },
    { name: 'ковбаса', count: 1, buy: false, price: 200 }
];

// SORT (not bought first)
function sortList(list) {
    const notBought = [];
    const bought = [];

    for (let item of list) {
        item.buy ? bought.push(item) : notBought.push(item);
    }
    return notBought.concat(bought);
}

// TOTAL — ONLY BOUGHT PRODUCTS
function calculateTotal() {
    return shopList.reduce((total, item) => {
        if (item.buy) {
            total += item.price * item.count;
        }
        return total;
    }, 0);
}

// RENDER
function renderList() {
    const ul = document.querySelector('ul');
    const totalEl = document.getElementById('total');

    ul.innerHTML = '';

    const sorted = sortList(shopList);

    for (let item of sorted) {
        const li = document.createElement('li');
        const btn = document.createElement('button');

        li.textContent = `${item.name} | ${item.count} | ${item.price} | ${item.price * item.count} `;
        btn.textContent = item.buy ? 'Return' : 'Buy';

        if (item.buy) {
            li.style.textDecoration = 'line-through';
        }

        btn.addEventListener('click', () => {
            item.buy = !item.buy;
            renderList();
        });

        li.appendChild(btn);
        ul.appendChild(li);
    }

    totalEl.textContent = calculateTotal();
}

// ADD PRODUCT
function addProduct(name, price, count) {
    const product = shopList.find(
        item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (product) {
        product.count += count;
    } else {
        shopList.push({
            name,
            count,
            buy: false,
            price
        });
    }

    renderList();
}

// BUTTON HANDLER
document.getElementById('addBtn').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const price = Number(document.getElementById('price').value);
    const count = Number(document.getElementById('count').value);

    if (!name || price <= 0 || count <= 0) return;

    addProduct(name, price, count);

    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('count').value = '';
});

// INIT
renderList();
