// Actions and reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

/**
 * Creates a function that accepts an initial state, an object of reducer functions, and a
 * "slice name"
 */
const addTodoReducer = createSlice({
  name: 'todos', // name of the slice function
  initialState, // initial state
  reducers: { // logic inside reducers object
    // here we will write our reducer
    // adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    // remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    // update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    // complete todos:
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

// Exporting addTodos and reducer from addTodoReducer
export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;