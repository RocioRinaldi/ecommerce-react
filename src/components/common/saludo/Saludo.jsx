export const Saludo = ({ greeting }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        fontFamily: "sans-serif",
      }}
    >
      <h2> {greeting}</h2>
    </div>
  );
};
