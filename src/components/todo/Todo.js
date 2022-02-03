import PropTypes from 'prop-types';
import './Todo.css';
import CustomButton from '../customButton/CustomButton';

import { ePrios } from '../../utils/ePrios';

const Todo = (props) => {
  const { id, todoTitle, description, prio, complete } = props;
  // const setColors = (isDone) => {
  //   if (isDone) {
  //     return { bgClr: 'darkgrey', borderClr: 'darkgrey' };
  //   } else return { bgClr: 'white', borderClr: 'black' };
  // }

  const completeTodo = () => {
    // console.log('Terminer btn clicked ! id:', id);
    props.onCompleteTodo(id);
  };
  return (
    <div className={`todo-c ${complete ? 'completed' : ''}`}>
      <div className="todo-info-c">
        <div className='todo-title-c'>
          <h4 className='todo-title'>{todoTitle}</h4>
          <span className='prio-high'>{(prio === ePrios.high) ? `(${prio})` : ''}</span>
        </div>
        <div className='todo-descr'>{description}</div>
      </div>
      <div className="todo-actions-c">
        {/* <CustomButton customBtnLabel={'Terminer'} clr={setColors(todo.isDone)} /> */}
        <button onClick={completeTodo} disabled={complete}>Terminer</button>
        {/* <CustomButton customBtnLabel={'Terminer'} /> */}
        <CustomButton customBtnLabel={'Supprimer'} />
      </div>
    </div>
  );
}

Todo.defaultProps = {
  onCompleteTodo: () => { },
}

Todo.propTypes = {
  onCompleteTodo: PropTypes.func,
}

export default Todo;