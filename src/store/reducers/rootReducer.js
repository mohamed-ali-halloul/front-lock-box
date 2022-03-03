import { combineReducers } from 'redux';
import authReducer from './authReducer';
import boxReducer from './boxReducer';
import cabineReducer from './cabineReducer';
const rootReducer = combineReducers({ 
    auth: authReducer,
    boxe: boxReducer,
    cabines: cabineReducer,
})

export default rootReducer;