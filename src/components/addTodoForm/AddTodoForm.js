import PropTypes from 'prop-types';
import './AddTodoForm.css';
import CustomTitle from '../customTitle/CustomTitle';
import { useState } from 'react';
import { ePrios } from '../../utils/ePrios';

const AddTodoForm = (props) => {

  const [inputs, setInputs] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs((inp) => ({
      ...inp,
      [name]: value,
    }));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const { todoTitle, description, prio } = inputs;
    let newTodo = { todoTitle, description, prio, complete: false };
    props.onAddTodo(newTodo);
  };

  return (
    <>
      <CustomTitle className='title' titleText={'Ajouter une nouvelle tâche'} />
      <div className="form-c" onSubmit={handleAddTodo}>
        <form id='todo-form'>
          <div className='form-field'>
            <label htmlFor="todoTitle">Nom:</label>
            <input type="text" name="todoTitle" id="todoTitle" value={inputs.todoTitle} onChange={handleInput} />
          </div>
          <div className='form-field'>
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" id="description" value={inputs.description} onChange={handleInput} />
          </div>
          <div className='form-field'>
            <label htmlFor="prio">Priorité:</label>
            <select name="prio" id="prio" value={inputs.prio} onChange={handleInput}>
              <option value={ePrios.normal}>{ePrios.normal}</option>
              <option value={ePrios.high}>{ePrios.high}</option>
              <option value={ePrios.low}>{ePrios.low}</option>
            </select>
            {/* </div>
          <div className="form-field"> */}
            <input type="submit" value="Ajouter" />
          </div>
        </form>
      </div>
    </>
  );
}

AddTodoForm.defaultProps = {
  onAddTodo: () => { },
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
}

export default AddTodoForm;
