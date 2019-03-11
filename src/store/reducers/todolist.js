const INITIAL_STATE = [
  {
    id: 1,
    text: 'Fazer café',
  },
  {
    id: 2,
    text: 'Estudar React',
  },
];

export default function todolist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: state.length + 1, text: action.payload.text }];
    default:
      return state;
  }
}
