import React, { useContext } from "react";
import { Navbar } from "./Navbar";
import { DarkModeContext } from "../../../context/DarkModeContext";

export const NavbarContainer = () => {
  const { state, dispatch } = useContext(DarkModeContext);

  const handleChange = () => {
    dispatch({ type: "DARK_MODE" });
  };

  return (
    <div>
      <Navbar state={state} handleChange={handleChange} />
    </div>
  );
};
