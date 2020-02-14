// To Do List inspired by https://watchandcode.com course
//
// requirements:
// - create a space for todos to exist ✓
// - create ability to add todos ✓
// - create ability to display todos ✓
// object orient everything
// - store todos on an object
// html & css requirements:
// - change DisplayToDo() 
// - set up page display
// - create buttons & interactions of these buttons
// - CSS 

var todo = {
    todos =[],
    displayToDo: function () {
        console.log('To Do List:', this.todos);
    },
    addToDo: function (inputtodo) {
        this.todos.push(inputtodo);
        this.displayToDo();
    },
    changeToDo: function (numberoftask, changetothis) {
        this.todos[numberoftask] = changetothis
        this.displayToDo();
    }
}
