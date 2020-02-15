// To Do List inspired by https://watchandcode.com course

var todoList = {
    todos =[],

    displayToDo: function () {
        if (this.todos == 0) {
            console.log('to do list is empty!')
        } else {
            console.log('To Do List:');
            for (var i = 0; i < this.todos.length; i++) {
                console.log(this.todos[i].todoText, 'complete?:', this.todos[i].completed);
            }
        }
    },

    displayIncomplete: function () {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed == false) {
                this.displayToDo();
            }
        }
    },

    displayComplete: function () {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed == true) {
                this.displayToDo();
            }
        }
    },

    addToDo: function (inputtodo) {
        this.todos.push({
            todoText: inputtodo,
            completed: false
        });
        this.displayToDo();
    },

    changeToDo: function (numberoftask, changetothis) {
        this.todos[numberoftask].todoText = changetothis,
            this.displayToDo();
    },

    deleteToDo: function (numberoftask) {
        this.todos.splice(numberoftask);
        this.displayToDo();
    },

    toggleCompleted: function (numberoftask) {
        var currentToDo = this.todos[numberoftask];
        currentToDo.completed = !currentToDo.completed
    }
}
