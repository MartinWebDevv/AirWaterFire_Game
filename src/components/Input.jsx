import React from "react";
import powers from "../data/Powers";

export default function Input(props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-6">
      {/* Main Title Header */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-800 to-orange-600 bg-clip-text text-transparent drop-shadow-lg mb-3">
          Air Water Fire
        </h1>
      </div>

      {/* Cards row - always horizontal */}
      <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 w-full max-w-sm sm:max-w-none">
        {powers.map((power) => (
          <div
            key={power.id}
            onClick={() => props.clickHandler(power.name)}
            className={`w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center rounded-xl shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-transform overflow-hidden ${
              power.img ? "bg-cover bg-center" : "bg-white/80"
            }`}
            style={power.img ? { backgroundImage: `url(${power.img})` } : {}}
          >
            {!power.img && (
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-slate-700">
                {power.name}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Title below cards */}
      <h2 className="mt-8 sm:mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-wider sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-700 to-blue-700 text-center drop-shadow-[0_4px_16px_rgba(124,58,237,0.18)] px-4">
        Choose Your Power
      </h2>
    </div>
  );
}
