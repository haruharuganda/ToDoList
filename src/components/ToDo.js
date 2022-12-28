import Navigation from "./Navigation";
import react, { useState } from "react";
import Head from "./head";
import Main from "./main";

function ToDo() {
  const [cards, setCards] = useState([
    { id: 0, title: "Test1", content: "Test", working: true },
    { id: 1, title: "Test2", content: "Test", working: true },
    { id: 2, title: "Test3", content: "Test", working: true },
  ]);

  return (
    <div className="app">
      <div className="container">
        <Navigation />
        <Head cards={cards} setCards={setCards} />
        <Main cards={cards} setCards={setCards} />
      </div>
    </div>
  );
}

export default ToDo;
