import { Fragment } from "react";
import "./Child.css";

const Child = () => {
  /* POINT Fragmentがなぜ必要なのか？
  Reactのコンポーネントはルート要素が１つでなければならない（独立したツリー構造になっている）というルールがあります。そのため、Fragmentを使うことで、複数の要素を返すコンポーネントを余分なノードを追加することなくまとめることができます。
  しかもReact.Fragmentは一つのタグとして扱われないので良い．HTMLに変換するときはなかったことにされる
  */
  return (
    <Fragment key="1">
      {/* POINT keyはFragmentが受け取ることができる唯一の属性．ループの時に使うらしい */}
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        repellat dolor doloribus iure consequatur soluta? Optio corrupti ratione
        suscipit recusandae eius perspiciatis illo corporis? Aliquam nam
        repellendus quos expedita est?
      </p>
    </Fragment>
  );
};

export default Child;
