document.addEventListener('DOMContentLoaded',() =>{

    const toDoInput = document.getElementById('todo-input');
    const addTaskBustton = document.getElementById('add-task-btn');


    let taskArr = JSON.parse(localStorage.getItem('taskArr')) || [];

    taskArr.forEach(element => {
        fetchTasks(element)
    });

    addTaskBustton.addEventListener('click',() => {
        let inputText = toDoInput.value.trim();
        if(inputText === ''){
            return;
        }

        const newTask = {
            id : Date.now(),
            text : inputText,
            completed : false,
        };

        storeTasks()

        taskArr.push(newTask);
        toDoInput.value = '';
        console.log(taskArr);
    })

    function fetchTasks(){
        console.log(taskArr.text);
    }


    function storeTasks() {
        localStorage.setItem("taskArr",JSON.stringify(taskArr));
    }

});