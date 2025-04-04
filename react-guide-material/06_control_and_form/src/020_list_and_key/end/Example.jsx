const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => {
    return <li>Hello {animal}</li>;
  });

  return (
    <>
      <ul>
        {/*{animalList}  {helloAnimals} */}
        {
          /* POINT 配列など繰り返し操作を行うものに対しては子要素に一意なKeyキーを設定 */
          animals.map((animal) => (
            <li key={animal}>Hello, {animal}</li>
          ))
        }
      </ul>
    </>
  );
};

export default Example;
