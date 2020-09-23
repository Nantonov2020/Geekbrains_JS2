const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров
        this.allProducts = [];//массив объектов
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class Basket {
    clickButtonBasket()
    {
         fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .then(data => {
                if (data.contents.length == 0) {
                    alert('Корзина пуста');
                }else {
                    let textBasket = '<br><br><table align="center" border="1"><tr><th>№ п/п</th><th width="200">Наименование</th><th width="100">Цена</th><th width="100">Количество</th><th width="100">Сумма</th></tr>';
                    document.querySelector('.basket').style.display = 'block';
                    let k = 1;
                    let allSumm = 0;
                    data.contents.forEach(function (item, i) {
                        let summ = (+item.price)*(item.quantity);
                        allSumm += summ;
                        textBasket += '<tr align="center"><td>'+(k++)+'</td><td>'+item.product_name+'</td><td>'+item.price+'</td><td><button>+</button>'+item.quantity+'<button>-</button></td><td>'+summ+'</td></tr>';
                    })
                    textBasket += '<tr align="center"><td colspan="4"><b>ИТОГО:</b></td><td><b>'+allSumm+'</b></td></tr></table>';
                    document.querySelector('.basket_down').innerHTML = textBasket;
                }
            })
    }

    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }
}

class ElemBasket {

}

let list = new ProductsList();
let basket = new Basket();
document.querySelector('.header__basket').addEventListener('click', basket.clickButtonBasket);
document.querySelector('.basket_close').addEventListener('click', ()=>{document.querySelector('.basket').style.display = 'none'});

