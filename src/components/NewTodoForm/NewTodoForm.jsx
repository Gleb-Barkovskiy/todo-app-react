import { useState } from 'react'
import todolist from '../../store/todoStore';
import './styles.css';

const NewTodoForm = () => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('Понедельник');
    const days = [
        "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"
    ];
    const createTodo = () => {
        text !== '' ? (
        todolist.addTodo({
            day: day,
            id: todolist.todos.length + 2,
            text: text,
            completed: false,
        })) : (
            alert('Введите корректную информацию')
        );

        setText('');
    };
    return (
        <div className="create-todo-wrapper">
            <input value={text} type="textarea" placeholder="Новое дело" onChange={(event) => setText(event.target.value)}/>
                <select onChange={(event) => setDay(event.target.value)}>
                    {days.map(d => (
                        <option key={d}>{d}</option>
                    ))}
                </select>
            <button onClick={createTodo}>Добавить</button>
        </div>
    )
}

export default NewTodoForm
