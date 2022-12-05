export const REMOVE_TASK = "REMOVE_TASK";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const CHANGE_TO_EDIT = "CHANGE_TO_EDIT";

const actionAddTask = (task) => ({
  type: ADD_TASK,
  task,
});

const actionRemoveTask = (task) => ({
  type: REMOVE_TASK,
  id: task.id,
});

const actionEditTask = (list) => ({
  type: EDIT_TASK,
  list,
});


const actionChangeEditor = (task) => ({
  type: CHANGE_TO_EDIT,
  id: task.id,
})

export {actionAddTask, actionEditTask, actionRemoveTask, actionChangeEditor};