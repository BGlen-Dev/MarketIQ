import Header from "./components/Header";
import MarketCard from "./components/MarketCard";

function App() {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <MarketCard
          market="Gold"
          bias="Bullish"
          color="lime"
        />

        <MarketCard
          market="US30"
          bias="Bearish"
          color="red"
        />

        <MarketCard
          market="DXY"
          bias="Bullish"
          color="lime"
        />
      </div>
    </>
  );
}

export default App;