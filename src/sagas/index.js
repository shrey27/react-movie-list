import { put, takeLatest, all } from 'redux-saga/effects';

const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63";

function* fetchMovies() {
  console.log('hello');
  const json = yield fetch(FEATURED_API)
    .then(response => response.json())
    .then( data=> {console.log(data.results)} );
  
  yield put({ type: "MOVIES_RECEIVED", moviesArray: [json.data.results] || [{ error: json.message }] });
}

function* actionWatcher() {
  yield takeLatest('GET_MOVIES', fetchMovies)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
