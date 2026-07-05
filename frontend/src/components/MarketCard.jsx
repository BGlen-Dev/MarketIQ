function MarketCard({ market, bias, color }) {
  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "25px",
        borderRadius: "15px",
        width: "230px",
        textAlign: "center",
        border: "1px solid #334155",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      }}
    >
      <h2>{market}</h2>

      <h3 style={{ color }}>{bias}</h3>
    </div>
  );
}

export default MarketCard;