import {ADD_TODO, TOGGLE_TODO, DEL_TODO} from "../types"
const defaultTodos = [
    {
        id: 1,
        text: "吃飯",
        completed: false
    },
    {
        id: 2,
        text: "睡覺",
        completed: false
    },
    {
        id: 13,
        text: "打豆豆",
        completed: true
    },
];
const todos = (state = defaultTodos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.value.id,
                    text: action.value.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.value)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        case DEL_TODO:
            return state.filter(todo => todo.id !== action.value);
        default:
            return state
    }
};

export default todos
