import { useState } from "react";

/* POINT 複数のstateの管理と使用上の注意点
 */
const Example = () => {
  /* POINT stateはトップレベル（if文などで囲まない）で呼ぶ
  */
  /* POINT 複数のstateを取り扱う場合はそれぞれ名前を変更可能。 */
  console.log(<Example/>)
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);

  /* POINT stateが呼ばれる順番は常に一定とする!if文とかを使って実行されない時があってもダメ
  コンソールをみればわかるが，_ownerのmemorizedStateの中で,ツリー構造(これがFiberTree)のようにnextに次のuseStateの値とかが
  保持されている．なので順番が大事．(一番最後に呼ばれたやつ以外で)一つでも欠けると0番目の変数名と一意しなかったり実行する関数が違かったりでエラーが起こる．
  */
  
  return (
    <>
      <p>ボタンAを{countA}回押しました！</p>
      <button onClick={() => setCountA(countA + 1)}>ボタンA</button>
      <p>ボタンBを{countB}回押しました！</p>
      <button onClick={() => setCountB(countB + 1)}>ボタンB</button>
      <p>ボタンCを{countC}回押しました！</p>
      <button onClick={() => setCountC(countC + 1)}>ボタンC</button>
    </>
  );
};

export default Example;
