// POINT コールバック関数の使い方
// コールバック関数とは引数に渡された関数を指す
function print(fn) {
  const result = fn(2);
  console.log(result);
}

function fn(number = 3) {
  return number * 2;
}

debugger;
print(fn);