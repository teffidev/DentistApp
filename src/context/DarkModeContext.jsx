import React, { createContext, useReducer } from "react";

export const DarkModeContext = createContext();

const initialState = {
  isDark: false,
};

const darkModeReducer = (state, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return { ...state, isDark: !state.isDark };
    default:
      state;
  }
};

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, initialState);
  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
