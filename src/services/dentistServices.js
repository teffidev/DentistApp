import { dentistInstance } from "./dentistInstance";

export const getDentists = () => {
  const dentists = dentistInstance.get();
  return dentists;
};

export const getDentistById = (id) => {
  const dentist = dentistInstance.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return dentist;
};

