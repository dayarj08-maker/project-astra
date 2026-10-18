export default function Star({ number }) {
  return (
    <div
      style={{
        width: "11px",
        height: "11px",
        borderRadius: "50%",
        background: "rgba(170,190,220,0.45)",
        boxShadow: `
          0 0 3px rgba(150,180,220,0.25),
          0 0 7px rgba(120,160,220,0.12)
        `,
        position: "relative",
        flexShrink: 0,
      }}
      title={`Star ${number}`}
    />
  );
}