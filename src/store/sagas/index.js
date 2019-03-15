import { all, takeLatest } from 'redux-saga/effects';
import { addFavorite } from './favorites';
import { Types as TypesFavorites } from '../ducks/favorites';

export default function* rootSaga() {
  yield all([takeLatest(TypesFavorites.ADD_REQUEST, addFavorite)]);
}
