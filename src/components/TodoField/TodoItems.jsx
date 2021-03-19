import {observer} from 'mobx-react-lite';

const TodoItems = observer((props) => {
    const todolist = props.todolist;
    return (
        <div className="todo-content-items">
            {todolist.getDayTodos(props.day).map(todo => 
                <div className="todo-content-item" key={todo.id}>
                    <input 
                        className="todo-inp-cbx" 
                        type="checkbox"
                        checked={todo.completed} 
                        onChange={() => todolist.completeTodo(todo)}
                    />
                    <label>
                        <span>{todo.text}</span>
                    </label>
                    <button className="todo-delete-button" onClick={() => todolist.deleteTodo(todo.id)}>x</button>
                </div>
            )}
        </div>
    )
});

export default TodoItems
