import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DentistDetail } from "./DentistDetail";
import { getDentistById } from "../../../services/dentistServices";
import { DentistContext } from "../../../context/DentistContext";

export const DentistDetailContainer = () => {
  const { state, dispatch } = useContext(DentistContext);
  const { id } = useParams();

  useEffect(() => {
    const dentist = getDentistById(id);
    dentist.then((res) => dispatch({ type: "GET_DENTIST", payload: res.data }));
  }, []);

  return (
    <div>
      <DentistDetail user={state.users}/>
    </div>
  );
};

