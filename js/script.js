
'use strict';
function java() {
    alert('Я JavaScript');
}
function fio() {
    var isTrue = false;
    while (isTrue != true) {
        let surname = prompt('Введите фамилию:', 'Фамилия');
        let name = prompt('Введите имя:', 'Имя');
        let otch = prompt('Введите отчество:', 'Отчество');

        if (surname === null || name === null || otch === null) {
            alert("Ввод отменен. Пожалуйста, попробуйте снова.");
            continue;
        }

        isTrue = confirm(`Ваше ФИО: ${surname} ${name} ${otch}.\nВсе верно?`);
        if (isTrue) {
            alert(`Здравствуйте ${surname} ${name} ${otch}!`);
        }
    }
}


// задание 1
function john() {
    let admin;
    let name;
    name = "Джон";
    admin = name;
    alert(admin);
}

// // задание 2
function city() {
    let cityname = prompt('ВВедите название города:', "");
    let cityyear = prompt('Введите дату оброзование города:', "");
    let population = prompt('Введите количество людей', "");
    let currentyear = new Date().getFullYear();
    let cityAge = currentyear - parseInt(cityyear);
    alert(`Городу ${cityname} исполнилось ${cityAge} лет с момента его образования. Население - ${population} человек.`);
}

// // задание 3
function circle() {
    const p = 3.14;
    let radius = prompt('Введите радиус круга')
    let S = p * (radius ** 2);
    alert(`Площадь круга равна ${S} см2`)
}


// задание 4
function MATH() {
    let a = prompt('ВВедите число a', "");
    let b = prompt('Введите число b:', "");
    let sum = (parseInt(a) + parseInt(b));
    let raz = (parseInt(a) - parseInt(b));
    let chast = (parseInt(a) / parseInt(b));
    let pr = (parseInt(a) * parseInt(b));
    alert(`сумма равна ${sum} разность равна ${raz} частное равно ${chast} произведение равно ${pr}`);
}

// Задание 1 Практика 3

function money() {
    const itemPrice = parseFloat(prompt("Введите стоимость товара:"));
    const clientMoney = parseFloat(prompt("Введите количество денег клиента:"));

    if (itemPrice === clientMoney) {
        alert("Покупка совершена");
    } else if (itemPrice > clientMoney) {
        const missingAmount = itemPrice - clientMoney;
        alert("Для покупки не хватает " + missingAmount + " р.");
    } else {
        const changeAmount = clientMoney - itemPrice;
        alert("Покупка совершена. Сдача " + changeAmount + " р.");
    }
}

// Задание 2 практика 3

function moreornot() {
    const number = parseFloat(prompt("Введите число:"));

    if (number > 0) {
        alert(1);
    } else if (number < 0) {
        alert(-1);
    } else {
        alert(0);
    }
}

// Задание 3 Практика 3

function Sum() {
    let a = prompt('a');
    let b = prompt('b');
    let result = (Number(a) + Number(b) < 4) ? 'Мало' : 'Много';
    alert(result);
}

// Задание 4 практика 3

function levelUser() {
    let login = prompt('login');

    let message =
        login == 'Сотрудник' ? 'Привет' :
            login == 'Директор' ? 'Здравствуйте' :
                login == '' ? 'Нет логина' :
                    'ЛЭЭЭЭЭ братишка кто ты';

    alert(message);
}



// 5. Задание 5 практика 3

function Login() {
    let login = prompt("Введите логин:");

    if (login === "Админ") {
        let password = prompt("Введите пароль:");

        if (password === "Я главный") {
            alert("Здравствуйте!");
        } else if (password === null || password === "") {
            alert("Отменено");
        } else {
            alert("Неверный пароль");
        }
    } else if (login === null || login === "") {
        alert("Отменено");
    } else {
        alert("Я вас не знаю");
    }
}


