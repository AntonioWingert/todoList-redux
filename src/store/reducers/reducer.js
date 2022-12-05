import {ADD_TASK, REMOVE_TASK, EDIT_TASK, CHANGE_TO_EDIT} from '../actions'

const INITIAL_STATE = {
  tasks: [],
  edit: false,
  idToEdit: 0,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      }
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id)
      }
    case EDIT_TASK: 
      return {
        ...state,
        tasks: action.list,
      }
    case CHANGE_TO_EDIT:
      return {
        ...state,
        edit: !state.edit,
        idToEdit: action.id,
      }
    default: 
      return state;
  }
};

export default reducer;