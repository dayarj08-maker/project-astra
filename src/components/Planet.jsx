export default function Planet({
  color,
  size = 96,
  type,
}) {
  return (
    <div
      className="planet-wrapper"
      style={{
        animation: "planetFloat 4s ease-in-out infinite",
      }}
    >
      <div
        className="planet"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",

          background:
            type === "chemistry"
              ? `
                radial-gradient(circle at 30% 25%,
                  #dbeafe 0%,
                  ${color} 35%,
                  #123b7a 100%
                )
              `
              : type === "botany"
              ? `
                radial-gradient(circle at 30% 25%,
                  #dcfce7 0%,
                  ${color} 38%,
                  #14532d 100%
                )
              `
              : type === "zoology"
              ? `
                radial-gradient(circle at 30% 25%,
                  #fed7aa 0%,
                  ${color} 38%,
                  #7c2d12 100%
                )
              `
              : `
                radial-gradient(circle at 30% 30%,
                  #ff8a80 0%,
                  ${color} 38%,
                  #8b0000 100%
                )
              `,

          boxShadow: `
            0 0 25px ${color},
            inset -8px -8px 18px rgba(0,0,0,0.45),
            inset 8px 8px 12px rgba(255,255,255,0.12)
          `,

          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          position: "relative",
        }}
      />
    </div>
  );
}