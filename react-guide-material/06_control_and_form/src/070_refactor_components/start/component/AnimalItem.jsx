const AnimalItem = ({animal}) => {
    // 変数宣言の時にオブジェクトを宣言する場合は{}忘れないように．結構やらかす
    return (
    <li key={animal}>
        {animal}
        {animal === "Dog" && "★"}
        {/* 左辺のやつが成立するなら左辺の文字列を出力する．上のやつに続けて */}
    </li>
    );
}

export default AnimalItem;