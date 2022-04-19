/*домашка6*/ 

// 1.Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

// let a = 'aaa@bbb@ccc';
// console.log(a.replace(/@/g, '!'));

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

// let date = '2025-12-31';
// let newDate = date.split('-').reverse().join('/');
// console.log(newDate);

// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

// let str = 'Я учу javascript!';
// console.log(str.substr(2, 3) + str.substr(5, 11));
// console.log(str.substring(2, 6) + str.substring(6, 16));
// console.log(str.slice(2, 6) + str.slice(6, 16));

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum += (Math.pow(arr[i], 3));
// }

// console.log(Math.sqrt(sum));

// 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

// function num(a, b){
//   let c = a - b;
//   console.log(Math.abs(c));
// }

// num(6, 1);

// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

// let dateNew = new Date();

// function fn6(item){
//   if (item > 0 && item < 10) {
//     return '0' + item;
//   }else return item;
// }

// console.log(fn6(dateNew.getHours()) + ':' + fn6(dateNew.getMinutes()) + ':' + fn6(dateNew.getSeconds()) + '  ' + fn6(dateNew.getDate()) + '.' + fn6(dateNew.getMonth()) + '.' + fn6(dateNew.getFullYear()));


// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.


// let str = 'aa aba abba abbba abca abea';
// console.log (str.match(/ab+a/g));


// 8. Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.

// let number = '+79261843264';

// let regexp = /^[\ \+]?[\d]{1,3}[\ ]?[\(\-]?[\d]{1,2}[\)\-]?[\ ]?[\d]{1,3}[\ \-]?[\d]{1,2}[\ \-]?[\d]{1,2}$/g;

// console.log(regexp.test(number));