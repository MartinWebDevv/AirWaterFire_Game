import React from "react";
import powers from "../data/Powers";

export default function Input(props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200">
      {/* Cards row */}
      <div className="flex gap-6 mt-20">
        {powers.map((power) => (
          <div
            key={power.id}
            onClick={() => props.clickHandler(power.name)}
            className={`w-32 h-32 flex items-center justify-center rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform overflow-hidden ${
              power.img ? "bg-cover bg-center" : "bg-white/80"
            }`}
            style={power.img ? { backgroundImage: `url(${power.img})` } : {}}
          >
            {!power.img && (
              <span className="text-lg font-semibold text-slate-700">
                {power.name}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Title below cards */}
      <h2 className="mt-10 text-3xl sm:text-4xl font-extrabold uppercase tracking-widest text-slate-800 drop-shadow-md">
        Choose Your Power
      </h2>
    </div>
  );
}
