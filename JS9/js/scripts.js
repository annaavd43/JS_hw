const ToDoList = function(){

    let cssLink = document.createElement('link');
    cssLink.setAttribute('rel', 'stylesheet');
    cssLink.setAttribute('href', 'css/style.css');
    document.head.append(cssLink);

    let fontsLink = document.createElement('link');
    fontsLink.setAttribute('rel', 'stylesheet');
    fontsLink.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');
    document.head.append(fontsLink);

    let toDoList = document.createElement('div');
    toDoList.classList.add('app');
    document.body.append(toDoList);

    let title = document.createElement('input');
    title.classList.add('app__title');
    title.setAttribute('placeholder', 'To Do List');
    toDoList.append(title);

    let input = document.createElement('input');
    input.classList.add('app__new');
    input.setAttribute('placeholder', 'New task...');
    toDoList.append(input);

    let btnClear = document.createElement('button');
    btnClear.classList.add('btnClear');
    btnClear.innerHTML = 'Clear';
    toDoList.append(btnClear);

    let divTask = document.createElement('div');
    divTask.classList.add('wrapper');
    toDoList.append(divTask);

    btnClear.addEventListener('click', function(){
        while(divTask.firstChild){
            divTask.removeChild(divTask.firstChild)
        }
    })

    input.addEventListener('change', function(){
        let check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        check.addEventListener('click', function(){
            this.classList.toggle('check_true');

            if(this.classList.contains('check_true')){
                task.classList.add('task_complited');
            }else{
                task.classList.remove('task_complited');
                task.classList.add('text');
            }
        })

        let task = document.createElement('span');
        task.setAttribute('class', 'text');
        task.addEventListener('click', function(){
            this.innerHTML = prompt();
        })
        task.innerHTML = this.value;

        divTask.append(check,task);
    })

}

ToDoList();

