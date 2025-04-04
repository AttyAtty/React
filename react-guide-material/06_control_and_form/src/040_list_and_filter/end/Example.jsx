import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];
// POINT filterメソッドの使い方
const Example = () => {
  const [filterVal, setFilterVal] = useState("");
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)} />
      <ul>
        {animals
          .filter(animal => {
            // filter は 配列の要素を1つずつ見て、true を返したものだけ残す。
            const isMatch = animal.indexOf(filterVal) !== -1;
            // indexOf は 配列や文字列の中で、特定の値が最初に現れる位置（インデックス）を返す メソッドです
            console.log(animal.indexOf(filterVal))
            return isMatch
            // isMatchにtrueやfalseが入る
          })
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
