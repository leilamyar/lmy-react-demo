import CustomTitle from '../customTitle/CustomTitle';
import Todo from '../todo/Todo';
import './TodoList.css';

const TodoList = ({ todos }) => {
  const todosJSX = todos.map((todo) => <li className='todo-item' key={todo.id}><Todo todo={todo} /></li>);
  return (
    <div className="todos-c">
      <CustomTitle titleText={'Liste des tâches'} />
      <ul className='todo-list-c'>
        {todosJSX}
      </ul>
    </div>
  );
}
export default TodoList;