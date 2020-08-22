import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';

import api from '../../../services/api';
import {
  addSuccess,
  actionFailure,
  listTodoSuccess,
  changeModalVisibility,
  updateTodoSuccess,
} from './actions';

export function* addRequest({ payload }) {
  try {
    const { title, description } = payload;
    const response = yield call(api.post, 'todos', { title, description });
    yield put(addSuccess(response.data));
    yield put(changeModalVisibility(false));
    toast.success('A tarefa foi criada com sucesso!');
  } catch (err) {
    toast.error('Houve um erro ao criar a tarefa');
    yield put(actionFailure());
  }
}
export function* listRequest() {
  try {
    const response = yield call(api.get, 'todos');
    yield put(listTodoSuccess(response.data));
  } catch (err) {
    toast.error('Houve um buscar as tarefas');
  }
}

export function* deleteRequest({ payload }) {
  try {
    yield call(api.delete, `todos/${payload}`);
    history.push('/painel');
    yield put(listTodoSuccess());
  } catch (err) {
    toast.error(
      err.response.data
        ? err.response.data.error
        : 'Houve um erro ao excluir a tarefa'
    );
  }
}

export function* updateRequest({ payload }) {
  try {
    const response = yield call(api.put, `todos/${payload.id}`, payload);
    yield put(updateTodoSuccess(response.data));
    yield put(changeModalVisibility(false));
    toast.success('A tarefa foi criada com sucesso!');
  } catch (err) {
    toast.error(
      err.response.data
        ? err.response.data.error
        : 'Houve um erro ao criar a tarefa'
    );
    yield put(actionFailure());
  }
}

export default all([
  takeLatest('persist/REHYDRATE', listRequest),
  takeLatest('@todo/ADD_REQUEST', addRequest),
  takeLatest('@todo/LIST_REQUEST', listRequest),
  takeLatest('@todo/DELETE_REQUEST', deleteRequest),
  takeLatest('@todo/UPDATE_REQUEST', updateRequest),
]);
