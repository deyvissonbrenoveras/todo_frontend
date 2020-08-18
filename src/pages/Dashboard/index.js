import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Form, Input, Textarea } from '@rocketseat/unform';

import { Fab } from '@material-ui/core';
import { Add as AddIcon, Close } from '@material-ui/icons';

import { Container, ContainerHeader, TodoList, AddModal } from './styles';

import {
  addRequest,
  listTodoRequest,
  changeModalVisibility,
} from '../../store/modules/todo/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const actionLoading = useSelector((state) => state.todo.loading);
  const modalVisibility = useSelector((state) => state.todo.modalVisibility);
  const todos = useSelector((state) => state.todo.todos);

  const schema = Yup.object({
    title: Yup.string()
      .min(5, 'Mínimo de 5 caractesres')
      .required('O título é obrigatório'),
    description: Yup.string()
      .min(5, 'Mínimo de 5 caractesres')
      .required('A descrição é obrigatória'),
  });

  useEffect(() => {
    dispatch(listTodoRequest());
  }, []);

  function submitHandle(data) {
    const { title, description } = data;
    dispatch(addRequest(title, description));
  }

  return (
    <Container>
      <ContainerHeader>
        <h2>To Do</h2>
        <Fab
          color="primary"
          aria-label="add"
          size="small"
          onClick={() => dispatch(changeModalVisibility(true))}
          disabled={modalVisibility}
        >
          <AddIcon />
        </Fab>
      </ContainerHeader>

      <TodoList>
        {todos &&
          todos.map((todo) => (
            <li>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
            </li>
          ))}
      </TodoList>
      <AddModal isVisible={modalVisibility}>
        <button
          type="button"
          onClick={() => dispatch(changeModalVisibility(false))}
        >
          <Close />
        </button>
        <Form schema={schema} onSubmit={submitHandle}>
          <Input name="title" placeholder="Título" />
          <Textarea name="description" placeholder="Descrição" rows="5" />
          <button type="submit">
            {actionLoading ? 'Salvando...' : 'Salvar'}
          </button>
        </Form>
      </AddModal>
    </Container>
  );
}
