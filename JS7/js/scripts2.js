let Dom = function(){
    let status = false;

    this.number = function(num){
        num = +prompt('Введите номер квартиры');
        this.number = num;
        if (num < 1 || num > 40){
            console.log('Такой квартире в этом подъезде нет')
        }else 
         status = true;
         this.call;
    },

    this.call = function(){
        setTimeout(off, 30000);
    },

    this.code = function(){
        let value = 123456789;
        let input = +prompt('Введите код');
        if (input == value){
            this.on();
        }else{
            this.off();
        }
    },

    this.on = function(){
        status = true;
        console.log('Открыто');
    },

    this.off = function(){
        status = false;
        console.log('Отключено')
    }

    this.info = function() {
        console.log(`Status: ${status}`);
    }
}

let dom = new Dom();
dom.number();