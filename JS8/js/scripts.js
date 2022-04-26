let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let title = document.createElement('title');
title.innerHTML = 'New HTML document';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

let metaVie = document.createElement('meta')
metaVie.setAttribute('name', 'viewport')
metaVie.setAttribute('content', "width=device-width")
metaVie.setAttribute('initial-scale', "1.0")

let metaX = document.createElement('meta')
metaX.setAttribute('http-equiv', 'X-UA-Compatible')
metaX.setAttribute('content', 'IE=edge')

document.head.appendChild(metaUtf8);
document.head.appendChild(title);
document.head.appendChild(metaVie);
document.head.appendChild(metaX);

let fonts = document.createElement('link');
fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet');
fonts.setAttribute('rel', 'stylesheet');
document.head.appendChild(fonts);


let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let container2 = document.createElement('h2');
container2.classList.add('container_h2');
container2.innerHTML = 'Choose Your Option';
container.appendChild(container2);

let containerP = document.createElement('p');
containerP.classList.add('container_p');
containerP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
container.appendChild(containerP);

let containerFull = document.createElement('div');
containerFull.classList.add('container_full');
document.body.appendChild(containerFull);

let containerFullLeft = document.createElement('div');
containerFullLeft.classList.add('container_full_left');
containerFull.appendChild(containerFullLeft);

let containerFullRight = document.createElement('div');
containerFullRight.classList.add('container_full_right');
containerFull.appendChild(containerFullRight);

let leftTop = document.createElement('p');
leftTop.classList.add('left_top');
leftTop.innerHTML = 'freelancer'.toLocaleUpperCase();
containerFullLeft.appendChild(leftTop);

let leftH2 = document.createElement('h2');
leftH2.classList.add('left_h2');
leftH2.innerHTML = 'Initially designed to';
containerFullLeft.appendChild(leftH2);

let leftP = document.createElement('p');
leftP.classList.add('left_p');
leftP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
containerFullLeft.appendChild(leftP);

let leftA =document.createElement('a');
leftA.classList.add('left_a');
leftA.innerHTML = 'start here'.toLocaleUpperCase();
leftA.setAttribute('href', '#');
containerFullLeft.appendChild(leftA);

let rightTop = document.createElement('p');
rightTop.classList.add('right_top');
rightTop.innerHTML = 'studio'.toLocaleUpperCase();
containerFullRight.appendChild(rightTop);

let rightH2 = document.createElement('h2');
rightH2.classList.add('right_h2');
rightH2.innerHTML = 'Initially designed to';
containerFullRight.appendChild(rightH2);

let rightP = document.createElement('p');
rightP.classList.add('right_p');
rightP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
containerFullRight.appendChild(rightP);

let rightA =document.createElement('a');
rightA.classList.add('right_a');
rightA.innerHTML = 'start here'.toLocaleUpperCase();
rightA.setAttribute('href', '#');
containerFullRight.appendChild(rightA);




let style = document.createElement('style');
style.innerHTML = `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        background-color: #fff;
        color: #212121;
    }
    
    .container {
        text-align: center;
        margin-top: 40px;
    }

    .container_full {
        text-align: center;
        display: flex;
        justify-content: center;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    .container_h2 {
        font-family: 'Arvo', serif;
        font-size: 36px;
        line-height: 48px;
        margin-bottom: 30px;
    }

    .container_p {
        font-size: 14px;
        line-height: 26px;
        font-family: 'Open Sans', sans-serif;
        letter-spacing: 1.8px;
        margin-bottom: 50px;
        color: #c2c2c2;
    }

    .container_full_left,
    .container_full_right {
        padding: 80px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container_full_left {
        background-color: #fff;
        width: 50%;
    }

    .container_full_right {
        background-color: #8F75BE;
        width: 50%;
    }

    .left_top {
        font-weight: bold;
        color: #c2c2c2;
        letter-spacing: 2.4px;
    }

    .right_top {
        font-weight: bold;
        color: #FFC80A;
        letter-spacing: 2.4px;
    }

    .left_h2 {
        font-family: 'Arvo', serif;
        font-size: 36px;
        margin: 30px 0 35px 0;
        width: 300px;
    }

    .right_h2 {
        font-family: 'Arvo', serif;
        font-size: 36px;
        margin: 30px 0 35px 0;
        width: 300px;
        color: #FFFFFF;
    }

    .left_p {
        color: #c2c2c2;
        line-height: 22px;
        width: 280px;
        margin-bottom: 70px;
    }

    .right_p {
        color: #FFFFFF;
        line-height: 22px;
        width: 280px;
        margin-bottom: 70px;
    }

    .left_a {
        font-weight: bold;
        text-decoration: none;
        color: #212121;
        letter-spacing: 2.4px;
        border: 3px solid #FFC80A;
        padding: 20px 25px;
        border-radius: 50px;   
    }

    .right_a {
        font-weight: bold;
        text-decoration: none;
        color: #fff;
        letter-spacing: 2.4px;
        border: 3px solid #FFC80A;
        padding: 20px 25px;
        border-radius: 50px;   
    }

`;

document.head.appendChild(style);


