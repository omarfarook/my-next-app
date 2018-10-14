import { combineReducers } from 'redux';
import sampleReducer from './store/reducers/sample-reducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    sampleReducer,
    form: formReducer
})