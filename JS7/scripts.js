// Лампочка:получение расходов за горение лампочки.

let Bulb = function () {
    this.get = function () {

        this.wt = +prompt('Введите мощность лампочки, Вт');
        this.hour = +prompt('Введите количество часов работы лампочки, ч');
        this.price = +prompt('Введите стоимость за один час');
  
        this.operation();
    };
    this.operation = function () {

        if (this.wt === 0 || this.hour === 0 || this.price === 0){
            alert('На ноль умножать глупо...');
        }else if(this.get) {
            this.result = ((this.wt / 1000) * this.hour * this.price);
        }
  
        this.show();
    };

    this.show = function () {
          alert('Стоимость равна' + ' ' + this.result + ' ' + 'руб.');
        
    };
  }
  
  let bulb = new Bulb();
  bulb.get();
