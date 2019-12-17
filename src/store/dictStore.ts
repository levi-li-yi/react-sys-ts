import {StoreState} from 'models/store/index';

const CHANGE = 'changeValue';
type CHANGE  = typeof CHANGE;

const ADD = 'addItem';
type ADD = typeof ADD;

// actions
interface Change {
    type: CHANGE,
    value: string
}

interface Add {
    type: ADD
}

type DictAction = Change | Add;

function change(): Change {
    return {
        type: CHANGE,
        value: ''
    }
}

function add(): Add {
    return {
        type: ADD
    }
}

// reducer
export function dictReducer(state: StoreState, action: Change): StoreState {
    if (action.type === CHANGE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputTypeValue = action.value;
        return newState;
    }
    if (action.type === ADD) {
        const newState = JSON.parse(JSON.stringify(state));
        if (newState.inputTypeValue) {
            newState.typeList.push(newState.inputTypeValue);
            newState.inputTypeValue = '';
            return newState;
        }
    }
    return state
}