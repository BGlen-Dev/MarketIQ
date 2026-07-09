function Watchlist() {
  const markets = [
    {
      symbol: "US30",
      price: "52,353",
      change: "-0.42%",
      color: "red",
    },
    {
      symbol: "Gold",
      price: "4,114",
      change: "+0.18%",
      color: "lime",
    },
    {
      symbol: "NAS100",
      price: "29,435",
      change: "+0.09%",
      color: "lime",
    },
    {
      symbol: "DXY",
      price: "97.84",
      change: "-0.10%",
      color: "red",
    },
  ];

  return (
    <div className="watchlist">
      <h2>📈 Watchlist</h2>

      {markets.map((market) => (
        <div className="watch-item" key={market.symbol}>
          <span>{market.symbol}</span>

          <span>{market.price}</span>

          <span style={{ color: market.color }}>
            {market.change}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Watchlist;