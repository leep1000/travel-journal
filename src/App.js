import "./App.css";
import React from "react";
import data from "./data";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} data={data} />;
  });
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section className="cards-list">{cards}</section>
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
}

export default App;
