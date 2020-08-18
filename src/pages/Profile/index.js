import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

export default function Profile() {
  const schema = Yup.object({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('O e-mail é obrigatório'),
    password: Yup.string(),
  });
  return (
    <Container>
      <h2>Meu perfil</h2>
      <Form schema={schema}>
        <Input name="name" placeholder="Seu nome" />
        <Input type="email" name="email" placeholder="Seu e-mail" />
        <Input type="password" name="oldPassword" placeholder="Senha antiga" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
