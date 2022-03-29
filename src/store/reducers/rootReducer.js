import { combineReducers } from 'redux';
import authReducer from './authReducer';
import boxReducer from './boxReducer';
import cabineReducer from './cabineReducer';
import tarifReducer from './tarifReducer';
import sizeReducer from './sizeReducer';
const rootReducer = combineReducers({ 
    users: authReducer,
    boxe: boxReducer,
    cabines: cabineReducer,
    tarifs: tarifReducer,
    sizes: sizeReducer  ,
})

export default rootReducer;