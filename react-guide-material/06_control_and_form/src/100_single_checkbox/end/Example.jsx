import { useState } from "react";

// POINT チェックボックスの実装
const Example = () => {
  const [isChecked, setIsChecked] = useState(true);

  // const toggleChecked = (e) => {
  //   setIsChecked(prevState => !prevState);
  // };

  return (
    <div>
      <label htmlFor="my-check">
        {/* htmlForのおかげでラベルを押してもinputにフォーカスがあたる */}
        チェック：
      </label>
      <input
        type="checkbox"
        // チェックボックスにしてる
        id="my-check"
        checked={isChecked}
        // trueだったらチェックが入っていて，falseだったらチェックが外れる
        onChange={() => setIsChecked(prevState => !prevState)}
      />
      <div>{isChecked ? "ON!" : "OFF!"}</div>
    </div>
  );
};

export default Example;
