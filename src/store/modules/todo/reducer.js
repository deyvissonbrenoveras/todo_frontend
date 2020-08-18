import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  modalVisibility: false,
  todos: [],
};

export default function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@todo/addRequest':
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case '@todo/addSuccess':
      return produce(state, (draft) => {
        draft.todos.push({
          title: action.payload.title,
          description: action.payload.description,
        });
        draft.loading = false;
      });
    case '@todo/actionFailure':
      return produce(state, (draft) => {
        draft.loading = false;
      });
    case '@todo/listSuccess':
      return produce(state, (draft) => {
        draft.todos = action.payload;
      });
    case '@todo/changeModalVisibility':
      return produce(state, (draft) => {
        draft.modalVisibility = action.payload;
      });
    default:
      return state;
  }
}
