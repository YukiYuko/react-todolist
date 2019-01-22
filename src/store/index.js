import {createStore} from "redux";
import reducer from "./reducers/index"
//createStore 接收一个函数
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store