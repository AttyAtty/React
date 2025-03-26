import React from "react";

const Example = () => {
  // 1
  const sample1 = <h1 className="greeting">Hello World</h1>;

  // 2
  // React.createElement("h1", {
  //   className: "greeting"
  // }, "Hello World");

  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );

  console.log(
    (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you.</h2>
      </div>
    ).props
  );

  //Babelは仮想DOMとも呼ばれる 

  // 2
  // const sample1 = React.createElement(
  //   'h1',
  //   {className:'greeting'}
  //   'Hello World',
  // );

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello!"),
    React.createElement("h2", null, "Good to see you.")
  );

  // 3
  // const sample1 = {
  //   type: 'h1',
  //   props: {
  //     className: 'greeting',
  //     children: 'Hello World'
  //   }
  // };

  // childrenが複数あった時は下のようにオブジェクトみたいにしてpropsがつくられる
  // const sample2 = {
  //   type: 'div',
  //   props: { children: [
  //     0: {type: "h1", props: { children: 'HEllo!'}}
  //     1: {type: "h2", props: { children: 'GoodBye!'}}
  //   ]}
  // };

  // JSXは上のような1,2,3の順で変換が行われている
  // JSXの構造はツリー状に管理される
  // コンポーネントもReact要素と言える．React要素はReact.createElementで生成されるメソッド，オブジェクトをさす
};

export default Example;
