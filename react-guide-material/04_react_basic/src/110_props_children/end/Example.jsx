import Container from "./components/Container";
import Profile from "./components/Profile";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];
// 色は上のcolorプロパティで変える仕様になっている．これが属性として使われているから．
/* POINT コンポーネントの子要素は props.children に渡る！
コンポーネントが子要素を持つ場合、props.children という特別なプロパティとして受け渡されます。
 */
const Example = () => {
  return (
    <div>
      <Container title="順番通り渡す">
        <Profile key={profile[0].name} {...profile[0]} />
        <Profile key={profile[1].name} {...profile[1]} />
      </Container>
      {/* Containerの中のぷログラムも変えてあげなければいけない． */}
      <Container
        title="個別渡す"
        first={<Profile key={profile[0].name} {...profile[1]} />}
        second={<Profile key={profile[1].name} {...profile[0]} />}
      />
    </div>
  );
};

export default Example;

// 前半のContainer：
// この場合、Container の中に直接 Profile を並べて書いているため、React の children として扱われる。
// React はリストを扱うときに key を使って効率的に要素を更新する
// key があることで、profile[0] のデータが変わったとしても、profile[1] のデータを再描画せずに済む
// リストの要素を識別するために key が必要

// 後半のContainer：
// first と second に Profile をそのまま props として渡している
// リストではないため key は React にとって意味を持たない
// first や second は props の一部として渡されるだけ なので、React のリスト更新の仕組みに関係しない
// key を指定しなくても動作するが、指定してもエラーにはならない
// 👉 つまり、「key はユニークであれば何でもいい」 というのはリストのレンダリング時には正しいが、リストでない場合は不要（あっても影響しない）という解釈が正しい！

// keyのユニーク性
// key はリストの各要素を一意に識別できれば何でもOK
// key={profile[0].name} や key={profile[0].age} でも問題なし（ただし、age のように変更される可能性がある値は避けるべき）
// key は コンポーネント間でユニークである必要はなく、同じリストの中でユニークであればOK
// 例えば、<Profile key="Takashi" /> と <Profile key="Jane" /> のように、一意であれば React は適切に管理できる


