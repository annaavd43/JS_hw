/*//1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.

function calcNum(num1, num2, num3) {
    console.log((num1 - num2) / num3);
}

calcNum(10, 2, 2);

//2.Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.

function getNum(num) {
    console.log(num**2);
    console.log(num**3);
}

getNum(3);

//3.Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

function minNum(a, b) {
    let c = Math.min(a, b);
    let d = Math.max(a, b);
    console.log(c, d);
}

minNum(30, 15);

//4.Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.

function getNumb(w, e) {
    let arr = [];
    for(let i = w; i <= e; i++){
        arr.push(i)
    }
    return arr;
}

function returnArr(arr) {
    console.log(arr);
}

returnArr(getNumb(+prompt('Введите первое число'), +prompt('Введите последнее число')));

//5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.

function isEven(a) {
    if(a % 2 == 0){
        return true;
    }else {
        return false;
    }
}

console.log(isEven(10));

//6.Напишите ф-цию, в которую передается массив с целыми числами.Верните новый массив, где останутся лежать только четные из этих чисел.Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [];
function integer() {
    
    for(let i = 0; i <= arr.length; i++) {
        let u = isEven(arr[i]);

    if(u == true) {
        arr2.push(arr[i]);
    } else {
        continue;
    }
  } 
}

integer();
console.log(arr2); 

//7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):

function pyr(num){
    for(i = 1; i <= num; i++){
        for(j = 1; j <= i; j++){
            let str = '';
            if(arguments[1] == undefined || arguments[1] == 0 || arguments[1] == " ") {
                document.write(i)
            }else {
                str = arguments[1];
                document.write(str);
            }
        }
        document.write('<br/>');
    }
}

pyr(9);

//8. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:

function tree(n){
    n = +prompt('Введите высоту треугольника');
    let row = '';
        for(let i = 1; i <= n; i++) {
            for(let k = n; k > i; k--) {
                row += ' ';
            }

            for(let j = 1; j <= i * 2 - 1; j++) {
                row += '*';
            }

            console.log(row);
            row = '';
        }
}

tree();

//9. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000.

function fib(n) {
  let a = 0;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log( fib(3) ); 

//10.Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию.

function  sumNum(n) {
    let sum = 0;
    let str = String(n).split("");
    for(let i = 0; i < str.length; i++){
        sum += +str[i];
    }
    console.log("сумма цифр введенного числа = " + sum);
    if(sum >= 10){
        sumNum(sum);
    }
}
sumNum(852);*/

//11. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.

function array(arr) {
    console.log(arr[i]);
    i++;
    if (i < arr.length) array(arr);
}

let i = 0;

array([125, 24, 3, 5]);
