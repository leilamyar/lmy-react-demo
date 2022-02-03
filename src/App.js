import { useState } from 'react/cjs/react.development';
import './App.css';
import AddTodoForm from './components/addTodoForm/AddTodoForm';
import TodoList from "./components/todoList/TodoList";
import { TODOS } from './todos';
import { getUniqueId } from './utils/uniqueId';

function App() {

  const [todos, setTodos] = useState(TODOS);

  /**
   * Adds a todo to todos list
   * @param {Object} newTodo 
   */
  const addTodo = (newTodo) => {
    newTodo.id = getUniqueId(todos);
    setTodos(() => [
      ...todos,
      newTodo,
    ]);
  };

  /**
   * Set todo complete attr to false
   * @param {string} todoId 
   */
  const completeTodo = (todoId) => {
    // TODO: make Entities from todos array
    setTodos((todos) => todos.map((t) => {
      if (t.id === todoId) {
        t.complete = true;
      }
      return t;
    }));
  };

  /**
   * Remove todo from todos list
   * @param {string} todoId 
   */
  const removeTodo = (todoId) => {
    // TODO: make Entities from todos array
    setTodos((todos) => todos.filter(t => t.id !== todoId));
  };

  return (
    <div className="App">
      <AddTodoForm onAddTodo={addTodo} />
      <div className="todo-list" >
        <TodoList
          todos={todos}
          onCompleteTodo={completeTodo}
          onRemoveTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
