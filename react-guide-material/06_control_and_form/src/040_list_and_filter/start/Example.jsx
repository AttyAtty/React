import { useState } from 'react';

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal, setFilterValue] = useState("");
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={(e) => setFilterValue(e.target.value)}/>
      <ul>
        {animals
          .filter(animal => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
