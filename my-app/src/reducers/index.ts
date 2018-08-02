import {combineReducers} from 'redux';
import orderReducer from './orderReducer';

let ofShapeOfState = 
{
    orders : orderReducer
};

const rootReducer = combineReducers(ofShapeOfState);

export default rootReducer;

// the north remembers
//
// function combineReducers(reducerSpec: any) {
//    return function(state: GlobalState, action: any): GlobalState {
//        return Object.entries(reducerSpec)
//            .map(([key, reducer]) => {
//                return [key, reducer(state[key], action)]
//            }).reduce((acc, [key, val]) => {
//                acc[key] = val
//                return acc
//            }, {})
//
//    }
// }