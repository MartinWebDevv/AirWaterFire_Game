import React from "react";
import powers from "../data/Powers";

export default function GameResults({ user, cpu, result, restart }) {
  const userPower = powers.find((p) => p.name === user) || {};
  const cpuPower  = powers.find((p) => p.name === cpu)  || {};

  const isTie = result?.toLowerCase().includes("tie");
  const userLoses = !isTie && result?.toLowerCase().includes("cpu");
  const cpuLoses  = !isTie && result?.toLowerCase().includes("you");

  return (
    <div className="game-results bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200">
      <div className="cards-row">
        <div className={`card user-card ${userLoses ? "loser" : ""}`}>
          {userPower.img ? (
            <div
              className="card-bg"
              style={{ backgroundImage: `url(${userPower.img})` }}
            />
          ) : (
            <div className="card-fallback">{userPower.name}</div>
          )}
          <span className="label">You: {userPower.name}</span>
        </div>

        <div className={`card cpu-card ${cpuLoses ? "loser" : ""}`}>
          {cpuPower.img ? (
            <div
              className="card-bg"
              style={{ backgroundImage: `url(${cpuPower.img})` }}
            />
          ) : (
            <div className="card-fallback">{cpuPower.name}</div>
          )}
          <span className="label">CPU: {cpuPower.name}</span>
        </div>
      </div>

      <p className="result-text">{result}</p>

      <button className="restart-btn" onClick={restart}>
        Restart Game
      </button>
    </div>
  );
}
