"use client";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] px-6"
    >
      <div className="text-center max-w-2xl">
        <h1
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          style={{
            color: "var(--color-text-white)",
            letterSpacing: "-0.5px",
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}
        >
          Tab Wise
        </h1>

        <p
          className="text-lg md:text-xl mb-8"
          style={{
            color: "var(--color-text-white-muted)",
            lineHeight: "1.6",
            maxWidth: "90%",
            margin: "0 auto",
          }}
        >
          Your browser’s chaos, reimagined. Group, track, and stay in control —
          effortlessly.
        </p>

        <button
          className="rounded-full py-3 px-8 font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "#fff",
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
