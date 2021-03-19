import TodoItems from "./TodoItems"
import { inject } from "mobx-react";

const giveTodoStore = inject(stores => ({
    todolist: stores.todoStore,
}));

export default giveTodoStore(TodoItems);
