import './Todo.css';
import CustomButton from '../customButton/CustomButton';

const Todo = ({ todo }) => {

  // const setColors = (isDone) => {
  //   if (isDone) {
  //     return { bgClr: 'darkgrey', borderClr: 'darkgrey' };
  //   } else return { bgClr: 'white', borderClr: 'black' };
  // }

  return (
    <div className='todo-item-c'>
      {todo.todoTitle}
      {/* <CustomButton customBtnLabel={'Terminer'} clr={setColors(todo.isDone)} /> */}
      <CustomButton customBtnLabel={'Terminer'} />
    </div>
  );
}

export default Todo;