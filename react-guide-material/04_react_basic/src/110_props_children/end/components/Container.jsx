import "./Container.css";

/* POINT props.children として子要素を受け取る
ここでは分割代入を使用して、 props.children を取り出しています。
*/
const Container = ({ title, children, first, second, color }) => {
  return (
    <div className={`container ${color}`}>
      <h3>{title}</h3>
      <div>{children}</div>
      {/* コンポーネントが親クラスから配列として渡ってくる */}
      <div>{first}</div>
      <div>{second}</div>
    </div>
  );
};

export default Container;
