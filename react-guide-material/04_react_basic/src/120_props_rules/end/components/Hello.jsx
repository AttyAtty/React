const Hello = (props) => {

  // POINT propsは読み取り専用
  // props.name = 'Bob';
  // エラーが発生！

  // 下のやつやオブジェクトの設定状態を確認するためのプログラム．
  // const desc = Reflect.getOwnPropertyDescriptor(props, 'name');
  // console.log(desc)
  // conrigurableは隠し設定であるか否か，writableは編集可能か否かを示しているwritableがfalseなので，読み取り専用ということがわかる
  // enumarableはforループなどの列挙対象になるかどうかを表す

  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;