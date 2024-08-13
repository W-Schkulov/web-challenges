import { useState } from "react";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import useLocalStorageState from "use-local-storage-state";
import { getD6Roll } from "./utils";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("dice-rolls", {
    defaultValue: [],
  });

  const handleRoll = () => {
    const newRoll = { value: getD6Roll(), time: Date.now() };
    setRolls([newRoll, ...rolls]);
  };

  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
