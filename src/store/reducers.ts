import {combineReducers} from 'redux';
import * as dictStore from './dictStore';
import * as todoStore from './todo';

export interface State {
    todos: todoStore.State,
    dict: dictStore.State
}

export const initialState: State = {
    todos: todoStore.initState,
    dict: dictStore.initState
}

export const reducers = combineReducers<State>({
    todos: todoStore.reducer,
    dict: dictStore.reducer
});