import { useState } from "react";

// POINT input要素、textarea要素の使い方
const Example = () => {

  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  
  return (
    <div>
      <label htmlFor="456">ラベル</label>
      <div>
        <input
          id="123"
          placeholder="こんにちは"
          value={val}
          // このvalueの文は実は大事で，グローバルなvalが代入されているから，他のタグでvalが入っているものが編集されると，その変更が適応される．clearValも．
          onChange={(e) => setVal(e.target.value)}
        />
        <textarea
          // textareaはなんかメモ書きみたいな．右下のマークを押してドラッグすると拡大縮小可能
          id="456"
          // ラベルのidと同じidにしたことで，ラベルを押すとこのtextareaにフォーカスが当たるようになる．
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        {/* htmlだとtextareaは<textarea name="" id=""></textarea>みたいに書いて，出力内容はタグの間に書くが，jsxだとvalueのところに代入するようにして書く */}
      </div>
      <h3>{val}</h3>
      <button onClick={clearVal}>クリア</button>
    </div>
  );
};

export default Example;
