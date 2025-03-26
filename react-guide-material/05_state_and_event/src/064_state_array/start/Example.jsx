import { useState } from 'react';
// endとは違うけどこれも正解．endの方がスマート
// オブジェクト型の初期値であるnumArrayはいじらない．これ鉄則．
// 変えるのはそのコピーであるnum．混乱するから　覚える．
const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [num, setNum] = useState(numArray);

  const shuffle = () => {
    const newNumArray = [...num];
    let j = newNumArray.length;
    for (let i = 0; i < j-1; i++){
      newNumArray[i+1] = num[i];
    }
    newNumArray[0] = num[j-1];
    setNum(newNumArray)
  }

  return (
    <>
      <h1>{num}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
