import {combineReducers} from 'redux';
import quoteReducer from "./quoteReducer";


const appReducer = combineReducers({questData:quoteReducer});

export default (state, action) => {
  return appReducer(state, action);
}



