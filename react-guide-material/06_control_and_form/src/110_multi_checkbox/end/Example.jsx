import { useState } from "react";

// end用:startと値が被らないための接続詞
const prefix = "end-";
// POINT 複数チェックボックスの実装
const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);
  // いじるのはcheckedだけ．初期設定長い

  // 合計値を出しその値を保存しておくためのstate
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const newFruits = fruits.map((fruit) => {
      const newFruit = { ...fruit };
      if (newFruit.label === e.target.value) {
        newFruit.checked = !fruit.checked;
        // trueとfalseを逆にする処理
      }

      return newFruit;
    });

    // 再レンダリングしてる
    setFruits(newFruits);
    // forEachバージョン
    // let sumVal = 0;
    // newFruits.forEach(fruit => {
    //   if(fruit.checked) {
    //     sumVal = sumVal + fruit.value;
    //   }
    // });

    // filter + forEachバージョン
    // let sumVal = 0;
    // newFruits
    //   .filter((fruit) => fruit.checked)
    // チェックされているものを配列として取得する
    //   .forEach((fruit) => (sumVal = sumVal + fruit.value));
    // 合計値を算出

    // filter + reduceバージョン
    let sumVal = newFruits
      .filter((fruit) => fruit.checked)
      // チェックされているものを配列として取得する
      .reduce((sumVal, fruit) => sumVal + fruit.value, 0);
      // 合計値を算出(初期値は第二引数)
    setSum(sumVal);
  };
  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label}>
            <input
              // 接続詞追加
              id={prefix + fruit.label}
              type="checkbox"
              value={fruit.label}
              checked={fruit.checked}
              // チェックボックスの表示の更新
              onChange={handleChange}
            />
            {/* 接続詞追加 */}
            <label htmlFor={prefix + fruit.label}>
              {fruit.label}:{fruit.value}
            </label>
          </div>
        );
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
