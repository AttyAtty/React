// POINT コンポーネントのリファクタリング(分割代入)
// filterメソッドは親のExample関数に書くとよい

import { useState } from "react";

import AnimalFilter from "./components/AnimalFilter";
import AnimalList from "./components/AnimalList";

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
      <AnimalList animals={filterdAnimals} />
    </>
  );
};

export default Example;
