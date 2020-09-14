const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    {id: 5, title: 'Phone', price: 99},
    {id: 6, title: 'TV', price: 1255},
    {id: 7, title: 'Refrigeration', price: 2550},
];
//Функция для формирования верстки каждого товара
const renderProduct = (item) => {
    return `<div class="product-item">
                <h3>${item.title}</h3>
                <img src="img/not-found.jpg" width="200">
                <p class="product-item-price">Цена: ${item.price} руб.</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    productsList.forEach(item => document.querySelector('.products').innerHTML += item);
    //document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);