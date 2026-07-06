import AISummary from "./components/AISummary";
import NewsPanel from "./components/NewsPanel";
import "./App.css";

import Header from "./components/Header";
import MarketCard from "./components/MarketCard";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="cards">
        <MarketCard market="Gold" bias="Bullish" color="lime" />
        <MarketCard market="US30" bias="Bearish" color="red" />
        <MarketCard market="DXY" bias="Bullish" color="lime" />
      </div>
    <NewsPanel />
    <AISummary />
    </div>
  );
}

export default App;