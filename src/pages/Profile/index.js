import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import AvatarInput from './AvatarInput';

import { Container } from './styles';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const schema = Yup.object().shape({
    avatarId: Yup.number(),
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('E-mail inválido'),
    oldPassword: Yup.string(),
    password: Yup.string().when('oldPassword', {
      is: (oldPassword) => oldPassword,
      then: Yup.string()
        .min(8, 'Mínimo de 8 caractesres')
        .required('Insira a nova senha'),
    }),
    confirmPassword: Yup.string().when('oldPassword', {
      is: (oldPassword) => oldPassword,
      then: Yup.string()
        .min(8, 'Mínimo de 8 caractesres')
        .required('Confirme a nova senha')
        .oneOf([Yup.ref('password'), null], 'As senhas não conferem'),
    }),
  });
  function submitHandle(data) {
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <h2>Meu perfil</h2>
      <Form initialData={profile} schema={schema} onSubmit={submitHandle}>
        <AvatarInput name="avatarId" />
        <Input name="name" placeholder="Seu nome" />
        <Input type="email" name="email" placeholder="Seu e-mail" />
        <Input type="password" name="oldPassword" placeholder="Senha antiga" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar nova senha"
        />
        <button type="submit">Salvar</button>
        <button type="button" onClick={handleSignOut}>
          Sign Out
        </button>
      </Form>
    </Container>
  );
}
