export default function Starfield() {
  const stars = [];

  for (let i = 0; i < 1200; i++) {
    stars.push(
      <div
        key={i}
        style={{
          position: "absolute",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.2,
animation: `twinkle ${2 + Math.random() * 4}s infinite`,
color: "white",
          fontSize:
  Math.random() < 0.03
    ? `${Math.random() * 3 + 3}px`
    : `${Math.random() * 1.2 + 0.6}px`,
        }}
      >
        {Math.random() < 0.05 ? "✦" : "•"}
      </div>
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}
    >
      {stars}
    </div>
  );
}