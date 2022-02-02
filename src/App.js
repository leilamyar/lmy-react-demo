import './App.css';
import AddTodoForm from './components/addTodoForm/AddTodoForm';
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="App">
      <div className="todo-list-app-c">
        <AddTodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
