import './App.css';
import AddTodoForm from './components/addTodoForm/AddTodoForm';
import TodoList from "./components/todoList/TodoList";
import { makeIds } from './utils/uniqueId';

const prioEnum = {
  normal: 'normal',
  high: 'urgent',
  low: 'faible',
};

function App() {

  const todos = [
    { todoTitle: 'Acheter du café', description: '', prio: prioEnum.high, isDone: true },
    { todoTitle: 'Réaliser l\'exercice', description: 'Créer l\'application "Todo List"', prio: prioEnum.normal, isDone: false },
    { todoTitle: 'Une tâche terminée', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur neque consequatur dolore corporis quo', prio: prioEnum.high, isDone: false },
  ];

  const uniqueIds = makeIds(todos.length);
  todos.forEach((td, index) => td.id = uniqueIds[index]);

  return (
    <div className="App">
      <div className="todo-list-app-c">
        <AddTodoForm />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
