import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name:"todos",
    initialState: {
        today: [],
        tomorrow: [],
        thisWeek: []
    },
    reducers: {
        addNewTodoToday : (state , action) => {
            state.today.push(action.payload);
        },
        addToday: (state ,action) => {
            state.today = action.payload;
        },
        deleteTodoToday: (state , action) => {
            state.today = state.today.filter((todo) => todo.id !== action.payload);
        },
        checkTodoToday : (state , action) => {
            state.today = state.today.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addToday , deleteTodoToday , addNewTodoToday , checkTodoToday} =todosSlice.actions;
export default todosSlice.reducer