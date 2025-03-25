import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`;
    // const o = {
    //     color: "red",
    //     num: 123
    // }
    return (
        <> {/* これがフラグメント */}
            <Child
                // POINT propsには全てのタイプの値を渡すことができます。
                // {...o} 上で定義したオブジェクトを展開している．
                color="blue"
                fn={hello}
                bool
                obj={{ name: 'Tom', age: 18 }}
                // 上の青括弧はjsx内でJavaScriptの仕様を実行するために必要なもの
            />
            <Child color="red" />
        </>
    )
};

export default Example;

// 例えば、普通の JavaScript 関数だったらこう書けるよね？
// function greeting(name) {
//   return `Hello, ${name}!`;
// }

// console.log(greeting("Alice")); // "Hello, Alice!"
// 👉 これはただの 関数の引数 で、 greeting("Alice") と直接値を渡している。

// 3️⃣ React コンポーネントの場合
// React でコンポーネントとして書くと、こうなる：

// function Greeting({ name }) {
//   return <h1>Hello, {name}!</h1>;
// }

// // 使用例
// <Greeting name="Alice" />
// <Greeting name="Bob" />

// ここでの name="Alice" は、実は 親コンポーネントから渡されるデータ。
// 👉 React のコンポーネントは HTMLタグのように書ける ので、関数の引数よりも 直感的にデータを渡せる んだ！

// 4️⃣ props じゃなくて普通の引数を使うと？
// もし props を使わずに、関数の引数として直接渡すなら、こんな形になる：

// jsx
// コードをコピーする
// function Greeting(name) {
//   return <h1>Hello, {name}!</h1>;
// }

// // こういうふうに書かないといけなくなる
// Greeting("Alice");

// 👉 でも、これは React の JSX では動かない！
// JSX では、関数を HTMLタグのように呼び出す のが基本ルールだから、Greeting("Alice") のような書き方はできない。

// ✅ だから、React では <Greeting name="Alice" /> のように「タグっぽい形」でデータを渡せる props の仕組みがある んだ。
// タグで属性名を指定して，入れたい属性を渡すといった感じ．

// 結論： ✅ React ではコンポーネントを HTML のように使うために props を使う！
// ✅ 普通の関数の引数とはちょっと違い、親コンポーネントからデータを渡す仕組みになっている！
// ✅ props じゃなくても動くけど、みんなが props を使ってるから統一したほうがわかりやすい！