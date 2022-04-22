let Dom = function(){
    let status = false;

    this.number = function(){
        num = +prompt('Введите номер квартиры');
        this.number = num;
        if (num < 1 || num > 40){
            console.log('Такой квартиры в этом подъезде нет');
            setTimeout(this.off, 1000);
        }else 
        setTimeout(this.call, 1000);
    },

    this.call = function(){
        console.log('----Ожидание ответа----')
        setTimeout(this.talk, 5000);
    },

    this.talk = function(){
        console.log('----Идет разговор----');
        setTimeout(this.on, 5000);
    },

    this.code = function(){
        let value = 123456789;
        let input = +prompt('Введите код');
        if (input == value){
            this.on();
        }else{
            console.log('---сигнал отмены---');
            this.off();
        }
    },

    this.on = function(){
        status = true;
        console.log('Открыто');
        console.log('Входите');
    },

    this.off = function(){
        status = false;
        console.log('Отключено');
    }

    this.info = function() {
        console.log(`Status: ${status}`);
    }
}

let dom = new Dom();
