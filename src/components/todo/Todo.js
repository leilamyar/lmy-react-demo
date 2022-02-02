import './Todo.css';
import CustomButton from '../customButton/CustomButton';

const Todo = ({ todo }) => {

  // const setColors = (isDone) => {
  //   if (isDone) {
  //     return { bgClr: 'darkgrey', borderClr: 'darkgrey' };
  //   } else return { bgClr: 'white', borderClr: 'black' };
  // }

  return (
    <div className='todo-c'>
      <div className="todo-info-c">
        <h4 className='todo-title'>{todo.todoTitle}</h4>
        <div className='todo-descr'>{todo.description}</div>
      </div>
      <div className="todo-actions-c">
        {/* <CustomButton customBtnLabel={'Terminer'} clr={setColors(todo.isDone)} /> */}
        <CustomButton customBtnLabel={'Terminer'} />
        <CustomButton customBtnLabel={'Supprimer'} />
      </div>
    </div>
  );
}

export default Todo;