import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import {Home} from "./Home";

export const HomeContainer = () => {
  const { state } = useContext(DarkModeContext);
  return (
    <div>
      <Home state={state} />
    </div>
  );
};
