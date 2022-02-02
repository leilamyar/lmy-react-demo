import './AddTodoForm.css';
import CustomTitle from '../customTitle/CustomTitle';

const AddTodoForm = () => {
  return (
    <>
      <CustomTitle className='title' titleText={'Ajouter une nouvelle tâche'} />
      <div className="form-c">
        <form id='todo-form'>
          <div className='form-field'>
            <label htmlFor="todo-name">Nom:</label>
            <input type="text" name="todo-name" id="todo-name" />
          </div>
          <div className='form-field'>
            <label htmlFor="todo-descr">Description:</label>
            <input type="text" name="todo-descr" id="todo-descr" />
          </div>
          <div className='form-field'>
            <label htmlFor="todo-prio">Priorité:</label>
            <select name="todo-prio" id="todo-prio">
              <option value="normal">Normale</option>
              <option value="high">Elevée</option>
              <option value="low">Faible</option>
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

export default AddTodoForm;
