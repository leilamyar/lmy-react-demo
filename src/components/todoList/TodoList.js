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
  // FIXME: delete selection doesn't trigger new search
  const handleSearchFilter = (inputSearchFilter) => {
    console.log('input detected!!', inputSearchFilter);
    setSearchFilter(inputSearchFilter)
  };

  /**
 * Takes an an array of Todos, and returns them as an array of Todos ll elements
 * @param {Array} todosList 
 * @returns 
 */
  const makeTodosListItemsJSX = (todosList) => {
    return todosList
      .map((todo) =>
        <li className='todo-item' key={todo.id}>
          <Todo
            {...todo}
            onCompleteTodo={completeTodo}
            onRemoveTodo={removeTodo} />
        </li>);
  };

  const filterList = (searchFilter) => {
    if (!searchFilter || searchFilter === '') {
      return makeTodosListItemsJSX(todos);
    }
    // console.log('filtering list ....');
    let filtered = todos.filter((todo) => {
      let found = todo.todoTitle.split(' ').find((w) => w.toLowerCase().startsWith(searchFilter.toLowerCase()));
      let res = found ? true : false;
      return res;
    });
    return makeTodosListItemsJSX(filtered);
  }

  return (
    <div className="todos-c">
      <CustomTitle titleText={'Liste des tâches'} />
      <SearchFilter onSearchFilter={handleSearchFilter} />
      <ul className='todo-list-c'>
        {/* {makeTodosJSX(todos)} */}
        {/* {makeTodosJSX(handleSearchFilter(todos, 'ca'))} */}
        {/* {searchFilter && filterList(searchFilter)} */}
        {filterList(searchFilter)}
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