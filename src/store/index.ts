import {createStore} from 'redux';
import {reducers, State} from './reducers';

const store = createStore(reducers);

export default store;