import PropTypes from 'prop-types';
import CustomTitle from '../customTitle/CustomTitle';
import Todo from '../todo/Todo';
import './TodoList.css';

const TodoList = (props) => {
  const { todos } = props;
  const completeTodo = (todoId) => {
    props.onCompleteTodo(todoId);
  };
  const removeTodo = (todoId) => {
    props.onRemoveTodo(todoId);
  };

  const todosJSX = todos
    .map((todo) =>
      <li className='todo-item' key={todo.id}>
        <Todo
          {...todo}
          onCompleteTodo={completeTodo}
          onRemoveTodo={removeTodo} />
      </li>);
  return (
    <div className="todos-c">
      <CustomTitle titleText={'Liste des tâches'} />
      <ul className='todo-list-c'>
        {todosJSX}
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