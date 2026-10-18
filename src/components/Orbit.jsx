export default function Orbit({
  radius,
  speed,
  angle = 0,
  children,
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.03)",
        animation: `orbit ${speed}s linear infinite`,
        animationDelay: `${-(angle / 360) * speed}s`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-45px",
          transform: "translateY(-50%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}