import Bye from "./components/Bye";
import Hello from "./components/Hello";

const Example = () => {
  // POINT propsの流れは一方通行．親クラスから子クラスへという流れ
  const myName = 'Tom';

  return (
    <>
      <Hello name={myName} />
      <Bye name={myName} />
    </>
  );
};

export default Example;
