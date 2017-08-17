import {combineReducers} from 'redux';
import ResourceReducer from './reducer-resources';

 const allReducers = combineReducers({
     resources : ResourceReducer
 });

 export default allReducers;