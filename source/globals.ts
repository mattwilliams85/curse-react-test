import { createStore, applyMiddleware, combineReducers, Store, compose } from 'redux';
import thunk from 'redux-thunk';

import { Config } from './models/Config';
import { GlobalState } from './state/GlobalState';
import { gamesReducer } from './reducers/gamesReducer';

export let store: Store<GlobalState>;
export let config: Config;

export function initGlobals() {
    config = new Config();

    // hook redux dev tools extension, if it exists
    let composeEnhancers = compose;
    if (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) {
        composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];
    }

    store = createStore<GlobalState>(
        combineReducers<GlobalState>({
            games: gamesReducer,
        }),
        composeEnhancers(applyMiddleware(thunk)),
    );
}
