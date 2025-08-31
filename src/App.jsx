import React, { useState } from "react";
import Input from "./components/Input";
import GameResults from "./components/GameResults";
import powers from "./data/Powers";

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [cpuInput, setCPUInput] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);

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
    setScore(nextResult === "You win!" ? score + 1 : score);
    setCpuScore(nextResult === "CPU wins!" ? cpuScore + 1 : cpuScore);
  }

  function playAgain() {
    setUserInput("");
    setCPUInput("");
    setResult("");
    setScore(score);
    setCpuScore(cpuScore);
    setGameOn(false);
  }

  function restartGame() {
    setUserInput("");
    setCPUInput("");
    setResult("");
    setScore(0);
    setCpuScore(0);
    setGameOn(false);
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 px-4 py-6">
      {gameOn ? (
        <GameResults
          restart={restartGame}
          user={userInput}
          cpu={cpuInput}
          result={result}
          playAgain={playAgain}
          score={score}
          cpuScore={cpuScore}
        />
      ) : (
        <Input clickHandler={startGame} />
      )}
    </div>
  );
}

export default App;
