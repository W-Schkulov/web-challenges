import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍎 Apple", color: "red" },
    { id: 2, name: "🍌 Banana", color: "yellow" },
    { id: 3, name: "🍇 Grape", color: "purple" },
    { id: 4, name: "🍉 Watermelon", color: "green" },
    { id: 5, name: "🍊 Orange", color: "orange" },
  ];
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
