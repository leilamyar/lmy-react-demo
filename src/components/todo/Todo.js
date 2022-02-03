import PropTypes from 'prop-types';
import './Todo.css';
import CustomButton from '../customButton/CustomButton';

import { ePrios } from '../../utils/ePrios';

const Todo = (props) => {
  const { id, todoTitle, description, prio, complete } = props;

  const completeTodo = () => {
    props.onCompleteTodo(id);
  };
  const removeTodo = () => {
    props.onRemoveTodo(id);
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
        <button onClick={completeTodo} disabled={complete}>Terminer</button>
        <button onClick={removeTodo}>Supprimer</button>
        {/* <CustomButton customBtnLabel={'Terminer'} /> */}
        {/* <CustomButton customBtnLabel={'Supprimer'} /> */}
      </div>
    </div>
  );
}

Todo.defaultProps = {
  onCompleteTodo: () => { },
  onRemoveTodo: () => { },
}

Todo.propTypes = {
  onCompleteTodo: PropTypes.func,
  onRemoveTodo: PropTypes.func,
}

export default Todo;