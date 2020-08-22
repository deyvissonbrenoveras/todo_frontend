import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { IconButton } from '@material-ui/core';
import { Delete as DeleteIcon, Create as EditIcon } from '@material-ui/icons';

import { Container, TodoContainer, ButtonArea } from './styles';
import api from '../../services/api';

import {
  deleteRequest,
  changeModalVisibility,
  updateTodoRequest,
} from '../../store/modules/todo/actions';

import ModalTodo from '../../components/ModalTodo';

export default function Todo(props) {
  const dispatch = useDispatch();
  const modalVisibility = useSelector((state) => state.todo.modalVisibility);
  const todos = useSelector((state) => state.todo.todos);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    async function loadTodo() {
      const { id } = props.match.params;

      const updatingTodo = todos.filter((td) => td.id === Number(id))[0];
      setTodo(updatingTodo);
      // const response = await api.get(`todos/${id}`);
      // setTodo(response.data);
    }
    loadTodo();
  }, [todos]);

  function handleDelete() {
    const { id } = props.match.params;
    dispatch(deleteRequest(id));
  }

  function submitHandle(data) {
    const { id } = props.match.params;
    const { title, description } = data;
    dispatch(updateTodoRequest(id, title, description));
  }

  return (
    <Container>
      <ButtonArea>
        <IconButton
          color="primary"
          aria-label="editar"
          onClick={() => dispatch(changeModalVisibility(true))}
          disabled={modalVisibility}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="deletar"
          onClick={handleDelete}
          disabled={modalVisibility}
        >
          <DeleteIcon />
        </IconButton>
      </ButtonArea>
      <TodoContainer>
        {todo && (
          <>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </>
        )}
      </TodoContainer>
      <ModalTodo submitHandle={submitHandle} initialData={todo} />
    </Container>
  );
}

Todo.propTypes = {
  match: PropTypes.element.isRequired,
};
