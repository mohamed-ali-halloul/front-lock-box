import { combineReducers } from 'redux';
import authReducer from './authReducer';
import boxReducer from './boxReducer';
import cabineReducer from './cabineReducer';
import tarifReducer from './tarifReducer';
const rootReducer = combineReducers({ 
    users: authReducer,
    boxe: boxReducer,
    cabines: cabineReducer,
    tarifs: tarifReducer    
})

export default rootReducer;