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
