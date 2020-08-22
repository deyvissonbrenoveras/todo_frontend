import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Fab } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

import ModalTodo from '../../components/ModalTodo';
import { Container, ContainerHeader, TodoList } from './styles';

import {
  addRequest,
  listTodoRequest,
  changeModalVisibility,
} from '../../store/modules/todo/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const modalVisibility = useSelector((state) => state.todo.modalVisibility);

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
            <li key={todo.id}>
              <Link to={`/tarefa/${todo.id}`}>
                <h2>{todo.title}</h2>
              </Link>
              <p>{todo.description}</p>
            </li>
          ))}
      </TodoList>
      <ModalTodo submitHandle={submitHandle} />
      {/* <AddModal isVisible={modalVisibility}>
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
      </AddModal> */}
    </Container>
  );
}
