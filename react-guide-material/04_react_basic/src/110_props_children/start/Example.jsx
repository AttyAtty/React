import Container from "./components/Container";
import Profile from "./components/Profile";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？">
        <Profile key={profile[0].name} {...profile[0]} />
        <Profile key={profile[1].name} {...profile[1]} />
      </Container>
        <Profile key={profile[0].name} {...profile[0]} />
    </div>
  );
};

export default Example;
