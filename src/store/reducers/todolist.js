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

const randomNumber = (min, max) => {
  const minMath = Math.ceil(min);
  const maxMath = Math.floor(max);
  return Math.floor(Math.random() * (maxMath - minMath) + min);
};

export default function todolist(state = INITIAL_STATE, action) {
  const id = randomNumber(1, 1000000);
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id, text: `${action.payload.text} - ${id}` }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
