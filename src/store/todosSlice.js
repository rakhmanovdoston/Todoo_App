import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name:"todos",
    initialState: {
        today: [],
        tomorrow: [],
        thisWeek: [],
        upcoming:[]
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
        },
        addNewTodoUpcoming: (state, action) => {
            state.upcoming.push(action.payload);
        },
        addUpcoming: (state ,action) => {
            state.upcoming = action.payload
        },
        deleteUpcoming: () => {
            state.upcoming = state.upcoming.filter((todo) => todo.id !== action.payload);
        },
        addNewTodoTomorrow : (state , action) => {
            state.tomorrow.push(action.payload);
        },
        addTomorrow: (state ,action) => {
            state.tomorrow = action.payload;
        },
        deleteTodoTomorrow: (state , action) => {
            state.tomorrow = state.tomorrow.filter((todo) => todo.id !== action.payload);
        },
        addNewTodoWeek : (state , action) => {
            state.thisWeek.push(action.payload);
        },
        addThisWeek: (state ,action) => {
            state.thisWeek = action.payload;
        },
        deleteTodoThisWeek: (state , action) => {
            state.thisWeek = state.thisWeek.filter((todo) => todo.id !== action.payload);
        },

    }
})

export const {
    addToday , 
    deleteTodoToday , 
    addNewTodoToday , 
    checkTodoToday , 
    addNewTodoUpcoming , 
    addUpcoming , 
    deleteUpcoming,
    addNewTodoTomorrow ,
    addTomorrow,
    deleteTodoTomorrow,
    addNewTodoWeek ,
    addThisWeek,
    deleteTodoThisWeek
} =todosSlice.actions;
export default todosSlice.reducer