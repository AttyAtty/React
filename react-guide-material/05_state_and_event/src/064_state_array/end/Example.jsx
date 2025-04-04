import { useState } from "react";
// こっちみたいに使えるメソッドは多いに越したことは無い．こっちの方がスマート
// POINT 配列のstateの扱い方
const Example = () => {
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);

  const shuffle = () => {
    const newNums = [ ...nums ];
    const lastVal = newNums.pop(); //一番後ろの要素をとってくる
    newNums.unshift(lastVal);   //先頭にとってきた値を挿入する
    setNums(newNums);
  }
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
