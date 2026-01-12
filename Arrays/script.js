const shoppingList = [
    { name: 'Water', count: 2, buy: false, price: 50 },
    { name: 'Bread', count: 1, buy: false, price: 40 },
    { name: 'Eggs', count: 12, buy: false, price: 7 },
    { name: 'Cheese', count: 2, buy: false, price: 70 },
    { name: 'Coffee', count: 1, buy: false, price: 120 },
    { name: 'Milk', count: 3, buy: false, price: 50}
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
buyProduct("Eggs");
buyProduct("Milk");

function removeProduct(productName) {
    const newList = shoppingList.filter(
        item => item.name.toLowerCase() !== productName.toLowerCase()
    );

    shoppingList.length = 0;      
    shoppingList.push(...newList); 

    renderList();
}

function addProduct(name, count, price) {
  // шукаємо продукт у списку
  const existingProduct = shoppingList.find(
    item => item.name.toLowerCase() === name.toLowerCase()
  );

  if (existingProduct) {
    // якщо продукт вже є → збільшуємо кількість
    existingProduct.count += count;
    existingProduct.price = price; // можна оновлювати ціну, якщо потрібно
    existingProduct.sum = existingProduct.count * existingProduct.price;
  } else {
    // якщо продукт новий → додаємо обʼєкт
    shoppingList.push({
      name: name,
      count: count,
      buy: false,       // новий продукт ще не куплений
      price: price,
      sum: count * price
    });
  }
}
    renderList();
    