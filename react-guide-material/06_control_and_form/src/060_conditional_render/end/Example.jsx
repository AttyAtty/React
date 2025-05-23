import { useState } from "react";

/* POINT 条件分岐 if文、&&、??（Null合体演算子）、３項演算子
  A ?? B (Aがnull or undefinedの時、Bを使う)
*/
const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;

            return isMatch;
          })
          .map((animal) => {
            // アロー関数は本文を{}で書こう決まりだが，オブジェクトリテラルは()で囲う必要がある．上のfilterのように
            return (
              <li key={animal}>
                {
                  // POINT if文
                  // if(animal === "Dog") {
                  //   return <li key={animal}>{animal}★</li>
                  // } else {
                  //   return <li key={animal}>{animal}</li>
                  // }
                  // POINT 3項演算子
                  // animal + (animal === "Dog"
                  //  ? "★"
                  //  : "")
                  // POINT null合体演算子
                  animal ?? "null,undefinedでした"
                  // animalにnullかundifinedが入っているときに行う処理．indexOfとか通じないから
                }
                {/* POINT &&演算子 */}
                {animal === "Dog" && "★"}
                {/* 左の条件がtrueの時は右の★が出力されるという意味 */}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Example;
