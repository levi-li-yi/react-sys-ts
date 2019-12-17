// models
interface Todo {
    id: number,
    name: string,
    done: boolean
}

// action
let nextId = 0;

enum ActionTypes {
    ADD_TODO = '[todos] TOGGLE_TODO',
    TOGGLE_TODO = '[todos] TOGGLE_TODO'
}

interface AddTodoAction {
    key: 'add',
    type: ActionTypes.ADD_TODO,
    payload: {
        todo: Todo
    }
}

interface ToggleTodoAction {
    key: 'toggle',
    type: ActionTypes.TOGGLE_TODO,
    payload: {
        todoId: number
    }
}

// action creator: addTodo
function addTodo(name: string): AddTodoAction {
    return {
        key: 'add',
        type: ActionTypes.ADD_TODO,
        payload: {
            todo: {
                id: nextId++,
                name: name,
                done: false
            }
        }
    }
}

// action creator: toggleTodo
function toggleTodo(todoId: number): ToggleTodoAction {
    return {
        key: 'toggle',
        type: ActionTypes.TOGGLE_TODO,
        payload: {
            todoId,
        }
    }
}

type Action = AddTodoAction | ToggleTodoAction;

// reducer
export interface State {
    todos: Todo[]
}

export const initState: State = {
    todos: []
}

export function reducer(state: State = initState, action: Action) {
    if (action.type ===ActionTypes.ADD_TODO && action.key === 'add') {
        const todo = action.payload.todo
            return {
                ...state,
                todos: [...state.todos, todo]
            }
    }
    if (action.type ===ActionTypes.ADD_TODO && action.key === 'toggle') {
        const { todoId } = action.payload
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === todoId ? { ...todo, done: !todo.done } : todo)
            }
    }
    return state;
}