import { useState } from "react";

// POINT ラジオボタンの実装
const Example = () => {
  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => setFruit(e.target.value);

  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];

  return (
    <>
      {RADIO_COLLECTION.map((value) => {
        return (
          <label key={value}>
            {/* keyも忘れずに */}
            <input
              type="radio"
              // ラジオボタンにしている
              value={value}
              checked={fruit === value}
              // trueを返すvalue(AppleかBananaかCherry)にボタンを変える
              onChange={onChange}
            />
            {value}
          </label>
        );
      })}
      {/* <label>
        <input
          type="radio"
          value="Banana"
          checked={fruit === "Banana"}
          onChange={onChange}
        />
        Banana
      </label>
      <label>
        <input
          type="radio"
          value="Cherry"
          checked={fruit === "Cherry"}
          onChange={onChange}
        />
        Cherry
      </label> */}
      <h3>私は{fruit}がたべたい</h3>
    </>
  );
};

export default Example;
