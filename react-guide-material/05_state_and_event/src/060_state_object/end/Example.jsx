import { useState } from "react";
// POINT プリミティブ型：1, "str", bool, 10n, Symbol(), null, undefined
// POINT オブジェクト型：{}, []などのプリミティブ型以外
// POINT オブジェクト型のstateを変更する場合には必ず新しいオブジェクトを作成する！

// このuseStateのオブジェクト型の時の値の渡し方代入の仕方，関数の呼び方とかはこんらんしやすいので注意．

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  // useStateの0番目にはオブジェクト型も渡せる
  const changeName = (e) => {
    person.name = '';
    console.log({ ...person, name: e.target.value, age: 20 })
    // setPerson({ name: e.target.value, age: person.age })
    setPerson({ ...person, name: e.target.value })
    // 何もいじらないプロパティがあってもそれも必ず記述する
    // これは新しいオブジェクトを作ってその各プロパティに値を設定しているのと同義
    // 上のやつはスプレッド演算子．personと同じ形で新しいオブジェクトを生成して展開している感じ．後ろに記述しているのは上書きしたいやつ
  }
  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value })
  }
  const reset = () => {
    setPerson({ name: "", age: "" })
  }
  return (<>
    <h3>Name:{person.name}</h3>
    <h3>Age:{person.age}</h3>
    {/* inputのvalue属性がdefault値をせっていしている */}
    <input type="text" value={person.name} onChange={changeName} />
    <input type="number" value={person.age} onChange={changeAge} />
    {/* numberによって数値しか入力できない感じになっている */}
    <div>
      <button onClick={reset}>リセット</button>
    </div>
  </>);
};

export default Example;
