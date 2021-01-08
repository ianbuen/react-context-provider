import React, { createContext, useContext, useReducer } from 'react';

// Prepares the data layer
export const StateContext = createContext();

// State
export const initialState = {
    boolState: false,
    arrState: []
};

// Wrap the app and provide the data layer
export const StateProvider = ({children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Reducer
const reducer = (state, action) => { 
     
    switch(action.type) {
        case "ACTION_ONE": 
            return {...state, boolState: action.bool};
        case "ACTION_TWO":
            return {...state, arrState: action.arr};

        default:
            return state;
    }
};

// Pull information from data layer
export const useStateValue = () => useContext(StateContext);


