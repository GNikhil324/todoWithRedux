import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
} 

export const TodoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodos: (state, action)=>{
            const todo = {
                id: nanoid(),
                todo:action.payload.todo,
                completed: action.payload.completed,
            }
            state.todos.push(todo);
        },
        deleteTodos: (state, action)=>{
            state.todos = state.todos.filter((val)=> val.id !== action.payload);
        },
        updateTodo: (state, action)=>{
            state.todos = state.todos.map((val)=> val.id === action.payload?.id ? {
                ...val,
                todo:action.payload.todo,
            } : val);
        },
        toggleComplete: (state, action)=>{
            state.todos = state.todos.map((val)=> val.id == action.payload?.id ? {...val,  
               completed: !val.completed } : val);
        },
    }
})

export const {addTodos, deleteTodos, updateTodo, toggleComplete} = TodoSlice.actions;

export default TodoSlice.reducer;