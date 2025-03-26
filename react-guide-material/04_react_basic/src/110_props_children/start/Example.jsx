import Container from "./components/Container";
import Profile from "./components/Profile";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="順番通り渡す">
        <Profile key={profile[0].name} {...profile[0]} />
        <Profile key={profile[1].name} {...profile[1]} />
      </Container>
      <Container
        title="個別渡す"
        first={<Profile key={profile[0].name} {...profile[1]} />}
        second={<Profile key={profile[1].name} {...profile[0]} />}
        // uniqueであればキーの値は何でもいいのかもしれない．
      />
    </div>
  );
};

export default Example;
