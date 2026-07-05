function NewsPanel() {
  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "25px",
        borderRadius: "15px",
        marginTop: "40px",
        border: "1px solid #334155",
      }}
    >
      <h2>📅 Economic Calendar</h2>

      <ul
  style={{
    listStyle: "none",
    padding: 0,
    lineHeight: "2",
  }}
>
        <li>08:30 - CPI</li>
        <li>14:30 - NFP</li>
        <li>16:00 - FOMC Speech</li>
      </ul>
    </div>
  );
}

export default NewsPanel;