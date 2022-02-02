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
    { todoTitle: 'Une tâche terminée', description: 'This HTML file is a template.If you open it directly in the browser, you will see an empty page. You can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts into the <body> tag. To begin the development, run `npm start` or `yarn start`. To create a production bundle, use `npm run build` or `yarn build', prio: prioEnum.high, isDone: false },
  ];

  const uniqueIds = makeIds(todos.length);
  todos.forEach((td, index) => td.id = uniqueIds[index]);

  return (
    <div className="App">
      {/* <div className="todo-list-app-c"> */}
      <AddTodoForm />
      <div className="todo-list" >
        <TodoList todos={todos} />
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
