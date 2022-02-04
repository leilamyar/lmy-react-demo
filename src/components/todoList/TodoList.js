import PropTypes from 'prop-types';
import { useState } from 'react';
import CustomTitle from '../customTitle/CustomTitle';
import SearchFilter from '../searchFilter/SearchFilter';
import Todo from '../todo/Todo';
import './TodoList.css';

const TodoList = (props) => {

  const { todos } = props;
  const [searchFilter, setSearchFilter] = useState('');

  // TODO: useCallback
  const completeTodo = (todoId) => {
    props.onCompleteTodo(todoId);
  };
  const removeTodo = (todoId) => {
    props.onRemoveTodo(todoId);
  };
  // TODO: handle debounce using lodash or underscore.js
  const handleSearchFilter = (inputSearchFilter) => {
    setSearchFilter(inputSearchFilter);
  };

  const data = todos.filter((todoFiltered) => {
    if (!searchFilter || searchFilter === '') return true;
    let found = todoFiltered.todoTitle
      .split(' ')
      .find((w) => w.toLowerCase().startsWith(searchFilter.toLowerCase()));
    return found !== undefined;
  }).map((todo) => {
    return (<li className='todo-item' key={todo.id}>
      <Todo
        {...todo}
        onCompleteTodo={completeTodo}
        onRemoveTodo={removeTodo} />
    </li>);
  })

  return (
    <div className="todos-c">
      <CustomTitle titleText={'Liste des tâches'} />
      <SearchFilter onSearchFilter={handleSearchFilter} />
      <ul className='todo-list-c'>
        {data}
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