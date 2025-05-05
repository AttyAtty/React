import { useState } from 'react';


const Example = () => {
  const [todo,  setTodo] = useState();
  const todoList = ["店予約する", "卵買う", "郵便出す"]

  return (
    <>
      <h2>Reminder</h2>
      {todoList.map((todo) => (
        <button>完了</button>
        <p>{todo}</p>
      ))}

      <br />
      <input
        type="text"
        //onClick={(e) = }
      />
      <button>追加</button>
    </>
  );
};

export default Example;
