import {combineReducers} from 'redux';
// import {dictReducer} from './dictStore';
import * as todoStore from './todo';

export interface State {
    todos: todoStore.State
}

export const initialState: State = {
    todos: todoStore.initState
}

export const reducers = combineReducers<State>({
    todos: todoStore.reducer
});