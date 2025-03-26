import "./Container.css";

const Container = ({ title, children, first, second, color }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      <div>{children}</div>
      {/* コンポーネントが親クラスから配列として渡ってくる */}
      <div>{first}</div>
      <div>{second}</div>
    </div>
  );
};

export default Container;
