const shoppingList = [
    { name: 'Water', count: 2, buy: false, price: 50 },
    { name: 'Bread', count: 1, buy: false, price: 40 },
    { name: 'Eggs', count: 12, buy: false, price: 7 },
    { name: 'Cheese', count: 2, buy: false, price: 70 },
    { name: 'Coffee', count: 1, buy: false, price: 120 },
    { name: 'Milk', count: 3, buy: false, price: 50 }
];

shoppingList.forEach(item => {
    item.sum = item.count * item.price;
    item.bought = item.buy;
});

function renderList() {
    const ul = document.getElementById("list");
    ul.innerHTML = "";

    const notBought = shoppingList.filter(item => !item.buy);
    const bought = shoppingList.filter(item => item.buy);
    const sortedList = [...notBought, ...bought];

    sortedList.forEach(item => {
        const li = document.createElement("li");
        const text = document.createElement("span");
        text.textContent = `${item.name} — ${item.count} шт. (${item.sum} грн)`;
        li.appendChild(text);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Видалити";
        removeButton.addEventListener("click", () => {
            removeProduct(item.name);
        });
        li.appendChild(removeButton);

        if (item.buy === false) {
            const button = document.createElement("button");
            button.textContent = "Купити";

            button.addEventListener("click", () => {
                buyProduct(item.name);
            });

            li.appendChild(button);
        } else {
            li.classList.add("bought");
        }


        ul.appendChild(li);
    });
}

renderList();
function buyProduct(productName) {
    const product = shoppingList.find(
        item => item.name.toLowerCase() === productName.toLowerCase()
    );

    if (product) {
        product.buy = true;
        renderList();
    } else {
        alert("Товар не знайдено");
    }
}


function removeProduct(productName) {
    const newList = shoppingList.filter(
        item => item.name.toLowerCase() !== productName.toLowerCase()
    );

    shoppingList.length = 0;
    shoppingList.push(...newList);

    renderList();
}


const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const countInput = document.getElementById('count');
const addBtn = document.getElementById('addBtn');
const output = document.getElementById('output');

addBtn.onclick = function () {
    const name = nameInput.value;
    const price = Number(priceInput.value);
    const count = Number(countInput.value);

    if (!name || price <= 0 || count <= 0) {
        alert('Something is wrong with your wish');
        return;
    }
    addProduct(name, count, price, false);
    renderList();

    nameInput.value = "";
    priceInput.value = "";
    countInput.value = "";
}
function addProduct(name, count, price, buy) {
    const presentProduct = shoppingList.find(
        product => product.name.toUpperCase() === name.toUpperCase()
    );


    if (presentProduct) {
        presentProduct.count += count;
        presentProduct.price = presentProduct.price * presentProduct.count;
    }
    else {
        shoppingList.push({
            name: name,
            count: count,
            buy: buy,
            price: price * count
        });
    }
}
renderList();




