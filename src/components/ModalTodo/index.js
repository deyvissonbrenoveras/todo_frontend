import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Input, Form, Textarea } from '@rocketseat/unform';
import { Close } from '@material-ui/icons';
import { Modal } from '@material-ui/core';
import { Container } from './styles';
import { changeModalVisibility } from '../../store/modules/todo/actions';

export default function ModalTodo(props) {
  const { initialData } = props;
  const dispatch = useDispatch();
  const { submitHandle } = props;
  const actionLoading = useSelector((state) => state.todo.loading);
  const modalVisibility = useSelector((state) => state.todo.modalVisibility);

  const schema = Yup.object().shape({
    title: Yup.string()
      .min(5, 'Mínimo de 5 caractesres')
      .required('O título é obrigatório'),
    description: Yup.string()
      .min(5, 'Mínimo de 5 caractesres')
      .required('A descrição é obrigatória'),
  });
  return (
    <Container isVisible={modalVisibility}>
      <button
        type="button"
        onClick={() => dispatch(changeModalVisibility(false))}
      >
        <Close />
      </button>
      <Form initialData={initialData} schema={schema} onSubmit={submitHandle}>
        <Input name="title" placeholder="Título" />
        <Textarea name="description" placeholder="Descrição" rows="5" />
        <button type="submit">
          {actionLoading ? 'Salvando...' : 'Salvar'}
        </button>
      </Form>
    </Container>
  );
}

ModalTodo.propTypes = {
  submitHandle: PropTypes.func.isRequired,
  initialData: PropTypes.shape,
};
ModalTodo.defaultProps = {
  initialData: null,
};
