
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