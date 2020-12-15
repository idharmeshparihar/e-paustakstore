import { put, takeEvery, all } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
// Mocking Async FecthBook function - Regards to api
export function* fetchBooksAsync() {
  let data = [];
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
  yield put({ type: "FETCH_BOOKS", payload: data });
}

export function* watchFetchBooksAsync() {
  yield takeEvery("FETCH_BOOKS_ASYNC", fetchBooksAsync);
}

export default function* rootSaga() {
  yield watchFetchBooksAsync();
}
