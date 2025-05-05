import AnimalItem from "./AnimalItem";

const AnimalList = ({animals}) => {
    if(animals.length === 0) {// 何も入力がないとき？
        return <h3>アニマルが見つかりません。</h3>;  // 見つからなかったときの表示
    }
    
    return (
    <ul>
        {animals.map((animal) => {
            return <AnimalItem animal={animal} key={animal}/>
        })}
    </ul>
    );
}

export default AnimalList;