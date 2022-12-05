import React, { useState } from 'react'
import { connect } from 'react-redux';
import {actionAddTask, actionEditTask, actionRemoveTask, actionChangeEditor} from '../store/actions'
import {FaTrash, FaRegEdit} from 'react-icons/fa';
import { Container, ContainerButtons, EmptyTasks, ListContainer } from '../styles/todo';
import {TbClipboardText} from 'react-icons/tb';

const Todo = ({ addTask, edit, idToEdit, tasks, removeTask, changeEdit, editTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    const id = tasks.length === 0 ? 0 : +tasks[tasks.length - 1].id + 1; 
    const obj = { task, id };
    addTask(obj);
    setTask('')
  }

  const handleEditTask = () => {
    const arrFilter = tasks.filter((task) => task.id !== idToEdit);
    const newObj = {task, id: idToEdit};
    const newList = [...arrFilter, newObj];
    editTask(newList);
    changeEdit(0);
    setTask('');
  };

  return (
    <Container>
      <section>
        <ContainerButtons>
          <input
          type="text"
          value={task}
          placeholder={!edit ? "Insira sua tarefa" : "Edite sua tarefa"}
          onChange={({target : { value }}) => setTask(value)}
          />
          {!edit ? (
            <button
            onClick={ handleAddTask }
            type='button'>
              Adicionar Tarefa
            </button>
          )
          : (
            <button
            onClick={ handleEditTask }
            type='button'>
              Editar Tarefa
            </button>
            )
          }
        </ContainerButtons>
        {
            tasks.length <= 0 && (
              <EmptyTasks>
                <TbClipboardText size={50} />
                <div>
                  <p>Você ainda não tem tarefas cadastradas</p>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
              </EmptyTasks>
            )
          }
        <ListContainer>
          {
            tasks.sort((a, b) => a.id - b.id).map((task) => (
              <div key={task.id}>
                <p>{task.task}</p>
                <div>
                  <button
                  onClick={() => changeEdit(task) }
                  >
                    <FaRegEdit size={20}/>
                  </button>
                  <button
                  onClick={ () => removeTask(task) }
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            ))
          }
        </ListContainer>
      </section>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(actionAddTask(task)),
  removeTask: (task) => dispatch(actionRemoveTask(task)),
  changeEdit: (task) => dispatch(actionChangeEditor(task)),
  editTask: (list) => dispatch(actionEditTask(list)),
});

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  edit: state.edit,
  idToEdit: state.idToEdit,
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);