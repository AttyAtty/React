import { useState } from "react";

const Example = () => {
    const [ count, setCount ] = useState(0);

    return (
      <>
        <CountResult title="カウント" count={count} />
        <CountUpdate setCount={setCount} />
      </>
    );
  };
  const CountResult = ({ title, count }) => <h3>{title}: {count}</h3>

  const CountUpdate = ({ setCount }) => {
    // countUPやcountDownはsetCount関数を読んでいるだけなので引数要らない．
    // prevという名前は何でもいい．useStateの0番目に入っている値に対する操作というのは確定しているから
    const countUp = () => {
        setCount(prev => prev + 1);
    };
    const countDown = () => {
        setCount(prev => prev - 1);
    };
    return (
      <>
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
      </>
    );
  };
  
  export default Example;
  