import { useState } from 'react';
import Todo from "./components/Todo";

const Example = () => {
  const [todo,  setTodo] = useState();
  const todoList = ["店予約する", "卵買う", "郵便出す"]

  return (
    <>
      <h2>Reminder</h2>
      <Todo />
    </>
  );
};

export default Example;
