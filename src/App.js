import { useState } from 'react/cjs/react.development';
import './App.css';
import AddTodoForm from './components/addTodoForm/AddTodoForm';
import TodoList from "./components/todoList/TodoList";
import { TODOS } from './todos';
import { getUniqueId } from './utils/uniqueId';

function App() {

  const [todos, setTodos] = useState(TODOS);

  const addTodo = (newTodo) => {
    // console.log('New todo!!', newTodo);
    newTodo.id = getUniqueId(todos);
    setTodos(() => [
      ...todos,
      newTodo,
    ]);
    // console.log('New todo added:', todos);
  };

  /**
   * Set todo complete attr to false
   * @param {string} todoId 
   */
  const completeTodo = (todoId) => {
    setTodos(() => {
      // TODO: make Entities from todos array
      todos.map((t) => {
        if (t.id === todoId) {
          t.complete = true;
        }
      });
      setTodos(() => [
        ...todos,
      ]);
    });
  };

  const removeTodo = (todoId) => {
    setTodos(() => {
      // TODO: make Entities from todos array
      let newTodosList = todos.filter((t) => t.id === todoId);
      return [
        ...newTodosList,
      ];
    });
    console.log('todo remove:');
  };

  return (
    <div className="App">
      {/* <div className="todo-list-app-c"> */}
      <AddTodoForm onAddTodo={addTodo} />
      <div className="todo-list" >
        <TodoList
          todos={todos}
          onCompleteTodo={completeTodo} />
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
