import moon from "../assets/moon.png";

export default function Sun() {
  return (
    <div
      style={{
        width: "180px",
        height: "180px",
        borderRadius: "50%",
        position: "relative",
        overflow: "hidden",

        boxShadow:
          "0 0 22px rgba(220,235,255,0.7), 0 0 55px rgba(150,205,255,0.25)",
      }}
    >
      <img
        src={moon}
        alt="Moon"
        style={{
          position: "absolute",
          width: "360px",
          height: "360px",
          left: "-90px",
          top: "-90px",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}