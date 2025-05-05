import { useState } from 'react';

const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");

  return (
    // <p style={{ textAlign: "center" }}>
    //   {/* <br /> は改行タグ*/}
    //   </p> 中央に配置したい時とかはこのpの中に書けば大丈夫
    <>
      <label htmlFor="90" >ラベル</label>
      <br />
      <input
        id="67"
        type="text"
        placeholder="こんにちは"
        value={val}
        onChange={(e)=> setVal(e.target.value)}
      />
      <textarea
        id="90"
        placeholder="こんにちは"
        value={val}
        onChange={(e)=> setVal(e.target.value)}
      />
       {/* 上のやつをdivとかで囲うとmerginが生まれるので，ボタンの上に程よい空間が生まれる */}
      <br />
      <h3>{val}</h3>
      <button onClick={clearVal}>クリア</button>
    </>
  );
};

export default Example;
