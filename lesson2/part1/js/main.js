class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
//        this.allProducts = [];
        this._fetchProducts();
    }

    goodsList(){
        let summ = 0;
        this.goods.forEach (item => summ+=item.price);
        console.log(summ);
    }

    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
            {id: 5, title: 'Phone', price: 99},
            {id: 6, title: 'TV', price: 1255},
            {id: 7, title: 'Refrigeration', price: 2550},
        ];
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
//            this.allProducts.push(productObj);
//            block.innerHTML += productObj.render();
            block.insertAdjacentHTML('beforeend',productObj.render());

        }
    }
}

class ProductItem{
    constructor(product,img='https://placehold.it/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }

    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Basket{
    constructor(){
        this.positions = [];
    }

    addToBasket(item){

    }

    deleteFromBasket(item) {

    }

    showBasket(){

    }

    summAllPositions(){

    }

}

class itemBasket{
    constructor(id, name, count, price){
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = count;
        this.summ = count * price;
    }
    addCount(){

    }
    decreaseCount(){

    }
}

let list = new ProductsList();
list.render();
list.goodsList();


//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
////Функция для формирования верстки каждого товара
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => {
//    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//};
//
//renderPage(products);





/*
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

 */