import TodoField from "../TodoField/TodoField";
import './styles.css';

const WeekTodoList = () => {
    const days = [
        "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"
    ];
    return (
        <div className="week-todo-wrapper">
            {days.map(day => 
                <TodoField day={day}/>
            )}
        </div>
    )
}

export default WeekTodoList;
