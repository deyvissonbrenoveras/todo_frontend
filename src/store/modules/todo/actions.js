export function addRequest(title, description) {
  return {
    type: '@todo/ADD_REQUEST',
    payload: { title, description },
  };
}

export function addSuccess(todo) {
  return {
    type: '@todo/ADD_SUCCESS',
    payload: todo,
  };
}

export function actionFailure() {
  return {
    type: '@todo/ACTION_FAILURE',
  };
}
export function changeModalVisibility(visible) {
  return {
    type: '@todo/CHANGE_MODAL_VISIBILITY',
    payload: visible,
  };
}
export function listTodoRequest() {
  return {
    type: '@todo/LIST_REQUEST',
  };
}
export function listTodoSuccess(todos) {
  return {
    type: '@todo/LIST_SUCCESS',
    payload: todos,
  };
}
export function deleteRequest(id) {
  return {
    type: '@todo/DELETE_REQUEST',
    payload: id,
  };
}
export function updateTodoRequest(id, title, description, done) {
  return {
    type: '@todo/UPDATE_REQUEST',
    payload: { id, title, description, done },
  };
}

export function updateTodoSuccess(todo) {
  return {
    type: '@todo/UPDATE_SUCCESS',
    payload: todo,
  };
}
