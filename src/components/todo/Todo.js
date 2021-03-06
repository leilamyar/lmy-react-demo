import PropTypes from 'prop-types';
import './Todo.css';
import CustomButton from '../customButton/CustomButton';

import { ePrios } from '../../utils/ePrios';

const Todo = (props) => {
  const { id, todoTitle, description, prio, complete } = props;

  const completeTodo = () => {
    // console.log('todo comp: complete clicked! id:', id);
    props.onCompleteTodo(id);
  };
  const removeTodo = () => {
    // console.log('todo comp: rm clicked! id:', id);
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
        {/* FIXME: fix refactor btn regression: delete not working anymore + btn "complete" isn't disabled */}
        <CustomButton customBtnLabel={'Terminer'} htmlAttribute={{ onClick: completeTodo }} />
        <CustomButton customBtnLabel={'Supprimer'} htmlAttribute={{ onClick: removeTodo }} />
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