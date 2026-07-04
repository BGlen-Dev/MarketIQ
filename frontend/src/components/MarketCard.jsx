function MarketCard({ market, bias, color }) {
  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        width: "220px",
        textAlign: "center",
      }}
    >
      <h2>{market}</h2>

      <h3 style={{ color }}>{bias}</h3>
    </div>
  );
}

export default MarketCard;