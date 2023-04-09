import React, { createContext, useReducer } from "react";

export const DentistContext = createContext();

const initialState = {
  users: [],
  user: {},
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

const remove = (id, state) => {
  const newArr = state.favs.filter((fav) => fav.id !== id);
  localStorage.setItem("favs", JSON.stringify(newArr));
  return newArr;
};

const dentistReducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, users: action.payload };
    case "GET_DENTIST":
      return { ...state, user: action.payload };
    case "FAV_MODE":
      const isFavorite = state.favs.some(
        (fav) => fav.id === action.payload.id
      );

      isFavorite
        ? remove(action.payload.id, state)
        : localStorage.setItem("favs", JSON.stringify([...state.favs, action.payload]));

      return isFavorite
        ? { ...state, favs: remove(action.payload.id, state) }
        : { ...state, favs: [...state.favs, action.payload] };
    default:
      state;
  }
};

export const DentistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dentistReducer, initialState);

  return (
    <DentistContext.Provider value={{ state, dispatch }}>
      {children}
    </DentistContext.Provider>
  );
};
