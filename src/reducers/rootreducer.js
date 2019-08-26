import {combineReducers} from 'redux';
import notereducer from './notereducer';
import {todosRef} from '../firebase';
const initialstate={currentuser:"",databaseRef:""};
function appReducer(state=initialstate,action){
    switch(action.type){
        case 'SET_USER':
            const dbRef= (action.user) ? todosRef.ref(action.user) : "";
            return {...state,currentuser:action.user,databaseRef:dbRef}
        default:
            return state;
    }
}
const rootReducer = combineReducers({notereducer: notereducer,appReducer:appReducer});

export default rootReducer;