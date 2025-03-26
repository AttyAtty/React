import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
    return (
        <>
            <p>現在のカウント数:{count}</p>
            <button onClick={(e) => {setCount(count + 1)}}>+</button>
            <button onClick={(e) => {setCount(count - 1)}}>-</button>
            {/* ちなみにこの行でconsole.log(count)をすると０である．上のクリックはすぐに反映されない． */}
            {/* setCountは再レンダリングする関数であるが，近い将来に関数の実行を予約しているといってもいい．つまり非同期関数みたいなものだ．一つの関数に同じこの関数を実行すると値はその分増えたりしない． */}
        </>
    );
};

export default Example;
