'use strict';

let tempArray = document.querySelectorAll('.form input, .form textarea');

let allElements = [];
for (let elem of tempArray) {
    if (elem.className != 'button') {
        allElements.push(elem);
    }
}

const error = document.querySelector('.error');

const listExpessions = [
    {   name:  'name',
        exp:   /^[A-ZА-ЯЁ]{1}[a-zа-яё]{2,15}$/,
        reply: 'Имя должно состоять только из букв, начинаться с заглавной буквы и быть не менее трех и не более шестнадцати символов.<br>'
    },
    {   name:  'phone',
        exp:   /^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/,
        reply: 'Телефон должен быть введен в формате: +7(000)000-0000 .<br>'
    },
    {   name:  'email',
        exp:   /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
        reply: 'Введите корректный e-mail.<br>'
    },
    {   name:  'message',
        exp:   /^.{3,1000}$/,
        reply: 'Введите сообщение. Не менее 3 символов и не более 1000.<br>'
    }
];

document.querySelector('.form').onsubmit = function(){
    error.innerHTML = '';
    clearBackGroundOfElements(allElements);
    let textError = '';
    for (let elem of allElements){
        for (let positionOfListExp of listExpessions) {
            if (elem.name == positionOfListExp.name) {
                if (!checkElement(positionOfListExp.exp, elem.value)){
                    textError += positionOfListExp.reply;
                    elem.style.backgroundColor = '#F7937E';
                }
            }
        }
    }
    error.innerHTML = textError;
    if (textError == '') {
        alert('Форма заполнена корректно!');
        return true;
    }else{
        return false;
    }
}

/**
 * Функция получает регулярное выражение и value элемента
 * Проверяет на соответсвие. Возвращает True если соответствует и False
 * если не соответствует.
 * @param exp
 * @param element
 * @returns {boolean}
 */
function checkElement(exp, value)
{
    return exp.test(value);
}

/**
 * Функция сбрасывает у всех элементов красный фон.
 * @param array
 */
function clearBackGroundOfElements(array)
{
    for (let value of array){
        value.style.backgroundColor = '#fff';
    }
}

