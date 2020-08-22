import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  modalVisibility: false,
  todos: [],
};

export default function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@todo/ADD_REQUEST':
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case '@todo/ADD_SUCCESS':
      return produce(state, (draft) => {
        draft.todos.push(action.payload);
        draft.loading = false;
      });
    case '@todo/ACTION_FAILURE':
      return produce(state, (draft) => {
        draft.loading = false;
      });
    case '@todo/LIST_SUCCESS':
      return produce(state, (draft) => {
        draft.todos = action.payload;
      });
    case '@todo/CHANGE_MODAL_VISIBILITY':
      return produce(state, (draft) => {
        draft.modalVisibility = action.payload;
      });
    case '@todo/UPDATE_SUCCESS':
      return produce(state, (draft) => {
        const index = draft.todos.findIndex(
          (td) => td.id === action.payload.id
        );
        draft.todos[index] = action.payload;
      });
    default:
      return state;
  }
}
