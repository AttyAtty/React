import { useState } from "react";

// POINT プルダウンの実装
const Example = () => {
  const [selected, setSelected] = useState("Banana");
  // ここにプルダウンの初期値を代入しているので，下のvalue={selected}が初期値となる
  
  const OPTIONS = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        {/* <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cherry">Cherry</option> */}
        {/* htmlだと初期値としたかった選択肢のoptionタグの属性としてselectedを書いていたが，そこが違う */}
      </select>
      <div>選択された果物：{selected}</div>
    </>
  );
};

export default Example;
