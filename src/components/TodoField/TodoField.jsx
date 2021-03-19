import './styles.css';
import TodoItemsContainer from './TodoItemsContainer';

const TodoField = (props) => {
    return (
        <div className="todo-wrapper">
            <div className="todo-content" >
                    <h1 className="todo-content-title">{props.day}</h1>
                    <TodoItemsContainer day = {props.day}/>
            </div>
        </div>
    )
}

export default TodoField;
