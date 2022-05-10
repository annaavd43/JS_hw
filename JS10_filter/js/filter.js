const galleryFilter = function(){
    let btnAll = document.querySelector('.btn__all');
    let btnNature = document.querySelector('.btn__nature');
    let btnCars = document.querySelector('.btn__cars');
    let btnPeople = document.querySelector('.btn__people');

    let natureDiv = document.querySelectorAll('.nature');
    let carsDiv = document.querySelectorAll('.cars');
    let peopleDiv = document.querySelectorAll('.people');

    btnNature.addEventListener('click', function(){

        btnNature.classList.add('active');
        btnAll.classList.remove('active');
        btnCars.classList.remove('active');
        btnPeople.classList.remove('active');

        for(let i = 0;i < natureDiv.length; i++) {
            natureDiv[i].classList.remove('hidden');
            carsDiv[i].classList.add('hidden');
            peopleDiv[i].classList.add('hidden');
        }
    })

    btnCars.addEventListener('click', function(){

        btnNature.classList.remove('active');
        btnAll.classList.remove('active');
        btnCars.classList.add('active');
        btnPeople.classList.remove('active');

        for(let i = 0;i < natureDiv.length; i++) {
            natureDiv[i].classList.add('hidden');
            carsDiv[i].classList.remove('hidden');
            peopleDiv[i].classList.add('hidden');
        }
    })

    btnPeople.addEventListener('click', function(){

        btnNature.classList.remove('active');
        btnAll.classList.remove('active');
        btnCars.classList.remove('active');
        btnPeople.classList.add('active');

        for(let i = 0;i < natureDiv.length; i++) {
            natureDiv[i].classList.add('hidden');
            carsDiv[i].classList.add('hidden');
            peopleDiv[i].classList.remove('hidden');
        }
    })

    btnAll.addEventListener('click', function() {

        btnNature.classList.remove('active');
        btnAll.classList.add('active');
        btnCars.classList.remove('active');
        btnPeople.classList.remove('active');

        for(let i = 0;i < natureDiv.length; i++) {
            natureDiv[i].classList.remove('hidden');
            carsDiv[i].classList.remove('hidden');
            peopleDiv[i].classList.remove('hidden');
        }
    })

}