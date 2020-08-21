import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { updateProfileSuccess } from './actions';

export function* updateRequest({ payload }) {
  try {
    const { name, email, avatarId, ...rest } = payload;
    const profile = {
      name,
      email,
      avatarId,
      ...(rest.oldPassword ? rest : {}),
    };
    const response = yield call(api.put, 'users', profile);
    yield put(updateProfileSuccess(response.data));
    toast.success('O perfil foi alterado com sucesso!');
  } catch (err) {
    toast.error(
      err.response.data
        ? err.response.data.error
        : 'Houve um erro ao alterar o perfil'
    );
  }
}

export default all([takeLatest('@user/UPDATE_REQUEST', updateRequest)]);
