import { useState } from "react";

const Example = () => {
  let displayVal;
  let [ val, setVal ] = useState(); 
  //これは分割代入していることになっているらしい
  console.log('再レンダリングされました');
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setVal(e.target.value);
          // このsetValによって再レンダリングが起こっている
          // すなわち，Exampleがもう一度実行されている．のでイベントハンドラ前後にある処理もイベントのたびに行うことができる
          // displayVal = e.target.value;
        }}
      />
      = {val}
    </>
  );
};

export default Example;
