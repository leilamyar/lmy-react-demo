import CustomTitle from '../customTitle/CustomTitle';
import Todo from '../todo/Todo';
import './TodoList.css';

const TodoList = ({ todos }) => {
  const todosJSX = todos.map((todo) => <li key={todo.id}><Todo todo={todo} /></li>);
  return (
    <div className="todos-c">
      <CustomTitle className='title' titleText={'Liste des tâches'} />
      <ul>
        {todosJSX}
      </ul>
    </div>
  );
}
export default TodoList;