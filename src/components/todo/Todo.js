import './Todo.css';
import CustomButton from '../customButton/CustomButton';

import { ePrios } from '../../utils/ePrios';

const Todo = ({ todoTitle, description, prio }) => {

  // const setColors = (isDone) => {
  //   if (isDone) {
  //     return { bgClr: 'darkgrey', borderClr: 'darkgrey' };
  //   } else return { bgClr: 'white', borderClr: 'black' };
  // }

  return (
    <div className='todo-c'>
      <div className="todo-info-c">
        <div className='todo-title-c'>
          <h4 className='todo-title'>{todoTitle}</h4>
          {/* <span className={(prio == ePrios.high) ? 'red-text' : ''}>{(prio === ePrios.high) ? prio : ''}</span> */}
          <span className='prio-high'>{(prio === ePrios.high) ? `(${prio})` : ''}</span>
        </div>
        <div className='todo-descr'>{description}</div>
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