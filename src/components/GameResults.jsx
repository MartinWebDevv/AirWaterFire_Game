import React from "react";
import powers from "../data/Powers";

export default function GameResults({
  user,
  cpu,
  result,
  restart,
  score,
  cpuScore,
  playAgain,
}) {
  const userPower = powers.find((p) => p.name === user) || {};
  const cpuPower = powers.find((p) => p.name === cpu) || {};

  const isTie = result?.toLowerCase().includes("tie");
  const userLoses = !isTie && result?.toLowerCase().includes("cpu");
  const cpuLoses = !isTie && result?.toLowerCase().includes("you");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-6">
      {/* Cards row - always horizontal */}
      <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-4 sm:mt-6 w-full max-w-sm sm:max-w-none">
        <div className={`relative w-24 sm:w-32 md:w-36 lg:w-40 h-24 sm:h-32 md:h-36 lg:h-40 rounded-xl overflow-hidden shadow-lg ${
          userLoses ? "loser" : ""
        }`}>
          {userPower.img ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${userPower.img})` }}
            />
          ) : (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <span className="text-sm sm:text-lg md:text-xl font-semibold text-slate-700">
                {userPower.name}
              </span>
            </div>
          )}
          <span className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs sm:text-sm">
            You: {userPower.name}
          </span>
        </div>

        <div className={`relative w-24 sm:w-32 md:w-36 lg:w-40 h-24 sm:h-32 md:h-36 lg:h-40 rounded-xl overflow-hidden shadow-lg ${
          cpuLoses ? "loser" : ""
        }`}>
          {cpuPower.img ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${cpuPower.img})` }}
            />
          ) : (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <span className="text-sm sm:text-lg md:text-xl font-semibold text-slate-700">
                {cpuPower.name}
              </span>
            </div>
          )}
          <span className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs sm:text-sm">
            CPU: {cpuPower.name}
          </span>
        </div>
      </div>

      {/* Score display - responsive layout */}
      <div className="w-full flex justify-between items-center mb-6 mt-6 sm:mt-8 px-4 max-w-md mx-auto">
        <div className="flex flex-col items-center flex-1">
          <span className="font-bold text-sm sm:text-base md:text-lg text-blue-700 tracking-wide mb-1 drop-shadow-md">
            Your Score
          </span>
          <span className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-800 drop-shadow-lg">
            {score}
          </span>
        </div>
        <div className="flex-1" />
        <div className="flex flex-col items-center flex-1">
          <span className="font-bold text-sm sm:text-base md:text-lg text-orange-500 tracking-wide mb-1 drop-shadow-md">
            CPU Score
          </span>
          <span className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-red-700 drop-shadow-lg">
            {cpuScore}
          </span>
        </div>
      </div>

      {/* Result text */}
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-orange-600 text-center uppercase tracking-wider sm:tracking-widest drop-shadow-[0_6px_32px_rgba(124,58,237,0.25)] mb-6 sm:mb-8 mt-6 sm:mt-10 px-4">
        {result}
      </p>
      
      {/* Buttons - responsive layout */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 w-full max-w-xs sm:max-w-none">
        <button 
          className="px-6 py-3 sm:px-8 sm:py-4 bg-slate-700 hover:bg-slate-800 active:bg-slate-900 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-sm sm:text-base"
          onClick={playAgain}
        >
          Play Again
        </button>
        <button 
          className="px-6 py-3 sm:px-8 sm:py-4 bg-slate-700 hover:bg-slate-800 active:bg-slate-900 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-sm sm:text-base"
          onClick={restart}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}
