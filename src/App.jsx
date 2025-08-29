import React, { useState } from "react";
import Input from "./components/Input";
import GameResults from "./components/GameResults";
import powers from "./data/Powers";

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [cpuInput, setCPUInput] = useState("");
  const [result, setResult] = useState("");

  function startGame(name) {
    WhoWins(name);
    setGameOn(true);
  }

  function WhoWins(user) {
    // 1) CPU picks
    const cpuID = Math.floor(Math.random() * 3) + 1;
    const cpuPower = powers.find((p) => p.id === cpuID);
    const cpu = cpuPower.name;

    // 2) Decide winner using YOUR mapping
    let nextResult = "It's a tie!";
    if (user !== cpu) {
      const youWin =
        (user === "air" && cpu === "water") ||
        (user === "water" && cpu === "fire") ||
        (user === "fire" && cpu === "air");
      nextResult = youWin ? "You win!" : "CPU wins!";
    }

    // 3) Commit state once
    setUserInput(user);
    setCPUInput(cpu);
    setResult(nextResult);
  }

  function restartGame() {
    setUserInput("");
    setCPUInput("");
    setResult("");
    setGameOn(false);
  }
  return (
    <div>
      {gameOn ? (
        <GameResults
          restart={restartGame}
          user={userInput}
          cpu={cpuInput}
          result={result}
        />
      ) : (
          <Input 
          clickHandler={startGame} 
          />
      )}
    </div>
  );
}

export default App;
