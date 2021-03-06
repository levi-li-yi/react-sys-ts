export const types = {
    CHANGE: 'changeValue',
    ADD: 'addItem',
    REMOVE: 'removeItem'
};

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

// actions creator 在派发dispatch时使用creator，只将变更状态向组件中暴露
export function change(value: string): Change {
    return {
        type: CHANGE,
        value: value
    }
}

export function add(): Add {
    return {
        type: ADD
    }
}

export interface State {
    value: string;
    inputTypeValue: string;
    typeList: Array<string>;
}

export const initState: State = {
    value: '',
    inputTypeValue: '',
    typeList: []
}

// reducer
export function reducer(state: State = initState, action: Change) {
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