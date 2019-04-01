import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form';

import toggle from './toggle/reducer'
import movies from './movies/reducer'

const rootReducer =combineReducers({
    form:formReducer,
    toggle,
    movies
});

export default rootReducer;