import TodoField from "../TodoField/TodoField";
import './styles.css';

const WeekTodoList = () => {
    return (
        <div className="week-todo-wrapper">
            <TodoField day="Понедельник"/>
            <TodoField day="Вторник"/>
            <TodoField day="Среда"/>
            <TodoField day="Четверг"/>
            <TodoField day="Пятница"/>
            <TodoField day="Суббота"/>
            <TodoField day="Воскресенье"/>
        </div>
    )
}

export default WeekTodoList;
