// POINT 分割代入の使い方
// 配列の中から特定の要素を変数に代入して取り出す方法のことを分割代入という

// const [ a, , c ] = ["配列1", "配列2", "配列3"];
// console.log(a);
// console.log(c);
// // console.log(arry[2]);

// const { z, x } = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(x);
// console.log(z);

const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

const fnArr = ([ country, state, city ]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

const fnObj = ({ country, state }) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  // console.log(`city: ${city}`);
};

// fnArr(arr);
fnObj(objAddress);
