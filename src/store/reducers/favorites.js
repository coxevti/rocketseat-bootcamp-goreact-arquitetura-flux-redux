const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return { ...state, error: null, loading: true };
    case 'ADD_FAVORITE_SUCCESS':
      return {
        ...state,
        error: null,
        loading: false,
        data: [...state.data, action.payload.data],
      };
    case 'ADD_FAVORITE_FAILURE':
      return {
        ...state,
        error: action.payload.erro,
        loading: false,
      };
    default:
      return state;
  }
}
