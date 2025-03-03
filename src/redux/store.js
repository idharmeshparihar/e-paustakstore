import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import rootSaga from "./sagas";
// Defining Milddleware
const sagaMiddleware = createSagaMiddleware();
// Expoting Store
export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
