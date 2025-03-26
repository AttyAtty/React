import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように+と-ボタンをクリックすると現在のカウント数が1ずつ増減する機能を実装してください。*useStateを用いてcountとsetCountを定義してください。
      </p>
      <p>現在のカウント数: {count/* ここにcountを表示してください。*/}</p>
      <button onClick={(e)=>{setCount(count+1)}}>+</button>
      <button onClick={(e)=>{setCount(count-1)}}>-</button>
    </>
  );
};

export default Example;
