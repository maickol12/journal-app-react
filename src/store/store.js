import { createStore,combineReducers, applyMiddleware,compose  } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './../reducers/index';
import { reducer as formReducer} from 'redux-form';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const redux = {
    ...reducers,
    form: formReducer
};

const reducer = combineReducers(redux);

export const store = createStore(
        reducer,
        composeEnhancers(applyMiddleware(thunk))
    );