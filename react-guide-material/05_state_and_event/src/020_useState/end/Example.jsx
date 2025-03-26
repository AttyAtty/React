import { useState } from "react";

const Example = () => {
  // POINT useStateは[ 参照用の値、変更，更新用の関数 ]を返す
  // この関数知らなきゃむり
  // let valArry = useState();
  // POINT 分割代入で取得(どこで使われた？)
  let [val, setVal] = useState();

  return (
    <>
      <input
        type="text"
        /* POINT 入力状態をstateで管理する標準的な書き方 */
        onChange={(e) => {
          // const setFn = valArry[1];
          setVal(e.target.value);
        }}
      />
      = {val}
    </>
  );
};

export default Example;
