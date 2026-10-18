import Galaxy from "./components/Galaxy";
export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#02040a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "3rem",
        fontWeight: "bold",
        letterSpacing: "4px",
      }}
    >
      <Galaxy />
    </div>
  );
}