//1

let name = prompt("Как вас зовут?");
let age = prompt("Ваш возраст?");
let city = prompt("В каком городе проживаете?");
let phone = prompt("Номер телефона?");
let email = prompt("Ваш электронный адрес?");
let company = prompt("Место работы?");

document.write(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}`);

//2

document.write(`${name} родился в ` + (2022 - age) + ` году.`);

//3

let number = 123124;
if ((Number(number[0]) + Number(number[1]) + Number(number[2])) == (Number(number[3]) + Number(number[4]) + Number(number[5]))) {
    console.log('Да');
} else {
    console.log('Нет');
}

//4

let a = [1,0,-3];

for (val of a){
    if(val > 0)
        console.log('Верно');
    else
        console.log('Неверно');
}

//5

let a = 10;
let b = 2;
let sum = (a + b);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

if(sum > 1) {
    console.log(sum**2);
}

//6

if((2 < a && a > 11) || (6 <= b && b < 14)) {
    console.log('Верно')
} else {
    console.log('Неверно');
}

//7

let n = prompt('Введите число от 0 до 59');
if(n >=0 && n <= 15) {
    console.log('Первая четверть')
} else if(n >=16 && n <= 30) {
    console.log('Вторая четверть')
} else if(n > 30 && n <= 45) {
    console.log('Третья четверть')
} else if(n > 45 && n <= 60) {
    console.log('Четвертая четверть')
}



//8

let day = 28;
if( day > 0 && day <= 10) {
    console.log("Первая декада месяца.")
} else if( day > 10 && day <= 20){
    console.log("Вторая декада месяца.")
} else if( day > 20 && day <= 31){
    console.log("Третья декада месяца.")
}



//9

let day = prompt('Введите количество дней');
let year = day / 365;
if(year < 1) {
    console.log('Меньше года');
}

let month = day / 31;
if(month < 1) {
    console.log('Меньше месяца');
}

let week = day / 7;
if(week < 1) {
    console.log('Меньше недели');
}

let hour = 24 * day;
console.log(hour);

let min = hour * 60;
console.log(min);

let sec = min * 60;
console.log(sec);



//10


day = Math.round(Math.random() * (365 - 1) + 1);

month = Math.ceil(day/31);
console.log(`День: ${day}, Месяц: ${month}.`);

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;

    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;

    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
}