// POINT truthyとfalsyについて
// falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// truthy → それ以外

/* POINT falsyな値の一覧
false
0 (数字)
0n (big int)
"" (空文字)
null
undefined
NaN (Not a Number)
*/

const a = 0;
let result = a ? 10 : -10;
console.log(result);

const falsy = 0;
const truthy = 1;
console.log(Boolean(truthy));
console.log(Boolean(falsy));

// 論理積 (&&) について
const resultA = "" && "foo";
const resultB = 2 && 1 && 0 && 3;
const resultC = "foo" && 4;

// console.log(resultA);
// console.log(resultB);
// console.log(resultC);

// falsyなものがあれば，それが出路される．全てtrueなら一番最後に見たものを返す．

// 理論和 (||) について
const resultD = "" || "foo";
const resultE = 0 || 2 || 0;
const resultF = "foo" || 4;

// 論理和は論理積と逆で，trueを感知したらそれを出力する．全てfalseなら一番最後に見たfalsyな値を出力する

console.log(resultD);
console.log(resultE);
console.log(resultF);
