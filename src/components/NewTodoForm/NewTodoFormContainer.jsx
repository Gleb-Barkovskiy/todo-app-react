
import { inject } from "mobx-react";
import NewTodoForm from "./NewTodoForm";

const giveTodoStore = inject(stores => ({
    todolist: stores.todoStore,
}));

export default giveTodoStore(NewTodoForm);