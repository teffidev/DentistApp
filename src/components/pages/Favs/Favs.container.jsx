import React, { useContext } from "react";
import { DentistContext } from "../../../context/DentistContext";
import { Favs } from "./Favs";

export const FavsContainer = () => {
  const { state } = useContext(DentistContext);

  return (
    <div>
      <Favs state={state}/>
    </div>
  );
};

