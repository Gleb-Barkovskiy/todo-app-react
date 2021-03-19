import {makeAutoObservable} from 'mobx';

class TodoStore {
    todos = [
        {day: 'Понедельник', id: 1, text: 'Купить хлеб', completed: false},
    ]
    constructor() {
        makeAutoObservable(this);
    }
    getDayTodos(day) {
        return this.todos.filter(todo => todo.day === day);
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
    completeTodo(todo){
        todo.completed = !todo.completed;
    }
}

export default new TodoStore();