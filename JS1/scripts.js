
//2

let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + '3',
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = + "123",
    a16 = 1 || 0,
    a17 = false || true;
    a18 = true > 0;

console.log(`
    a1 = ${a1},
    a2 = ${a2},
    a3 = ${a3},
    a4 = ${a4},
    a5 = ${a5},
    a6 = ${a6},
    a7 = ${a7},
    a8 = ${a8},
    a9 = ${a9},
    a10 = ${a10},
    a11 = ${a11},
    a12 = ${a12},
    a13 = ${a13},
    a14 = ${a14},
    a15 = ${a15},
    a16 = ${a16},
    a17 = ${a17},
    a18 = ${a18},
`)

//3

let width = '10см';
let hight = '23см';
let SPryam = parseInt(width) * parseInt(hight);

console.log(SPryam);

//4

let h = '10м';
let VCilindra = parseInt(h) * a7;

console.log(VCilindra);

//5

let r = '5см';
let SKruga = 3.14 * (parseInt(r) * parseInt(r));

console.log(SKruga);

//6

let a = '5см';
let b = '7см';
let z = '10см';
let STrap = ((parseInt(a) + parseInt(b)) / 2) * parseInt(z);

console.log(STrap);

//7

let S = 2000000;
let stav = 0.1;
let years = 5;
let Pereplata = S * stav * years;

console.log(Pereplata);

//8

/*let e = 8,
    w = 3;
let x = (16 / (e + 2)) + w;

console.log(x);

let x = ((e + 6) / w) - 15;
console.log(x);

let x = (23780 / (e + w)) / 4;
console.log(x);*/

//9

console.log(`

Бывало, спит у ног собака,
костер занявшийся гудит,
и женщина из полумрака
глазами зыбкими глядит.
Потом под пихтою приляжет
на куртку рыжую мою
и мне, задумчивая, скажет:
"А ну-ка, спой!.."- и я пою. 

`);

//10

let text = "индо земля зашаталась под ногами-и вырос,";
let text2 = "и заревел он голосом диким...";
let text3 = "блеснула молния и ударил гром,";
let text4 = "а так какое-то чудище, страшное и мохнатое,";
let text5 = "как будто из-под земли, перед купцом:";
let text6 = "Он подошёл и сорвал аленький цветочек.";
let text7 = "зверь не зверь, человек не человек,";
let text8 = "В ту же минуту, безо всяких туч,";

console.log(text6),
console.log(text8),
console.log(text3),
console.log(text),
console.log(text5),
console.log(text7),
console.log(text4),
console.log(text2);