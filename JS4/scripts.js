//1

/*let num = [1, 2, 3, 4, 5];
for(let num = 1; num < 6; num++) {
    document.write(num);
}

//2

let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr.length; i++) {
         if (arr[i] > -10 && arr[i] < -3){
            console.log(arr[i]);
        }
    }


//3

let array = [];
let result = 0;

for(let i = 23; i <= 57; i++){
    array.push(i);
    result += i;
}
document.write(array);
document.write('<br/>');
document.write(result);

document.write('<br/>');

let i = 0;
let arr2 = [];
    while (true){
        i++
        if (23 <= i && i <=57){
            arr2.push(i);
        } else if (i < 23){
            continue;
        } else {
            break;
        }
} document.write(arr2);

//4

 let arr = ['10', '20', '30', '34', '178', '3000', '174', '376', '28', '813', '778'];

 for (let i = 0; i < arr.length; i++){
     let a = arr[i];
     if (a.slice(0,1) == 1 || a.slice(0,1) == 2 || a.slice(0,1) == 5) {
         document.write(a);
         document.write('<br/>');
     }
 }

 //5

 let week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
 for (let i = 0; i < week.length; i++){
    if (week[i] === 'СБ' || week[i] === 'ВС')
    document.write("<strong>" + week[i] + "</strong>");
    else
    document.write(week[i]);
    document.write('<br/>');
 }

 //6

 let array = [4, 25, 396, 887, 3, 2, 8, 64, -9, -71, 0];
 array[array.length] = 'LastElement';

 document.write(array[array.length - 1]);

 //7


let arr = [];
while (true) {

    let num = prompt('Введите любое число', 0);
    if (num === '') break;
    arr.push(+num);

}
alert(arr);
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

arr.sort(compareNumeric);

alert(arr);


//8

let arr = [12, false, 'Текст', 4, 2, -5, 0];
arrRev = arr.reverse();

alert( arrRev );

let i = 0;
while (i < arrRev.length) {
    alert(arrRev[i]);
    i++;
}

//9

let arr = [5, 9, 21, , , 9, 78, , , , 6];
let empty = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == null) {
        empty += 1;
    }
}
console.log(arr);
console.log(empty);*/



