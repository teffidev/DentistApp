import React, { useContext, useEffect } from "react";
import { Dentists } from "./Dentists";
import { DentistContext } from "../../../context/DentistContext";
import { getDentists } from "../../../services/dentistServices";

export const DentistsContainer = () => {
  const { state, dispatch } = useContext(DentistContext);

  useEffect(() => {
    const dentists = getDentists();
    dentists
      .then((res) => dispatch({ type: "GET_DENTISTS", payload: res.data }))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Dentists users={state.users} dispatch={dispatch} favs={state.favs} />
    </div>
  );
};
