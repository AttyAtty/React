const Example = () => {
  const clickHandler = () => {
    let value = prompt('ボタンがクリックされました。');
    while (value !== '1'){
      if(value === null) break;
      // 上はキャンセルボタンが押されたときの処理
      value = prompt('違うにょ');
    }
  };

  const clickHandler2 = () => {
    console.log('ボタンがクリックされました。');
  };

  const clickHandler3 = () => {
    alert('この画面は非表示になります。');
  };
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
      <button onClick={clickHandler3}>クリックしてね</button>
      {/* onClickを呼ぶときに関数名の後ろに()をつけてはいけない．クリックされる前にＪＳＸが出来上がった(ブラウザを更新したとき)時に実行されてしまう． */}
      {/* アロー関数を用いてイベントハンドラーを書く場合は下のようになる．コールバック関数の考え方．こっちは()が必要 */}
      {/* <button onClick={() => { clickHandler }}>クリックしてね</button> */}

    </>
  );
};

export default Example;
