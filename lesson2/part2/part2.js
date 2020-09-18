class Burger{
    constructor(size, stuffing){
        this.size = size; // размер: 1 - маленький. 2 - большой.
        this.stuffing = stuffing; // начинка: 1 - сыр, 2 - салат, 3 - картофель
        this.condiment = 0;
        this.mayonnaise = 0;
        this.calculateCalorie();
        this.calculatePrice();
    }

    addCondiment(){
        this.condiment = 1;
        this.calculatePrice();
    }

    addMayonnaise(){
        this.mayonnaise = 1;
        this.calculateCalorie();
        this.calculatePrice();
    }

    calculateCalorie(){
        let calories = (this.size * 20);
        switch (+this.stuffing){
            case 1:
                calories += 20;
                break;
            case 2:
                calories += 5;
                break;
            case 3:
                calories += 10;
                break;
        }
        calories += this.mayonnaise * 5;

        this.calories = calories;
    }

    calculatePrice() {
        let price = this.size * 50;
        switch (+this.stuffing) {
            case 1:
                price += 10;
                break;
            case 2:
                price += 20;
                break;
            case 3:
                price += 15;
                break;
        }
        price += this.mayonnaise * 20;
        price += this.condiment * 15;
        this.price = price;
    }

}

let size = prompt("Укажите размер бургера: 1 - маленький, 2 - большой");
if (!((size != 1)||(size != 2))) {
    alert ("Нужно было ввести 1 или 2.");
    size = 1;
}

let stuffing = prompt("Укажите начинку. 1 - сыр, 2 - салат, 3 - картофель");
if (!((stuffing != 1)||(stuffing != 2)||(stuffing != 3))) {
    alert ("Нужно было ввести 1, 2 или 3.");
    stuffing = 1;
}

let burger = new Burger(size,stuffing);

let condiment = prompt("Введите 1, если нужно добавить приправу.");
if (condiment != 1) {
    condiment = 0;
} else{
    burger.addCondiment();
}

let mayonnaise = prompt("Введите 1, если нужно добавить майонез.");
if (mayonnaise != 1) {
    mayonnaise = 0;
} else{
    burger.addMayonnaise();
}

alert('Калорийность заказанного бургера: ' + burger.calories + "кКал   Стоимость данного бургера: " + burger.price + " руб.");