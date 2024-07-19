import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Wladimir" />
      <Greeting name="Felix" isCouch />;
    </>
  );
}

function Greeting({ name, isCouch }) {
  return <h1>Hello, {isCouch ? "Couch" : name}!</h1>;
}
