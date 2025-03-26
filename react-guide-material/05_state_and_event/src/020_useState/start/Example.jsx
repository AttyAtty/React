import { useState } from "react";

const Example = () => {
  let valArray = useState();
  return (
    <>
      <input 
      type="text" 
      onChange={(e) => {
        const setFn = valArray[1];
        // useStateの関数にはもともと値を更新する関数があるので，それに名前を付けて次の行で実行しているだけ
        setFn(e.target.value);
        }}/> = {valArray[0]}
        {/* 更新した値は0番めに勝手に入るからそれを出力 */}
    </>
  );
};

export default Example;
