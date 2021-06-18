import { createStore, applyMiddleware } from "redux";
import createSagaMiddelware from "redux-saga";
import sagaWatcher from "./sagas/sagas";
import rootRueducer from "./reducers/rootReducer"
const saga = createSagaMiddelware();
const store = createStore(rootRueducer, applyMiddleware(saga));
saga.run(sagaWatcher);

export default store;