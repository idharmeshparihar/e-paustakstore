import { put, takeEvery, all } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// ...

function* helloSaga() {
  console.log("Hello Sagas!");
}

// Our worker Saga: will perform the async increment task
export function* fetchBooksAsync() {

  let data = []
  fetch("db.json")
  .then((response) => {
    console.log("response", response);
    return response.json();
  })
  .then((val) => {
    console.log("data", val);
    data = val;
  });
  yield delay(1000);
  yield put({ type: "FETCH_BOOKS",payload:data });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchFetchBooksAsync() {
  yield takeEvery("FETCH_BOOKS_ASYNC", fetchBooksAsync);
}

export default function* rootSaga() {
  yield  watchFetchBooksAsync();
}
