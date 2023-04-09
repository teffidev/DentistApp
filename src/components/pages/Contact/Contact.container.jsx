import React, { useState } from "react";
import { Contact } from "./Contact";

export const ContactContainer = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    info: "",
  });

  const [formErr, setFormErr] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const handleChange = (e, property) => {
    setUser({ ...user, [property]: e.target.value });
  };

  const validName = (str) => {
    const noEmptyCharacter = str.trim();
    console.log(noEmptyCharacter);
    if (noEmptyCharacter.length > 5 && str === noEmptyCharacter) {
      return true;
    } else {
      return false;
    }
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validateForm = () => {
    let err = {};

    if (!validName(user.name)) {
      err.name = "Your name is invalid!";
    }

    if (isValidEmail(user.email) == false) {
      err.email = "The email is invalid!";
    }

    setFormErr({ ...err });

    return Object.keys(err).length < 1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setIsLogged(true);
    }
  };

  return (
    <div>
      <Contact
        formErr={formErr}
        isLogged={isLogged}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
