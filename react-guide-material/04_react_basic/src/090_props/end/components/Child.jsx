/* POINT Props の受け取り方
親コンポーネントで属性値のように記述した各値は、１つのオブジェクトとして子コンポーネントで受け取ることができる。
 */


import "./Child.css";

/* POINT Propsを分割代入で受け取る！ */
/* POINT Propsのデフォルト値を設定する！ */
const Child = ({ color: c = 'green', num, fn, bool, obj }) => {

  // color という props を c という変数名で受け取る
  // もし color が渡されなかったら、デフォルト値 'green' を使う
  // num という props を受け取る（親コンポーネントから渡されていないので undefined になる）
  // console.log(bool);

  return (
    <div className={`component ${c}`}>
    {/* 上でcolorをcとしていなければ，<div className={`component ${props.color}`}> みたいなことになってる．引数(props)にpropsを書いていれば．*/}
      <h3>Hello Component</h3>
      {/* <h3>{num}</h3>
      <h3>{fn('Props')}</h3>
      <h3>{ bool ? 'true' : 'false'}</h3>
      <h3>{ obj.name + obj.age }</h3> */}
    </div>
  );
};

export default Child;
