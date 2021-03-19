import NewTodoFormContainer from "./components/NewTodoForm/NewTodoFormContainer";
import WeekTodoList from "./components/WeekTodoLists/WeekTodoList";
import './index.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <h1 className="title">Week Manager</h1>
        <WeekTodoList/>
        <NewTodoFormContainer/>
    </div>
  );
}

export default App;
