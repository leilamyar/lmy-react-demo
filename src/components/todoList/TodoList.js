import CustomTitle from '../customTitle/CustomTitle';
import Todo from '../todo/Todo';
import './TodoList.css';

const TodoList = () => {
  return (
    <>
      <div className="todos-c">
        <CustomTitle className='title' titleText={'Liste des tâches'} />
        <Todo />
      </div>
    </>
  );
}

export default TodoList;