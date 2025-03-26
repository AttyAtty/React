import "./Example.css";

const Example = () => {
  return (
    <div>
      <h3>コンソールを確認してください。</h3>
      <label>
        入力値のイベント：
        <input
          type="text"
          // 下のやつはinput要素とよく使うので覚える．
          onChange={() => console.log("onChange検知")}
          // 入力欄に何か変更があった時
          onBlur={() => console.log("onBlur検知")}
          // 入力欄からフォーカスが外れた時
          onFocus={() => console.log("onFocus検知")}
          // 入力欄にフォーカスが当たった時
        />
      </label>
      <div>
        <label>
          入力値を取得：
          <input type="text" onChange={(e) => console.log(e.target.value)} />
          {/* 引数のeは何でもいいけど，習慣的，暗黙的にeventのeが使われている．イベントを受け取るやつ．クリックだったりホバーだったり */}
        </label>
      </div> 
      <div
        className="hover-event"
        onMouseEnter={() => console.log("カーソルが入ってきました。")}
        onMouseLeave={() => console.log("カーソルが出ていきました。")}
        // マウスのイベント関数．onMouseOver, onMouseOUtがあるが，このふたつは，子要素に入るたびにも発火するので，やかましい
      >
        ホバーしてね！
      </div>
    </div>
  );
};

export default Example;
