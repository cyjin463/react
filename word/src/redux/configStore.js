import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"
import redux_word from "./modules/redux_word";

//미들웨어
// const middlewares = {thunk};
const rootReducer = combineReducers({redux_word});
const enhancer = applyMiddleware(thunk);

//reducer 모아서 store
const store = createStore(rootReducer, enhancer);

export default store;