import { useState } from "react";

// POINT stateとコンポーネントの関係
const Example = () => {
  const [ toggle, setToggle ] = useState(true);
  const toggleComponent = () => {
    setToggle(prev => !prev);
    // 元の値と異なる値を返す．逆の値を返す．引数の名前は任意．
  }
  return (
    <>
    {/* POINT コンポーネントの位置によってstateが識別される */}
    <button onClick={toggleComponent}>toggle</button>
    {toggle ? <Count key="A" title="A"/> : <Count key="B" title="B"/>}
    {/* これがプロップスみたいなもの．属性として渡しているものをCount関数の引数みたいにして扱える． */}
    {/* 上みたいにコンポーネントが同じ位置で変わったら，state(count)は引き継がれる.keyを与えてることで同じコンポーネントでも別物として見れている？ */}
    {/* <Count title="A"/>
    {toggle && <Count title="B"/>} */}
    </>
  )
}
const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
