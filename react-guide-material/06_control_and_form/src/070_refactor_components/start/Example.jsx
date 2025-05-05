import { useState } from "react";
import AnimalFilter from "./component/AnimalFilter";
import AnimalList from "./component/AnimalList";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  const filterdAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });
  return (
    <>
      <AnimalFilter filterState={[filterVal, setFilterVal]}/>
      <AnimalList animals={filterdAnimals}/>
    </>
  );
};

export default Example;
