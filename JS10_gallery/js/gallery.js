const galleryFunc = function() { 
    let gallery = document.querySelector('.gallery');

    let galleryBig = document.createElement('div');
    galleryBig.classList.add('gallery__big');
    gallery.appendChild(galleryBig);

    let img1 = document.querySelector('.img1');
    let img2 = document.querySelector('.img2');
    let img3 = document.querySelector('.img3');
    let img4 = document.querySelector('.img4');

    img1.addEventListener('click', function() {
        if(galleryBig) {
            galleryBig.remove();
        }
        galleryBig = document.createElement('div');
        galleryBig.classList.add('gallery__big');
        gallery.appendChild(galleryBig);

        galleryBig.innerHTML = '<img src="./img/img1.jpg">';

        let buttonClose = document.createElement('button');
        buttonClose.classList.add('gallery__close');
        buttonClose.innerHTML = '+';
        galleryBig.appendChild(buttonClose);

        buttonClose.addEventListener('click', function() {
            buttonClose.remove();
            galleryBig.remove();
        })
        
    })

    img2.addEventListener('click', function() {
        if(galleryBig) {
            galleryBig.remove();
        }
        galleryBig = document.createElement('div');
        galleryBig.classList.add('gallery__big');
        gallery.appendChild(galleryBig);

        galleryBig.innerHTML = '<img src="./img/img2.jpg">';

        let buttonClose = document.createElement('button');
        buttonClose.classList.add('gallery__close');
        buttonClose.innerHTML = '+';
        galleryBig.appendChild(buttonClose);

        buttonClose.addEventListener('click', function() {
            buttonClose.remove();
            galleryBig.remove();
        })
       
    })

    img3.addEventListener('click', function() {
        if(galleryBig) {
            galleryBig.remove();
        }
        galleryBig = document.createElement('div');
        galleryBig.classList.add('gallery__big');
        gallery.appendChild(galleryBig);

        galleryBig.innerHTML = '<img src="./img/img3.jpg">';

        let buttonClose = document.createElement('button');
        buttonClose.classList.add('gallery__close');
        buttonClose.innerHTML = '+';
        galleryBig.appendChild(buttonClose);

        buttonClose.addEventListener('click', function() {
            buttonClose.remove();
            galleryBig.remove();
        })
       
    })

    img4.addEventListener('click', function() {
        if(galleryBig) {
            galleryBig.remove();
        }
        galleryBig = document.createElement('div');
        galleryBig.classList.add('gallery__big');
        gallery.appendChild(galleryBig);

        galleryBig.innerHTML = '<img src="./img/img4.jpg">';

        let buttonClose = document.createElement('button');
        buttonClose.classList.add('gallery__close');
        buttonClose.innerHTML = '+';
        galleryBig.appendChild(buttonClose);

        buttonClose.addEventListener('click', function() {
            buttonClose.remove();
            galleryBig.remove();
        })

    })

};