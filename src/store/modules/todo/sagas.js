import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import {
  addSuccess,
  actionFailure,
  listTodoSuccess,
  changeModalVisibility,
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
export default all([
  takeLatest('@todo/addRequest', addRequest),
  takeLatest('@todo/listRequest', listRequest),
]);
