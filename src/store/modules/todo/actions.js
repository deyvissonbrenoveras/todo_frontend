export function addRequest(title, description) {
  return {
    type: '@todo/addRequest',
    payload: { title, description },
  };
}

export function addSuccess(todo) {
  return {
    type: '@todo/addSuccess',
    payload: todo,
  };
}

export function actionFailure() {
  return {
    type: '@todo/actionFailure',
  };
}
export function changeModalVisibility(visible) {
  return {
    type: '@todo/changeModalVisibility',
    payload: visible,
  };
}
export function listTodoRequest() {
  return {
    type: '@todo/listRequest',
  };
}
export function listTodoSuccess(todos) {
  return {
    type: '@todo/listSuccess',
    payload: todos,
  };
}
