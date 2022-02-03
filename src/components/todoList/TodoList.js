import PropTypes from 'prop-types';
import { useState } from 'react';
import CustomTitle from '../customTitle/CustomTitle';
import SearchFilter from '../searchFilter/SearchFilter';
import Todo from '../todo/Todo';
import './TodoList.css';

const TodoList = (props) => {

  const [todos, setTodos] = useState(props.todos);

  // TODO: useBallback
  const completeTodo = (todoId) => {
    props.onCompleteTodo(todoId);
  };
  const removeTodo = (todoId) => {
    props.onRemoveTodo(todoId);
  };

  const makeTodosJSX = (todosList) => {
    return todosList
      .map((todo) =>
        <li className='todo-item' key={todo.id}>
          <Todo
            {...todo}
            onCompleteTodo={completeTodo}
            onRemoveTodo={removeTodo} />
        </li>);
  };

  // TODO: handle debounce using lodash or underscore.js
  // FIXME: delete selection doesn't trigger new search

  const handleSearchFilter = (inputSearchFilter) => {
    setTodos((todos) => {
      // if (!inputSearchFilter || inputSearchFilter === '') {
      //   console.log('search is empty string::', inputSearchFilter);
      //   return todos;
      // }
      let filtered = todos
        .filter((todo) => {
          let found = todo.todoTitle.split(' ').find((w) => w.toLowerCase().startsWith(inputSearchFilter.toLowerCase()));
          let res = found ? true : false;
          return res;
        });
      // if (filtered && filtered.length >= 1) {
      return filtered;
      // }
      // return todos;
    })
  };

  return (
    <div className="todos-c">
      <CustomTitle titleText={'Liste des tâches'} />
      <SearchFilter onSearchFilter={handleSearchFilter} />
      <ul className='todo-list-c'>
        {makeTodosJSX(todos)}
      </ul>
    </div>
  );
}

TodoList.defaultProps = {
  onCompleteTodo: () => { },
  onRemoveTodo: () => { },
}

TodoList.propTypes = {
  onCompleteTodo: PropTypes.func,
  onRemoveTodo: PropTypes.func,
}

export default TodoList;